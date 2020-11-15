import {MigrationInterface, QueryRunner} from "typeorm";

export class BacheUserMigration1605420183362 implements MigrationInterface {
    name = 'BacheUserMigration1605420183362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bache_user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "bache_user" ADD "birthday" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bache_user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "bache_user" ADD "birthday" TIMESTAMP NOT NULL`);
    }

}
