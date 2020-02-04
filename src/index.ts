import fastify from 'fastify'
import fastifyGraphql from 'fastify-gql'

import schema from './schema'
import { port } from '../config'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const db = new PrismaClient()

export interface Context {
  db: PrismaClient;
}

app.register(fastifyGraphql, {
  schema,
  graphiql: 'playground',
  jit: 1,
  context: (): Context => ({ db }),
})

app.route({
  method: 'GET',
  url: '/health',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler (request, reply) {
    reply.send({ hello: 'world' })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
