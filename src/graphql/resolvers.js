import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path'

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolversDefs = mergeResolvers(resolversArray);

console.log(resolversDefs);

export default resolversDefs;