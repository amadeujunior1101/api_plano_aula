import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserSchools extends BaseSchema {
  protected $tableName = 'user_schools'

  public async up() {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id').notNullable()
        .unsigned()
        .index('user_id')
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('cascade')
      table
        .integer('school_id').notNullable()
        .unsigned()
        .index('school_id')
      table
        .foreign('school_id')
        .references('schools.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.$tableName)
  }
}
