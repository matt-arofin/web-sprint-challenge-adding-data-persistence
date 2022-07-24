// build your `Task` model here

const db = require('../../data/dbConfig');

// tasks should apparently include project_name and project_description:
async function find(){ 
    const tasks = await db('tasks').select('*');
    // isolate project ids
    // map over tasks and replace project ids with corresponding names and descriptions
    // might mean getting an array of projects with ids, names and descriptions rather than using an async call in my map later
    const projects = await db('projects').select('project_id', 'project_name', 'project_description');
    return tasks.map(/* async */ task => {
        const {task_id, task_description, task_notes, task_completed, project_id} = task;
        const projectFilter = projects.filter(item => item.project_id===project_id);
        const {project_name, project_description} = projectFilter[0]
        const result = {
            task_id,
            task_description,
            task_notes,
            task_completed: task_completed ? true: false,
            project_name,
            project_description
        }
        return result;
    })
}

async function findById(id){
    const array = await db('tasks')
        .where('task_id', id)
        .select('*')

    return array[0]
}

function post(task){
    return db('tasks')
        .insert(task)
        .then(async ([id]) => {
            const {task_id, task_description, task_notes, task_completed, project_id} = await findById(id);
            const result = {
                task_id,
                task_description,
                task_notes,
                task_completed: task_completed ? true: false,
                project_id
            }
            return result
        })
}


module.exports = {
    find,
    post
}