exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 255).notNullable().unique();
      tbl.string("password", 255).notNullable();
    })
    .createTable("profiles", (tbl) => {
      tbl.increments();
      tbl.string("email", 255).notNullable().unique();
      tbl.string("firstName", 255).notNullable();
      tbl.string("lastName", 255).notNullable();
      tbl.integer("age", 128).notNullable();
      tbl.string("address", 255);

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("issues", (tbl) => {
      tbl.increments();
      tbl.string("title", 255).notNullable();
      tbl.string("description").notNullable();
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
  return knex.schema
    .dropTableIfExists("issues")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users");
};
