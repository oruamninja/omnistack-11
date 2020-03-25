//create migrate npx knex migrate:make create_ongs
// rodar migrate npx knex migrate:latest 


exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); // fk para tabela de ongs 
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
