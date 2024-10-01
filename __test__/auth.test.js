import request from 'supertest'
const app = require('../api/app');



describe('POST /api/auth/login', () => {
  it('should login an existing user and return a JWT token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: "burak@test.com",
        password: '12345',
      })
      .expect('Content-Type', /json/);

    console.log('Response body:', response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data).toContain('.');
    expect(response.body.message).toBe('User logged in successfully');
  });

  it('should fail with incorrect password', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: "burak@test.com",
        password: 'Idontknow',
      })
      .expect('Content-Type', /json/);

    console.log('Response body:', response.body);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Username or password is not correct. Please Check.');
  });
});
