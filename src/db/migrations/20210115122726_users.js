exports.up = knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  table.string('email').notNullable()
  table.string('password').notNullable()
})

exports.down = knex => knex.schema.dropTableIfExists('users')
