const axios = require('axios');
const chai = require('chai');
const { expect } = chai;
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema);

describe('GET Users', () => {
  it('should return a list of users', async () => {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    const userSchema = {
      title: 'User Schema',
      type: 'object',
      required: ['page', 'per_page', 'total', 'total_pages', 'data'],
      properties: {
        page: { type: 'integer' },
        per_page: { type: 'integer' },
        total: { type: 'integer' },
        total_pages: { type: 'integer' },
        data: { 
          type: 'array',
          items: {
            type: 'object',
            required: ['id', 'email', 'first_name', 'last_name'],
            properties: {
              id: { type: 'integer' },
              email: { type: 'string' },
              first_name: { type: 'string' },
              last_name: { type: 'string' },
            },
          },
        },
      },
    };

    expect(response.status).to.equal(200);
    expect(response.data).to.be.jsonSchema(userSchema);
  });
});
