import startServer from './start_server';
import typeDefs from './graphql/type_defs'
import resolvers from './graphql/resolvers'

startServer({ typeDefs, resolvers });