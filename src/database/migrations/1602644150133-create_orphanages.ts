import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602644150133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { // realizar alteraões como criar uma nova tablle, criar campo e deletar campo
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, // coluna semrpe vai ser um numero positivo
            isPrimary: true, // chave unica de cada usuário
            isGenerated: true, // gerada automaticmaente
            generationStrategy: 'increment', // gerada automaticamente aumentando o id pra cada usuario
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'opening_hours',
            type: 'varchar'
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          },
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // desfaz o que foi feuito no método UP -- faz o reverso
      await queryRunner.dropTable('orphanages');
    }

}
