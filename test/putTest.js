const axios = require('axios');
const chai = require('chai');
const { expect } = chai;
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema);

describe('PUT Update User', () => {
  it('should update an existing user', async () => {
    const response = await axios.put('https://reqres.in/api/users/2', {
      name: 'Jane Doe',
      job: 'Product Manager'
    });

    const userSchema = {
      title: 'User Update Schema',
      type: 'object',
      required: ['name', 'job', 'updatedAt'],
      properties: {
        name: { type: 'string' },
        job: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    };

    expect(response.status).to.equal(200);
    expect(response.data).to.be.jsonSchema(userSchema);
  });
});
