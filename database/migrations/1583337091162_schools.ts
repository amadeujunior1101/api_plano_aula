import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Schools extends BaseSchema {
  protected $tableName = 'schools'

  public async up() {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id').unsigned()
      table.string('name').notNullable().unique()
      table.string('uf').notNullable()
      table.string('city').notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.$tableName)
  }
}
