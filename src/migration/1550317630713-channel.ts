import { MigrationInterface, QueryRunner } from 'typeorm';

export class Channel1550317630713 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE "channel" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_842699fce4f3470a7d06d89de88" UNIQUE ("token"), CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "channel"`);
  }
}
