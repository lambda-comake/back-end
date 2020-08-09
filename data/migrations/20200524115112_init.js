exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 255).notNullable().unique();
      tbl.string("password", 255).notNullable();
      tbl.string("email", 255).notNullable().unique();
      tbl.string("firstName", 255).notNullable();
      tbl.string("lastName", 255).notNullable();
      tbl.integer("age", 128).notNullable();
    })

    .createTable("issues", (tbl) => {
      tbl.increments();
      tbl.string("title", 255).notNullable();
      tbl.string("description", 1000).notNullable();
      tbl.integer("upVotes");

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("issues").dropTableIfExists("users");
};
