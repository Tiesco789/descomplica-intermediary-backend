import courseRepository from '../repositories/courseRepository';

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel);
};

const getCourseById = (courseModel) => {
    return courseRepository.getCourseById(courseModel);
};

const getAllCourse = () => {
    return courseRepository.getAllCourse();
};

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id);
};

const updateCourseById = (id, courseModel) => {
    return courseRepository.updateCourseById(id, courseModel);
};

const service = {
    saveCourse,
    getCourseById,
    getAllCourse,
    deleteCourseById,
    updateCourseById,
};

export default service;
