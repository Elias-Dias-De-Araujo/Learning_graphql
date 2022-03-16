import User from '../../../models/User'

export default {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },
    Mutatition: {
        createUser: (_, { data }) => User.create(data),
        // A flag 'new' é justamente para retornar o valor após update
        updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true}),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id);
            return !!deleted;
        }
    },
};
