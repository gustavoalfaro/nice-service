import { buildFederatedSchema } from '@apollo/federation'
import typeDefs from './typeDefinitions'

import resolvers from './resolvers'

const schema = buildFederatedSchema({
    typeDefs,
    resolvers
  })

export default schema