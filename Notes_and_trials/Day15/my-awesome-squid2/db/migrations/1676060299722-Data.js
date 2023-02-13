module.exports = class Data1676060299722 {
    name = 'Data1676060299722'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "hash" text NOT NULL, "contract" text, "block_id" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_c0e1460f3c9eee975fee81002d" ON "transaction" ("block_id") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE TABLE "approval_event" ("id" character varying NOT NULL, "name" text NOT NULL, "src" text NOT NULL, "guy" text NOT NULL, "wad" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_4a04c4c5639ee9d282c55fac735" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_263de97df8f71c59fb9360b22e" ON "approval_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_77afdbded434e1422d4d64262e" ON "approval_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_a296be8180c880d431e2e6058c" ON "approval_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_719f45ea2c1a77d0d37330982e" ON "approval_event" ("src") `)
        await db.query(`CREATE INDEX "IDX_51b3d83f2acf15644a0c8f1a29" ON "approval_event" ("guy") `)
        await db.query(`CREATE TABLE "log_note_event" ("id" character varying NOT NULL, "name" text NOT NULL, "sig" text NOT NULL, "usr" text NOT NULL, "arg1" text NOT NULL, "arg2" text NOT NULL, "data" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_fdbfcf3c5bf8edc173d948a950c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4a3df72bc092b67697276ca675" ON "log_note_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_6e98bb9e42b8c5f4282c3a4203" ON "log_note_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_b76dea1ca6eaadf661cdb382c8" ON "log_note_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_51807bc483e5e322a284a00591" ON "log_note_event" ("sig") `)
        await db.query(`CREATE INDEX "IDX_48e15bd139ba1714f6f789a62d" ON "log_note_event" ("usr") `)
        await db.query(`CREATE INDEX "IDX_8d348f4ac12e81e6339aa28a7a" ON "log_note_event" ("arg1") `)
        await db.query(`CREATE INDEX "IDX_1636d765d829bdfafaa0fb20ca" ON "log_note_event" ("arg2") `)
        await db.query(`CREATE TABLE "transfer_event" ("id" character varying NOT NULL, "name" text NOT NULL, "src" text NOT NULL, "dst" text NOT NULL, "wad" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_2a4e1dce9f72514cd28f554ee2d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1ef004b1f7d028a9b034ec6e94" ON "transfer_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_6b6127cda80d0aca2e4ef3f89c" ON "transfer_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_77e127a622dc94aeb47fba01ac" ON "transfer_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_a30b3120c9834ee3cbdf7ed04b" ON "transfer_event" ("src") `)
        await db.query(`CREATE INDEX "IDX_3a5719afdbab755d8e954348a4" ON "transfer_event" ("dst") `)
        await db.query(`CREATE TABLE "approve_function" ("id" character varying NOT NULL, "name" text NOT NULL, "usr" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_9237e4950859d1de715f770001d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_91f027356c5f1e7801541f8e59" ON "approve_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_40fb9c1218eed68dd8c3a111b7" ON "approve_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_923523d8b3e0f7a6feae9a075d" ON "approve_function" ("name") `)
        await db.query(`CREATE TABLE "burn_function" ("id" character varying NOT NULL, "name" text NOT NULL, "usr" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_32a62f049a3b7baf976382457f0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f7d898257be0970d599ab42288" ON "burn_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_a3da41127e2ba8a66ae4748b64" ON "burn_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_5d67c58271ce37c77aa4c7c533" ON "burn_function" ("name") `)
        await db.query(`CREATE TABLE "deny_function" ("id" character varying NOT NULL, "name" text NOT NULL, "guy" text, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_bcf5527873cf201e3a024479674" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1636fdbfd3cb1a11de95778fb4" ON "deny_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_12ac6afd7a14d27d21cb6c5ce6" ON "deny_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_923246ee96f407e8ae6db7ba75" ON "deny_function" ("name") `)
        await db.query(`CREATE TABLE "mint_function" ("id" character varying NOT NULL, "name" text NOT NULL, "usr" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_e0f0731db65f20e059af94cebb3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c64df59fd234a6a91afeb5fbf9" ON "mint_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_85dfb7befeaa7380eba3ff362a" ON "mint_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_9065c0f63c11bb0371b3cda408" ON "mint_function" ("name") `)
        await db.query(`CREATE TABLE "move_function" ("id" character varying NOT NULL, "name" text NOT NULL, "src" text, "dst" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_e9a540ee7ae70c440cd98f0861f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_859e7f2f185193cec9935083c0" ON "move_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_7aceafae74f000fbcccff8e867" ON "move_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_e2cf80dbde3361e998bbe6cd63" ON "move_function" ("name") `)
        await db.query(`CREATE TABLE "permit_function" ("id" character varying NOT NULL, "name" text NOT NULL, "holder" text, "spender" text, "nonce" numeric, "expiry" numeric, "allowed" boolean, "v" integer, "r" text, "s" text, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_d036cc17520c6524be50b994c68" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bdcb7dfafa2c6f49fcd97cfad0" ON "permit_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_b9e9813c270bbe810b0587c6d3" ON "permit_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_ebcd2d53547a5319605183d541" ON "permit_function" ("name") `)
        await db.query(`CREATE TABLE "pull_function" ("id" character varying NOT NULL, "name" text NOT NULL, "usr" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_455cf5064217e8ac8d1fb8da4d7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_19c0047b0a8c3622fa1e7deafc" ON "pull_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_c09f1a0447bc70dabb4e5d340a" ON "pull_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_29e0d7bce8b628127ead9a297c" ON "pull_function" ("name") `)
        await db.query(`CREATE TABLE "push_function" ("id" character varying NOT NULL, "name" text NOT NULL, "usr" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_1bfc3aeafbb6c1b9429cdd1f472" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_655dd92d3fe1c80023044552f5" ON "push_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_7c85cf9b48cb02dc6d1ff59cfe" ON "push_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_7eb25f1ead91cfd2b10c074fd2" ON "push_function" ("name") `)
        await db.query(`CREATE TABLE "rely_function" ("id" character varying NOT NULL, "name" text NOT NULL, "guy" text, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_9fc84daab75bc0e071dfed830df" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5868175e94b3257bf2102b3454" ON "rely_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_df0ea6a91576cf3a7fa33bd0a5" ON "rely_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_37720a332b99890a5cfe502417" ON "rely_function" ("name") `)
        await db.query(`CREATE TABLE "transfer_function" ("id" character varying NOT NULL, "name" text NOT NULL, "dst" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_8863fc9ef6c82680778fcf39c1e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e745f4b36014e926dc224b1745" ON "transfer_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_c9528612481178d92d2b78dadb" ON "transfer_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_d4de69e99e8dfa8123c68a5ddd" ON "transfer_function" ("name") `)
        await db.query(`CREATE TABLE "transfer_from_function" ("id" character varying NOT NULL, "name" text NOT NULL, "src" text, "dst" text, "wad" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_fff6258eec9c7e1f19e1f9e1b07" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_233e8399bfee7511cbca4b093d" ON "transfer_from_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_4a362fe8e2df65ac41f9fd2c09" ON "transfer_from_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_57dd1886fa0c0f743d2cb0d9a4" ON "transfer_from_function" ("name") `)
        await db.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approval_event" ADD CONSTRAINT "FK_263de97df8f71c59fb9360b22e8" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approval_event" ADD CONSTRAINT "FK_77afdbded434e1422d4d64262e6" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "log_note_event" ADD CONSTRAINT "FK_4a3df72bc092b67697276ca6754" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "log_note_event" ADD CONSTRAINT "FK_6e98bb9e42b8c5f4282c3a42034" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_event" ADD CONSTRAINT "FK_1ef004b1f7d028a9b034ec6e941" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_event" ADD CONSTRAINT "FK_6b6127cda80d0aca2e4ef3f89cb" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approve_function" ADD CONSTRAINT "FK_91f027356c5f1e7801541f8e592" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approve_function" ADD CONSTRAINT "FK_40fb9c1218eed68dd8c3a111b79" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_function" ADD CONSTRAINT "FK_f7d898257be0970d599ab42288a" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_function" ADD CONSTRAINT "FK_a3da41127e2ba8a66ae4748b644" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "deny_function" ADD CONSTRAINT "FK_1636fdbfd3cb1a11de95778fb49" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "deny_function" ADD CONSTRAINT "FK_12ac6afd7a14d27d21cb6c5ce6a" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_function" ADD CONSTRAINT "FK_c64df59fd234a6a91afeb5fbf95" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_function" ADD CONSTRAINT "FK_85dfb7befeaa7380eba3ff362ad" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "move_function" ADD CONSTRAINT "FK_859e7f2f185193cec9935083c0d" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "move_function" ADD CONSTRAINT "FK_7aceafae74f000fbcccff8e8671" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "permit_function" ADD CONSTRAINT "FK_bdcb7dfafa2c6f49fcd97cfad0b" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "permit_function" ADD CONSTRAINT "FK_b9e9813c270bbe810b0587c6d3f" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pull_function" ADD CONSTRAINT "FK_19c0047b0a8c3622fa1e7deafc1" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pull_function" ADD CONSTRAINT "FK_c09f1a0447bc70dabb4e5d340ae" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "push_function" ADD CONSTRAINT "FK_655dd92d3fe1c80023044552f52" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "push_function" ADD CONSTRAINT "FK_7c85cf9b48cb02dc6d1ff59cfe8" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "rely_function" ADD CONSTRAINT "FK_5868175e94b3257bf2102b3454d" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "rely_function" ADD CONSTRAINT "FK_df0ea6a91576cf3a7fa33bd0a50" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_function" ADD CONSTRAINT "FK_e745f4b36014e926dc224b17454" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_function" ADD CONSTRAINT "FK_c9528612481178d92d2b78dadb0" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_from_function" ADD CONSTRAINT "FK_233e8399bfee7511cbca4b093d8" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_from_function" ADD CONSTRAINT "FK_4a362fe8e2df65ac41f9fd2c092" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_c0e1460f3c9eee975fee81002d"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP TABLE "approval_event"`)
        await db.query(`DROP INDEX "public"."IDX_263de97df8f71c59fb9360b22e"`)
        await db.query(`DROP INDEX "public"."IDX_77afdbded434e1422d4d64262e"`)
        await db.query(`DROP INDEX "public"."IDX_a296be8180c880d431e2e6058c"`)
        await db.query(`DROP INDEX "public"."IDX_719f45ea2c1a77d0d37330982e"`)
        await db.query(`DROP INDEX "public"."IDX_51b3d83f2acf15644a0c8f1a29"`)
        await db.query(`DROP TABLE "log_note_event"`)
        await db.query(`DROP INDEX "public"."IDX_4a3df72bc092b67697276ca675"`)
        await db.query(`DROP INDEX "public"."IDX_6e98bb9e42b8c5f4282c3a4203"`)
        await db.query(`DROP INDEX "public"."IDX_b76dea1ca6eaadf661cdb382c8"`)
        await db.query(`DROP INDEX "public"."IDX_51807bc483e5e322a284a00591"`)
        await db.query(`DROP INDEX "public"."IDX_48e15bd139ba1714f6f789a62d"`)
        await db.query(`DROP INDEX "public"."IDX_8d348f4ac12e81e6339aa28a7a"`)
        await db.query(`DROP INDEX "public"."IDX_1636d765d829bdfafaa0fb20ca"`)
        await db.query(`DROP TABLE "transfer_event"`)
        await db.query(`DROP INDEX "public"."IDX_1ef004b1f7d028a9b034ec6e94"`)
        await db.query(`DROP INDEX "public"."IDX_6b6127cda80d0aca2e4ef3f89c"`)
        await db.query(`DROP INDEX "public"."IDX_77e127a622dc94aeb47fba01ac"`)
        await db.query(`DROP INDEX "public"."IDX_a30b3120c9834ee3cbdf7ed04b"`)
        await db.query(`DROP INDEX "public"."IDX_3a5719afdbab755d8e954348a4"`)
        await db.query(`DROP TABLE "approve_function"`)
        await db.query(`DROP INDEX "public"."IDX_91f027356c5f1e7801541f8e59"`)
        await db.query(`DROP INDEX "public"."IDX_40fb9c1218eed68dd8c3a111b7"`)
        await db.query(`DROP INDEX "public"."IDX_923523d8b3e0f7a6feae9a075d"`)
        await db.query(`DROP TABLE "burn_function"`)
        await db.query(`DROP INDEX "public"."IDX_f7d898257be0970d599ab42288"`)
        await db.query(`DROP INDEX "public"."IDX_a3da41127e2ba8a66ae4748b64"`)
        await db.query(`DROP INDEX "public"."IDX_5d67c58271ce37c77aa4c7c533"`)
        await db.query(`DROP TABLE "deny_function"`)
        await db.query(`DROP INDEX "public"."IDX_1636fdbfd3cb1a11de95778fb4"`)
        await db.query(`DROP INDEX "public"."IDX_12ac6afd7a14d27d21cb6c5ce6"`)
        await db.query(`DROP INDEX "public"."IDX_923246ee96f407e8ae6db7ba75"`)
        await db.query(`DROP TABLE "mint_function"`)
        await db.query(`DROP INDEX "public"."IDX_c64df59fd234a6a91afeb5fbf9"`)
        await db.query(`DROP INDEX "public"."IDX_85dfb7befeaa7380eba3ff362a"`)
        await db.query(`DROP INDEX "public"."IDX_9065c0f63c11bb0371b3cda408"`)
        await db.query(`DROP TABLE "move_function"`)
        await db.query(`DROP INDEX "public"."IDX_859e7f2f185193cec9935083c0"`)
        await db.query(`DROP INDEX "public"."IDX_7aceafae74f000fbcccff8e867"`)
        await db.query(`DROP INDEX "public"."IDX_e2cf80dbde3361e998bbe6cd63"`)
        await db.query(`DROP TABLE "permit_function"`)
        await db.query(`DROP INDEX "public"."IDX_bdcb7dfafa2c6f49fcd97cfad0"`)
        await db.query(`DROP INDEX "public"."IDX_b9e9813c270bbe810b0587c6d3"`)
        await db.query(`DROP INDEX "public"."IDX_ebcd2d53547a5319605183d541"`)
        await db.query(`DROP TABLE "pull_function"`)
        await db.query(`DROP INDEX "public"."IDX_19c0047b0a8c3622fa1e7deafc"`)
        await db.query(`DROP INDEX "public"."IDX_c09f1a0447bc70dabb4e5d340a"`)
        await db.query(`DROP INDEX "public"."IDX_29e0d7bce8b628127ead9a297c"`)
        await db.query(`DROP TABLE "push_function"`)
        await db.query(`DROP INDEX "public"."IDX_655dd92d3fe1c80023044552f5"`)
        await db.query(`DROP INDEX "public"."IDX_7c85cf9b48cb02dc6d1ff59cfe"`)
        await db.query(`DROP INDEX "public"."IDX_7eb25f1ead91cfd2b10c074fd2"`)
        await db.query(`DROP TABLE "rely_function"`)
        await db.query(`DROP INDEX "public"."IDX_5868175e94b3257bf2102b3454"`)
        await db.query(`DROP INDEX "public"."IDX_df0ea6a91576cf3a7fa33bd0a5"`)
        await db.query(`DROP INDEX "public"."IDX_37720a332b99890a5cfe502417"`)
        await db.query(`DROP TABLE "transfer_function"`)
        await db.query(`DROP INDEX "public"."IDX_e745f4b36014e926dc224b1745"`)
        await db.query(`DROP INDEX "public"."IDX_c9528612481178d92d2b78dadb"`)
        await db.query(`DROP INDEX "public"."IDX_d4de69e99e8dfa8123c68a5ddd"`)
        await db.query(`DROP TABLE "transfer_from_function"`)
        await db.query(`DROP INDEX "public"."IDX_233e8399bfee7511cbca4b093d"`)
        await db.query(`DROP INDEX "public"."IDX_4a362fe8e2df65ac41f9fd2c09"`)
        await db.query(`DROP INDEX "public"."IDX_57dd1886fa0c0f743d2cb0d9a4"`)
        await db.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc"`)
        await db.query(`ALTER TABLE "approval_event" DROP CONSTRAINT "FK_263de97df8f71c59fb9360b22e8"`)
        await db.query(`ALTER TABLE "approval_event" DROP CONSTRAINT "FK_77afdbded434e1422d4d64262e6"`)
        await db.query(`ALTER TABLE "log_note_event" DROP CONSTRAINT "FK_4a3df72bc092b67697276ca6754"`)
        await db.query(`ALTER TABLE "log_note_event" DROP CONSTRAINT "FK_6e98bb9e42b8c5f4282c3a42034"`)
        await db.query(`ALTER TABLE "transfer_event" DROP CONSTRAINT "FK_1ef004b1f7d028a9b034ec6e941"`)
        await db.query(`ALTER TABLE "transfer_event" DROP CONSTRAINT "FK_6b6127cda80d0aca2e4ef3f89cb"`)
        await db.query(`ALTER TABLE "approve_function" DROP CONSTRAINT "FK_91f027356c5f1e7801541f8e592"`)
        await db.query(`ALTER TABLE "approve_function" DROP CONSTRAINT "FK_40fb9c1218eed68dd8c3a111b79"`)
        await db.query(`ALTER TABLE "burn_function" DROP CONSTRAINT "FK_f7d898257be0970d599ab42288a"`)
        await db.query(`ALTER TABLE "burn_function" DROP CONSTRAINT "FK_a3da41127e2ba8a66ae4748b644"`)
        await db.query(`ALTER TABLE "deny_function" DROP CONSTRAINT "FK_1636fdbfd3cb1a11de95778fb49"`)
        await db.query(`ALTER TABLE "deny_function" DROP CONSTRAINT "FK_12ac6afd7a14d27d21cb6c5ce6a"`)
        await db.query(`ALTER TABLE "mint_function" DROP CONSTRAINT "FK_c64df59fd234a6a91afeb5fbf95"`)
        await db.query(`ALTER TABLE "mint_function" DROP CONSTRAINT "FK_85dfb7befeaa7380eba3ff362ad"`)
        await db.query(`ALTER TABLE "move_function" DROP CONSTRAINT "FK_859e7f2f185193cec9935083c0d"`)
        await db.query(`ALTER TABLE "move_function" DROP CONSTRAINT "FK_7aceafae74f000fbcccff8e8671"`)
        await db.query(`ALTER TABLE "permit_function" DROP CONSTRAINT "FK_bdcb7dfafa2c6f49fcd97cfad0b"`)
        await db.query(`ALTER TABLE "permit_function" DROP CONSTRAINT "FK_b9e9813c270bbe810b0587c6d3f"`)
        await db.query(`ALTER TABLE "pull_function" DROP CONSTRAINT "FK_19c0047b0a8c3622fa1e7deafc1"`)
        await db.query(`ALTER TABLE "pull_function" DROP CONSTRAINT "FK_c09f1a0447bc70dabb4e5d340ae"`)
        await db.query(`ALTER TABLE "push_function" DROP CONSTRAINT "FK_655dd92d3fe1c80023044552f52"`)
        await db.query(`ALTER TABLE "push_function" DROP CONSTRAINT "FK_7c85cf9b48cb02dc6d1ff59cfe8"`)
        await db.query(`ALTER TABLE "rely_function" DROP CONSTRAINT "FK_5868175e94b3257bf2102b3454d"`)
        await db.query(`ALTER TABLE "rely_function" DROP CONSTRAINT "FK_df0ea6a91576cf3a7fa33bd0a50"`)
        await db.query(`ALTER TABLE "transfer_function" DROP CONSTRAINT "FK_e745f4b36014e926dc224b17454"`)
        await db.query(`ALTER TABLE "transfer_function" DROP CONSTRAINT "FK_c9528612481178d92d2b78dadb0"`)
        await db.query(`ALTER TABLE "transfer_from_function" DROP CONSTRAINT "FK_233e8399bfee7511cbca4b093d8"`)
        await db.query(`ALTER TABLE "transfer_from_function" DROP CONSTRAINT "FK_4a362fe8e2df65ac41f9fd2c092"`)
    }
}