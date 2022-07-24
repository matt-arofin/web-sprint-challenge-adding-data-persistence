// build your `/api/tasks` router here
const router = require('express').Router();

const Model = require('./model');

router.post('/', (req, res, next) => { // eslint-disable-line
    const { project_id } = req.body;
    if(!project_id){
        res.status(404).json({message: 'You need a project id!!!'})
    }
    else {
        return Model.post(req.body)
            .then(project => res.status(201).json(project))
            .catch(err => next(err))
    }
})

// GET Projects - Response shape: [{"project_id": INT, "project_name": STR, "project_description": STR, "project_completed": BOOL}]
router.get('/', (req, res, next) => { // eslint-disable-line
    // return console.log('Configure GET here...');
    Model.find()
        .then(projects => res.json(projects))
        .catch(err => next(err))
})

module.exports = router;