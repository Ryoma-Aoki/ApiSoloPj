import {MigrationInterface, QueryRunner} from "typeorm";

export class BacheUserMigration1605420289926 implements MigrationInterface {
    name = 'BacheUserMigration1605420289926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bache_user" ("userId" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "jobs" character varying NOT NULL, "salary" integer NOT NULL, "birthday" character varying NOT NULL, "entryDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_42593d971e1e554422f3e831dc2" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bache_user"`);
    }

}
