const axios = require('axios');
const chai = require('chai');
const { expect } = chai;
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema);

describe('POST Create User', () => {
  it('should create a new user', async () => {
    const response = await axios.post('https://reqres.in/api/users', {
      name: 'John Doe',
      job: 'Software Developer'
    });

    const userSchema = {
      title: 'User Creation Schema',
      type: 'object',
      required: ['name', 'job', 'id', 'createdAt'],
      properties: {
        name: { type: 'string' },
        job: { type: 'string' },
        id: { type: 'string' },
        createdAt: { type: 'string' },
      },
    };

    expect(response.status).to.equal(201);
    expect(response.data).to.be.jsonSchema(userSchema);
  });
});
