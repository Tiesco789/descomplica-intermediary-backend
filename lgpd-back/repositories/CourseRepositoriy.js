import Course from '../models/Course';

const saveCourse = async (CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
};

const getAllCourse = async () => {
    return await Course.findAll({
        order: [['id', 'ASC']],
    });
};

const getCourseById = async (id) => {
    return await Course.findById(id);
};

const deleteCourseById = async (id) => {
    return await Course.destroy({ where: { id: id } });
};

const updateCourse = async (CourseModel, id) => {
    try {
        const result = await Course.update(CourseModel, {
            where: { id: id },
        });
        if (result[0] === 1) {
            return { message: 'Curso atualizado com sucesso' };
        } else {
            return { message: `Curso não encontrado ${id}`, status: 404 };
        }
    } catch {
        console.error();
    }
};

const factory = {
    saveCourse,
    getAllCourse,
    getCourseById,
    deleteCourseById,
    updateCourse,
};

export default factory;
