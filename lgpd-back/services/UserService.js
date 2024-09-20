import userRepositoriy from '../repositories/UserRepositoriy';

const saveUser = (userModel) => {
    return userRepositoriy.saveUser(userModel);
};

const getUserById = (userModel) => {
    return userRepositoriy.getUserById(userModel);
};

const getAllUsers = () => {
    return userRepositoriy.getAllUsers();
};

const deleteUserById = (id) => {
    return userRepositoriy.deleteUserById(id);
};

const updateUserById = (id, userModel) => {
    return userRepositoriy.updateUserById(id, userModel);
};

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById,
};

export default service;
