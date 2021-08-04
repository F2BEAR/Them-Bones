const app = require('../src/app')
const request = require('supertest')

describe('GET / ', () => {
  it('Should respond with a statusCode = 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
  it('Should thow 404 error when hitting unkonwn endpoint', async () => {
    const response = await request(app).get('/wrongEndpoint')
    expect(response.statusCode).toBe(404)
  })
})
