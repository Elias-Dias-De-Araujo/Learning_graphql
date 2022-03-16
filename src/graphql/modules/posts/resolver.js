import Post from '../../../models/Post'

export default {
    Query: {
        Posts: () => Post.find(),
        Post: (_, { id }) => Post.findById(id),
    },
    Mutatition: {
        createPost: (_, { data }) => Post.create(data),
        // A flag 'new' é justamente para retornar o valor após update
        updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true}),
        deletePost: async (_, { id }) => {
            const deleted = await Post.findOneAndDelete(id);
            return !!deleted;
        }
    },
};
