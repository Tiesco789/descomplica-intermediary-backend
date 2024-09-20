import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';

const Teacher = sequelize.define(
    'teachers',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowedNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { undescored: true }
);

export default Teacher;
