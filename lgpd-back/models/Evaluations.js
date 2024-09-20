import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';

const Evaluation = sequelize.define(
    'evaluations',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowedNull: false,
            primaryKey: true,
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { undescored: true }
);

export default Evaluation;
