exports.up = function(knex) { //create 3 tables: projects, resources, tasks
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.varchar('project_name', 80).notNullable();
            tbl.varchar('project_description');
            tbl.boolean('project_completed').notNullable().defaultTo(0);
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id');
            tbl.varchar('resource_name', 80).unique().notNullable();
            tbl.varchar('resource_description');
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.varchar('task_description').notNullable();
            tbl.varchar('task_notes');
            tbl.boolean('task_completed').notNullable().defaultTo(0);
            tbl.integer('project_id')
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE') // is this necessary?
                .onDelete('CASCADE')
        })
        .createTable('resource_assignment', tbl => {
            tbl.increments();
            // tbl.integer('project_id')
            //     .unsigned()
            //     .references('project_id')
            //     .inTable('projects')
            //     .onUpdate('CASCADE')
            //     .onDelete('CASCADE')
            tbl.text('project_name')
                .references('project_name')
                .inTable('porjects')
            tbl.text('project_completed')
                .references('project_completed')
                .inTable('porjects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            // tbl.integer('resource_id')
            //     .unsigned()
            //     .references('resource_id')
            //     .inTable('resources')
            //     .onUpdate('CASCADE')
            //     .onDelete('CASCADE')
            tbl.text('resource_name')
                .references('resource_name')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resource_assignment')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
