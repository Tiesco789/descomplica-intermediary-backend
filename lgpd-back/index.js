import { pkg } from 'body-parser';
import { express } from 'express';
import { router } from './routes/router.js';

import association from './models/Associations.js';
import Sequelize from './utils/database.js';

const app = express();
const { json, urlenconded } = pkg;

app.use(json());
app.use(urlenconded({ extended: true }));

(async () => {
    try {
        association.associations();
        await Sequelize.sync();
        app.listen(3000, function () {
            console.log('listening on 3000');
        });
    } catch {
        console.error();
    }
})();

app.listen(3000, function () {
    console.log('listening from 3000');
});

app.use('/', router);
