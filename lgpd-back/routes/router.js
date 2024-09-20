import express from 'express';

let router = express.Router();

import courseController from './CourseController';
import evaluationController from './EvaluationController';
import teacherController from './TeacherController';
import userController from './UserController';

router.get('/', function (req, res) {
    console.log('oi');
    res.status(200).json({ message: 'oi!' });
});

router.use('/', userController);
router.use('/', courseController);
router.use('/', teacherController);
router.use('/', evaluationController);

export default router;
