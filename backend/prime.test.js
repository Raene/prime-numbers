const app = require('./index');
const request = require('supertest');

describe('POST /', () => {
  it('should return the result of primes from custom input', async () => {
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: [1,3,4,5,6,7,9]
      });
    expect(res.body).toHaveProperty('status', true);
    expect(res.statusCode).toBe(200);
  })

  it('contains empty array', async () => {
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: []
      });
    expect(res.body).toHaveProperty('status', true);
    expect(res.statusCode).toBe(200);
  })

  it('sends an array with strings the filter array function should filter out the strings', async () => {
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: ["lol",5,"3"]
      });
    expect(res.body).toHaveProperty('status', true);
    expect(res.statusCode).toBe(200);
  })

  it('sends a number', async () => {
    let num = 6000
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: num
      });
    expect(res.body).toHaveProperty('status', false);
    expect(res.body).toHaveProperty('message', `${num} is not an array`);
    expect(res.statusCode).toBe(500);
  })

  it('sends a string', async () => {
    let str = "6000"
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: str
      });
    expect(res.body).toHaveProperty('status', false);
    expect(res.body).toHaveProperty('message', `${str} is not an array`);
    expect(res.statusCode).toBe(500);
  })

  it('sends huge prime values in array', async () => {
    let str = "6000"
    const res = await request(app)
      .post('/')
      .send({
        primeNumbers: [99999,77777,555555,3333333333]
      });
    expect(res.body).toHaveProperty('status', true);
    expect(res.statusCode).toBe(200);
  })
})

describe('GET /', () => {
  it('should calculate the first ten prime numbers', async () => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('status', true);
    expect(res.statusCode).toBe(200);
  });
});