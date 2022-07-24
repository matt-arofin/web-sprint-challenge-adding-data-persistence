// build your `/api/resources` router here
const router = require('express').Router();

const Model = require('./model');

router.post('/', (req, res, next) => { // eslint-disable-line
    // const { project_name } = req.body;
    // if(!project_name){
    //     res.status(404).json({message: 'You need a project name!!!'})
    // }
    return Model.post(req.body)
        .then(project => res.status(201).json(project))
        .catch(err => next(err))
})

// GET Projects - Response shape: [{"project_id": INT, "project_name": STR, "project_description": STR, "project_completed": BOOL}]
router.get('/', (req, res, next) => { // eslint-disable-line
    // return console.log('Configure GET here...');
    Model.find()
        .then(projects => res.json(projects))
        .catch(err => next(err))
})

module.exports = router;