
exports.seed = function(knex) {
  knex('tasks').truncate();
  return knex('tasks').insert([
    {task_description: 'Do foo', project_id: 1},
    {task_description: 'Do bar', task_notes: 'Use Postman', project_id: 1, task_completed: 1},
    {task_description: 'Do baz', task_notes: 'Have fun!', project_id: 2, task_completed: 0}
  ])
};