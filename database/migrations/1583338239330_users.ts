import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected $tableName = 'users'

  public async up () {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id').unsigned()
      table.string('name').notNullable().unique()
      table.string('registration')//matrícula
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.$tableName)
  }
}
