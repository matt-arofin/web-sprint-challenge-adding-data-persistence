// build your `Project` model here
// Require the database 
const db = require('../../data/dbConfig');

async function find(){ 
    const projects = await db('projects').select('*')
    return projects.map(project => {
        const {project_name, project_description, project_completed} = project;
        const result = {
            project_name,
            project_description,
            project_completed: project_completed ? true : false
        }
        return result;
    })
}

async function findById(id){
    const array = await db('projects')
        .where('project_id', id)
        .select('*')

    return array[0]
}

function post(project){
    return db('projects')
        .insert(project)
        .then(async ([id]) => {
            const {project_name, project_description, project_completed} = await findById(id);
            const result = {
                project_name,
                project_description,
                project_completed: project_completed ? true : false
            }
            return result
        })
}


module.exports = {
    find,
    post
}