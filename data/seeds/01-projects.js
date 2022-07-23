
exports.seed = function(knex) {
  knex('projects').truncate();
  return knex('projects').insert([
    {project_name: 'Web API', project_description: 'Build an API'},
    {project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1}
  ])
};