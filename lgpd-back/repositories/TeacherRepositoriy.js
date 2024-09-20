import Teacher from '../models/Teacher';

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
};

const getAllTeacher = async () => {
    return await Teacher.findAll({
        order: [['id', 'ASC']],
    });
};

const getTeacherById = async (id) => {
    return await Teacher.findById(id);
};

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({ where: { id: id } });
};

const updateTeacher = async (teacherModel, id) => {
    try {
        const result = await Teacher.update(teacherModel, {
            where: { id: id },
        });
        if (result[0] === 1) {
            return { message: 'Professor atualizado com sucesso' };
        } else {
            return { message: `Professor não encontrado ${id}`, status: 404 };
        }
    } catch {
        console.error();
    }
};

const factory = {
    saveTeacher,
    getAllTeacher,
    getTeacherById,
    deleteTeacherById,
    updateTeacher,
};

export default factory;
