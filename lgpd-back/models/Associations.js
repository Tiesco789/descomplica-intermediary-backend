import Course from "./Course.js";
import Evaluation from "./Evaluation.js";
import Teacher from "./Teacher.js";
import User from "./User.js";

const associations = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation);
}

const factory = {
    associations
}

export default factory;
