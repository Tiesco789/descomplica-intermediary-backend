import evaluationRepository from '../repositories/EvaluationRepository';

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
};

const getEvaluationById = (evaluationModel) => {
    return evaluationRepository.getEvaluationById(evaluationModel);
};

const getAllEvaluation = () => {
    return evaluationRepository.getAllEvaluation();
};

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
};

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel);
};

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluation,
    deleteEvaluationById,
    updateEvaluationById,
};

export default service;
