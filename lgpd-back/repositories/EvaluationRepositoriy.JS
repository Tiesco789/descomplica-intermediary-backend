import Evaluation from '../models/Evaluation';

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save;
};

const getAllEvaluation = async () => {
    return await Evaluation.findAll({
        order: [['id', 'ASC']],
    });
};

const getEvaluationById = async (id) => {
    return await Evaluation.findById(id);
};

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({ where: { id: id } });
};

const updateEvaluation = async (evaluationModel, id) => {
    try {
        const result = await Evaluation.update(evaluationModel, {
            where: { id: id },
        });
        if (result[0] === 1) {
            return { message: 'Avaliação atualizado com sucesso' };
        } else {
            return { message: `Avaliação não encontrada ${id}`, status: 404 };
        }
    } catch {
        console.error();
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluation,
};

export default factory;
