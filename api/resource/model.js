// build your `Resource` model here

const db = require('../../data/dbConfig');

async function find(){ 
    const resources = await db('resources').select('*')
    return resources.map(resource => {
        const {resource_id, resource_name, resource_description} = resource;
        const result = {
            resource_id,
            resource_name,
            resource_description
        }
        return result;
    })
}

async function findById(id){
    const array = await db('resources')
        .where('resource_id', id)
        .select('*')

    return array[0]
}

function post(resource){
    return db('resources')
        .insert(resource)
        .then(async ([id]) => {
            const {resource_id, resource_name, resource_description} = await findById(id);
            const result = {
                resource_id,
                resource_name,
                resource_description
            }
            return result
        })
}


module.exports = {
    find,
    post
}