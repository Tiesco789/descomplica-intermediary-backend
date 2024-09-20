import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lgpd-database', 'postgres', 'postgres', {
    hots: 'localhost',
    dialect: 'postgres',
    port: 5432,
    define: {
        timestamps: false,
    },
});

export default sequelize;
