import User from '../models/User';

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
};

const getAllUser = async () => {
    return await User.findAll({
        order: [['id', 'ASC']],
    });
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const deleteUserById = async (id) => {
    return await User.destroy({ where: { id: id } });
};

const updateUser = async (userModel, id) => {
    try {
        const result = await User.update(userModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: 'Usuário atualizado com sucesso' };
        } else {
            return { message: `Usuário não encontrado ${id}`, status: 404 };
        }
    } catch {
        console.error();
    }
};

const factory = {
    saveUser,
    getAllUser,
    getUserById,
    deleteUserById,
    updateUser,
};

export default factory;
