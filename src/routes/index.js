//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const express = require('express');
const {student, teacher} = require("../controllers/")

const router = express.Router();

router.get('/',student.get);
router.post('/',student.create);
router.patch('/',student.update);
router.patch('/:id',student.update);
router.delete('/',student.delete);
router.delete('/:id',student.delete);

router.get('/',teacher.get);
router.post('/',teacher.create);
router.patch('/',teacher.update);
router.patch('/:id',teacher.update);
router.delete('/',teacher.delete);
router.delete('/:id',teacher.delete);

module.exports = router