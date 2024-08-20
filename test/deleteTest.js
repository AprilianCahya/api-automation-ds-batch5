const axios = require('axios');
const chai = require('chai');
const { expect } = chai;

describe('DELETE User', () => {
  it('should delete a user', async () => {
    const response = await axios.delete('https://reqres.in/api/users/2');
    expect(response.status).to.equal(204);
  });
});
