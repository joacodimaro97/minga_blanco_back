import { expect } from 'chai'
import request from 'supertest'
import app from '../app.js'

describe('POST /api/auth', () => {
  
  let api = null
  let auth = {
    email: "test@mh.com.ar",
    password: 'hola1234',
    photo: "https://i.postimg.cc/fyJsspq8/image.png",
  }

  before(async() => {
    api = request(app)
  });

    it('Should create new author', async() => {

      const { body, statusCode } = await api.post('/api/auth/signup')
            .send(auth)
      // console.log(response.body)
      expect(statusCode).to.equal(201)
      expect(body).to.have.property('message')
      expect(body.message).to.equal('user created')
    })
  
    it("should'nt create an user already exist", async() => {
      
      const { body, statusCode } = await api.post('/api/auth/signup')
            .send(auth)
      expect(statusCode).to.equal(400)
      expect(body).to.have.property('error')
      expect(body.error).to.equal('auth already exist!')
    })

})