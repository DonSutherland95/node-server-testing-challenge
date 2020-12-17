const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

const Sam = { name: 'Sam' }
const Frodo = { name: 'Frodo' }
const Merry = { name: 'Pippin' }

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('users').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('endpoints', () => {
  describe('[GET] /users', () => {
    it('responds with 200 OK', async () => {
      const res = await request(server).get('/api/users')
      expect(res.status).toBe(200)
    })
  })
  describe('[POST] /users', () => {
    it('returns the newly created user', async () => {
      const res = await request(server).post('/api/users').send(Sam);
      expect(res.body.id).toBe(1);
      expect(res.body.name).toBe('Sam');
    })
  })
  describe('[DELETE] /users/:id', () => {
    it('deletes a user id', async () => {
    //   await request(server).post('/api/users').send(Sam);
    //   const res = await request(server).delete('/api/users/1')
    //   expect(res.status).toBe(200)
        // await db('users').insert(Sam)
        // let resp = await request(server).get('/api/users/1')
        // expect(resp.body).toMatchObject(Sam)
        //  await request(server).delete('/api/users/1')
        //  const res = await request(server).get('/api/users')
        // expect(res.body).toHaveLength(0)
    })
  })

})