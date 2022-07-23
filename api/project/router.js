// build your `/api/projects` router here
const router = require('express').Router();
// Import model methods here
const Model = require('./model');

// Each route needs a POST and GET operation
// POST projects - Response shape: [{"project_id":INT, "project_name": STR, "project_description": STR (nullable), "project_completed": BOOL} <-- the API accepts 'true' or 'false' in req.body]
router.post('/', (req, res, next) => { // eslint-disable-line
    const { project_name } = req.body;
    if(!project_name){
        res.status(404).json({message: 'You need a project name!!!'})
    }
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