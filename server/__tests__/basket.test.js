const request = require('supertest');
const app = require('../index');

describe('GET /api/basket', () => {
  it('GET /basket return basket', async () => {
    
    const response = await request(app).get('/api/basket');

    await expect(response.status).toEqual(200);
    await expect(response.body).toEqual({});
  });
});
