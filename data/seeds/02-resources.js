
exports.seed = function(knex) {
  knex('resources').truncate();
  return knex('resources').insert([
    {resource_name: 'Keyboard'},
    {resource_name: 'Computer', resource_description: 'Macbook Pro'}
  ])
};