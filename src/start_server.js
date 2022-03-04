import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose';

const startServer = ({ typeDefs, resolvers }) => {
    //mongoose.connect('mongodb://localhost:')

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server is running at ${url} 🚀`));
}

export default startServer;