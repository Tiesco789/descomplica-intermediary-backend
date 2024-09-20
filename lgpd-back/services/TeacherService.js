import teacherRepositoriy from '../repositories/TeacherRepositoriy';

const saveTeacher = (teacherModel) => {
    return teacherRepositoriy.saveTeacher(teacherModel);
};

const getTeacherById = (teacherModel) => {
    return teacherRepositoriy.getTeacherById(teacherModel);
};

const getAllTeacher = () => {
    return teacherRepositoriy.getAllTeacher();
};

const deleteTeacherById = (id) => {
    return teacherRepositoriy.deleteTeacherById(id);
};

const updateTeacherById = (id, teacherModel) => {
    return teacherRepositoriy.updateTeacherById(id, teacherModel);
};

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeacher,
    deleteTeacherById,
    updateTeacherById,
};

export default service;
