module.exports = class Data1676062107103 {
    name = 'Data1676062107103'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "hash" text NOT NULL, "contract" text, "block_id" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_c0e1460f3c9eee975fee81002d" ON "transaction" ("block_id") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE TABLE "mint_event" ("id" character varying NOT NULL, "name" text NOT NULL, "to" text NOT NULL, "amount" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_c9abd6d2c19a587aac1641c7dee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2671334b7d21ea440ef34849c2" ON "mint_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_7f18a4a857f1a393973677a0da" ON "mint_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_c82715e657a5a538375d9fd089" ON "mint_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_76cf264c0f7faf79a25eea5aa6" ON "mint_event" ("to") `)
        await db.query(`CREATE TABLE "mint_finished_event" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_07c283975bfdc8348bcb6cadde4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c85cf190317a2eccc4bf089b07" ON "mint_finished_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_9554ebd701cb97d7672d7387dc" ON "mint_finished_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_a72034022f99cbb8ffced81a66" ON "mint_finished_event" ("name") `)
        await db.query(`CREATE TABLE "pause_event" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_9def8f2298caec7ba9746c265c4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9319951c5a696505ebaddad330" ON "pause_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_b794e2d6840564f0c722ce2751" ON "pause_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_1d49fb1740f2e83a7f8bfbe7b9" ON "pause_event" ("name") `)
        await db.query(`CREATE TABLE "unpause_event" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_5655c9563a30e9574dead82e03c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0e34a951d449872859d5f277fa" ON "unpause_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_c9324e019ccecd749ae0371f09" ON "unpause_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_f5b6305c274f910631eac52c6f" ON "unpause_event" ("name") `)
        await db.query(`CREATE TABLE "burn_event" ("id" character varying NOT NULL, "name" text NOT NULL, "burner" text NOT NULL, "value" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_28ccbec87579fde72b1ab1eeece" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0399688cc6bafa65bbdbe3c327" ON "burn_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_a71866936eb97351678ad61a1c" ON "burn_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_ecf485e2967c13491517853b28" ON "burn_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_1804a031789ea62697f1ae1136" ON "burn_event" ("burner") `)
        await db.query(`CREATE TABLE "approval_event" ("id" character varying NOT NULL, "name" text NOT NULL, "owner" text NOT NULL, "spender" text NOT NULL, "value" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_4a04c4c5639ee9d282c55fac735" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_263de97df8f71c59fb9360b22e" ON "approval_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_77afdbded434e1422d4d64262e" ON "approval_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_a296be8180c880d431e2e6058c" ON "approval_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_66738eac40ffe8cb9a983934ee" ON "approval_event" ("owner") `)
        await db.query(`CREATE INDEX "IDX_8639c37d511fdd6b468c0864d2" ON "approval_event" ("spender") `)
        await db.query(`CREATE TABLE "transfer_event" ("id" character varying NOT NULL, "name" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_2a4e1dce9f72514cd28f554ee2d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1ef004b1f7d028a9b034ec6e94" ON "transfer_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_6b6127cda80d0aca2e4ef3f89c" ON "transfer_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_77e127a622dc94aeb47fba01ac" ON "transfer_event" ("name") `)
        await db.query(`CREATE INDEX "IDX_e3f2115e36145e7e44e40f3d6e" ON "transfer_event" ("from") `)
        await db.query(`CREATE INDEX "IDX_d89c05d6a45f28bb97b161b696" ON "transfer_event" ("to") `)
        await db.query(`CREATE TABLE "approve_function" ("id" character varying NOT NULL, "name" text NOT NULL, "spender" text, "value" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_9237e4950859d1de715f770001d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_91f027356c5f1e7801541f8e59" ON "approve_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_40fb9c1218eed68dd8c3a111b7" ON "approve_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_923523d8b3e0f7a6feae9a075d" ON "approve_function" ("name") `)
        await db.query(`CREATE TABLE "transfer_from_function" ("id" character varying NOT NULL, "name" text NOT NULL, "from" text, "to" text, "value" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_fff6258eec9c7e1f19e1f9e1b07" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_233e8399bfee7511cbca4b093d" ON "transfer_from_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_4a362fe8e2df65ac41f9fd2c09" ON "transfer_from_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_57dd1886fa0c0f743d2cb0d9a4" ON "transfer_from_function" ("name") `)
        await db.query(`CREATE TABLE "unpause_function" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_b08bb36dc575640eef99cb89bef" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bda7a40aafacfe78c71e33833e" ON "unpause_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_9f60514e88ad67a06ff6dfe9c1" ON "unpause_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_f1f6cfddf8091d084ddac632cd" ON "unpause_function" ("name") `)
        await db.query(`CREATE TABLE "mint_function" ("id" character varying NOT NULL, "name" text NOT NULL, "to" text, "amount" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_e0f0731db65f20e059af94cebb3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c64df59fd234a6a91afeb5fbf9" ON "mint_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_85dfb7befeaa7380eba3ff362a" ON "mint_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_9065c0f63c11bb0371b3cda408" ON "mint_function" ("name") `)
        await db.query(`CREATE TABLE "burn_function" ("id" character varying NOT NULL, "name" text NOT NULL, "value" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_32a62f049a3b7baf976382457f0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f7d898257be0970d599ab42288" ON "burn_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_a3da41127e2ba8a66ae4748b64" ON "burn_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_5d67c58271ce37c77aa4c7c533" ON "burn_function" ("name") `)
        await db.query(`CREATE TABLE "finish_minting_function" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_64451a1e692e51c5ea6526bc820" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_cbe98fd86e0a12115e37cef9e3" ON "finish_minting_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_ce7e2a26d9d710d76002184506" ON "finish_minting_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_131888bf4a303980ff6dee7cce" ON "finish_minting_function" ("name") `)
        await db.query(`CREATE TABLE "pause_function" ("id" character varying NOT NULL, "name" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_d8cc8350e5fc3a1fbb70c138410" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e619bbab75ec51d1904ecf876b" ON "pause_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_cc18166cc22da69ef874a38841" ON "pause_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_21eaa16bf2260939b4b9c496ee" ON "pause_function" ("name") `)
        await db.query(`CREATE TABLE "transfer_function" ("id" character varying NOT NULL, "name" text NOT NULL, "to" text, "value" numeric, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_8863fc9ef6c82680778fcf39c1e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e745f4b36014e926dc224b1745" ON "transfer_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_c9528612481178d92d2b78dadb" ON "transfer_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_d4de69e99e8dfa8123c68a5ddd" ON "transfer_function" ("name") `)
        await db.query(`CREATE TABLE "transfer_ownership_function" ("id" character varying NOT NULL, "name" text NOT NULL, "new_owner" text, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_a6efa2a18bd6b2f206661fa2a4e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_508a4e3f78a565370b47cafad0" ON "transfer_ownership_function" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_6d3f6a999b2101dd04e57d8045" ON "transfer_ownership_function" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_8be661b46a3c78f618e2fa8488" ON "transfer_ownership_function" ("name") `)
        await db.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_event" ADD CONSTRAINT "FK_2671334b7d21ea440ef34849c2b" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_event" ADD CONSTRAINT "FK_7f18a4a857f1a393973677a0da4" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_finished_event" ADD CONSTRAINT "FK_c85cf190317a2eccc4bf089b07c" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_finished_event" ADD CONSTRAINT "FK_9554ebd701cb97d7672d7387dc5" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pause_event" ADD CONSTRAINT "FK_9319951c5a696505ebaddad3306" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pause_event" ADD CONSTRAINT "FK_b794e2d6840564f0c722ce2751d" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "unpause_event" ADD CONSTRAINT "FK_0e34a951d449872859d5f277faa" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "unpause_event" ADD CONSTRAINT "FK_c9324e019ccecd749ae0371f09a" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_event" ADD CONSTRAINT "FK_0399688cc6bafa65bbdbe3c3276" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_event" ADD CONSTRAINT "FK_a71866936eb97351678ad61a1c1" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approval_event" ADD CONSTRAINT "FK_263de97df8f71c59fb9360b22e8" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approval_event" ADD CONSTRAINT "FK_77afdbded434e1422d4d64262e6" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_event" ADD CONSTRAINT "FK_1ef004b1f7d028a9b034ec6e941" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_event" ADD CONSTRAINT "FK_6b6127cda80d0aca2e4ef3f89cb" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approve_function" ADD CONSTRAINT "FK_91f027356c5f1e7801541f8e592" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "approve_function" ADD CONSTRAINT "FK_40fb9c1218eed68dd8c3a111b79" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_from_function" ADD CONSTRAINT "FK_233e8399bfee7511cbca4b093d8" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_from_function" ADD CONSTRAINT "FK_4a362fe8e2df65ac41f9fd2c092" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "unpause_function" ADD CONSTRAINT "FK_bda7a40aafacfe78c71e33833e9" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "unpause_function" ADD CONSTRAINT "FK_9f60514e88ad67a06ff6dfe9c10" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_function" ADD CONSTRAINT "FK_c64df59fd234a6a91afeb5fbf95" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "mint_function" ADD CONSTRAINT "FK_85dfb7befeaa7380eba3ff362ad" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_function" ADD CONSTRAINT "FK_f7d898257be0970d599ab42288a" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "burn_function" ADD CONSTRAINT "FK_a3da41127e2ba8a66ae4748b644" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "finish_minting_function" ADD CONSTRAINT "FK_cbe98fd86e0a12115e37cef9e3e" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "finish_minting_function" ADD CONSTRAINT "FK_ce7e2a26d9d710d760021845066" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pause_function" ADD CONSTRAINT "FK_e619bbab75ec51d1904ecf876b9" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pause_function" ADD CONSTRAINT "FK_cc18166cc22da69ef874a38841f" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_function" ADD CONSTRAINT "FK_e745f4b36014e926dc224b17454" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_function" ADD CONSTRAINT "FK_c9528612481178d92d2b78dadb0" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_ownership_function" ADD CONSTRAINT "FK_508a4e3f78a565370b47cafad03" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer_ownership_function" ADD CONSTRAINT "FK_6d3f6a999b2101dd04e57d8045e" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_c0e1460f3c9eee975fee81002d"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP TABLE "mint_event"`)
        await db.query(`DROP INDEX "public"."IDX_2671334b7d21ea440ef34849c2"`)
        await db.query(`DROP INDEX "public"."IDX_7f18a4a857f1a393973677a0da"`)
        await db.query(`DROP INDEX "public"."IDX_c82715e657a5a538375d9fd089"`)
        await db.query(`DROP INDEX "public"."IDX_76cf264c0f7faf79a25eea5aa6"`)
        await db.query(`DROP TABLE "mint_finished_event"`)
        await db.query(`DROP INDEX "public"."IDX_c85cf190317a2eccc4bf089b07"`)
        await db.query(`DROP INDEX "public"."IDX_9554ebd701cb97d7672d7387dc"`)
        await db.query(`DROP INDEX "public"."IDX_a72034022f99cbb8ffced81a66"`)
        await db.query(`DROP TABLE "pause_event"`)
        await db.query(`DROP INDEX "public"."IDX_9319951c5a696505ebaddad330"`)
        await db.query(`DROP INDEX "public"."IDX_b794e2d6840564f0c722ce2751"`)
        await db.query(`DROP INDEX "public"."IDX_1d49fb1740f2e83a7f8bfbe7b9"`)
        await db.query(`DROP TABLE "unpause_event"`)
        await db.query(`DROP INDEX "public"."IDX_0e34a951d449872859d5f277fa"`)
        await db.query(`DROP INDEX "public"."IDX_c9324e019ccecd749ae0371f09"`)
        await db.query(`DROP INDEX "public"."IDX_f5b6305c274f910631eac52c6f"`)
        await db.query(`DROP TABLE "burn_event"`)
        await db.query(`DROP INDEX "public"."IDX_0399688cc6bafa65bbdbe3c327"`)
        await db.query(`DROP INDEX "public"."IDX_a71866936eb97351678ad61a1c"`)
        await db.query(`DROP INDEX "public"."IDX_ecf485e2967c13491517853b28"`)
        await db.query(`DROP INDEX "public"."IDX_1804a031789ea62697f1ae1136"`)
        await db.query(`DROP TABLE "approval_event"`)
        await db.query(`DROP INDEX "public"."IDX_263de97df8f71c59fb9360b22e"`)
        await db.query(`DROP INDEX "public"."IDX_77afdbded434e1422d4d64262e"`)
        await db.query(`DROP INDEX "public"."IDX_a296be8180c880d431e2e6058c"`)
        await db.query(`DROP INDEX "public"."IDX_66738eac40ffe8cb9a983934ee"`)
        await db.query(`DROP INDEX "public"."IDX_8639c37d511fdd6b468c0864d2"`)
        await db.query(`DROP TABLE "transfer_event"`)
        await db.query(`DROP INDEX "public"."IDX_1ef004b1f7d028a9b034ec6e94"`)
        await db.query(`DROP INDEX "public"."IDX_6b6127cda80d0aca2e4ef3f89c"`)
        await db.query(`DROP INDEX "public"."IDX_77e127a622dc94aeb47fba01ac"`)
        await db.query(`DROP INDEX "public"."IDX_e3f2115e36145e7e44e40f3d6e"`)
        await db.query(`DROP INDEX "public"."IDX_d89c05d6a45f28bb97b161b696"`)
        await db.query(`DROP TABLE "approve_function"`)
        await db.query(`DROP INDEX "public"."IDX_91f027356c5f1e7801541f8e59"`)
        await db.query(`DROP INDEX "public"."IDX_40fb9c1218eed68dd8c3a111b7"`)
        await db.query(`DROP INDEX "public"."IDX_923523d8b3e0f7a6feae9a075d"`)
        await db.query(`DROP TABLE "transfer_from_function"`)
        await db.query(`DROP INDEX "public"."IDX_233e8399bfee7511cbca4b093d"`)
        await db.query(`DROP INDEX "public"."IDX_4a362fe8e2df65ac41f9fd2c09"`)
        await db.query(`DROP INDEX "public"."IDX_57dd1886fa0c0f743d2cb0d9a4"`)
        await db.query(`DROP TABLE "unpause_function"`)
        await db.query(`DROP INDEX "public"."IDX_bda7a40aafacfe78c71e33833e"`)
        await db.query(`DROP INDEX "public"."IDX_9f60514e88ad67a06ff6dfe9c1"`)
        await db.query(`DROP INDEX "public"."IDX_f1f6cfddf8091d084ddac632cd"`)
        await db.query(`DROP TABLE "mint_function"`)
        await db.query(`DROP INDEX "public"."IDX_c64df59fd234a6a91afeb5fbf9"`)
        await db.query(`DROP INDEX "public"."IDX_85dfb7befeaa7380eba3ff362a"`)
        await db.query(`DROP INDEX "public"."IDX_9065c0f63c11bb0371b3cda408"`)
        await db.query(`DROP TABLE "burn_function"`)
        await db.query(`DROP INDEX "public"."IDX_f7d898257be0970d599ab42288"`)
        await db.query(`DROP INDEX "public"."IDX_a3da41127e2ba8a66ae4748b64"`)
        await db.query(`DROP INDEX "public"."IDX_5d67c58271ce37c77aa4c7c533"`)
        await db.query(`DROP TABLE "finish_minting_function"`)
        await db.query(`DROP INDEX "public"."IDX_cbe98fd86e0a12115e37cef9e3"`)
        await db.query(`DROP INDEX "public"."IDX_ce7e2a26d9d710d76002184506"`)
        await db.query(`DROP INDEX "public"."IDX_131888bf4a303980ff6dee7cce"`)
        await db.query(`DROP TABLE "pause_function"`)
        await db.query(`DROP INDEX "public"."IDX_e619bbab75ec51d1904ecf876b"`)
        await db.query(`DROP INDEX "public"."IDX_cc18166cc22da69ef874a38841"`)
        await db.query(`DROP INDEX "public"."IDX_21eaa16bf2260939b4b9c496ee"`)
        await db.query(`DROP TABLE "transfer_function"`)
        await db.query(`DROP INDEX "public"."IDX_e745f4b36014e926dc224b1745"`)
        await db.query(`DROP INDEX "public"."IDX_c9528612481178d92d2b78dadb"`)
        await db.query(`DROP INDEX "public"."IDX_d4de69e99e8dfa8123c68a5ddd"`)
        await db.query(`DROP TABLE "transfer_ownership_function"`)
        await db.query(`DROP INDEX "public"."IDX_508a4e3f78a565370b47cafad0"`)
        await db.query(`DROP INDEX "public"."IDX_6d3f6a999b2101dd04e57d8045"`)
        await db.query(`DROP INDEX "public"."IDX_8be661b46a3c78f618e2fa8488"`)
        await db.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc"`)
        await db.query(`ALTER TABLE "mint_event" DROP CONSTRAINT "FK_2671334b7d21ea440ef34849c2b"`)
        await db.query(`ALTER TABLE "mint_event" DROP CONSTRAINT "FK_7f18a4a857f1a393973677a0da4"`)
        await db.query(`ALTER TABLE "mint_finished_event" DROP CONSTRAINT "FK_c85cf190317a2eccc4bf089b07c"`)
        await db.query(`ALTER TABLE "mint_finished_event" DROP CONSTRAINT "FK_9554ebd701cb97d7672d7387dc5"`)
        await db.query(`ALTER TABLE "pause_event" DROP CONSTRAINT "FK_9319951c5a696505ebaddad3306"`)
        await db.query(`ALTER TABLE "pause_event" DROP CONSTRAINT "FK_b794e2d6840564f0c722ce2751d"`)
        await db.query(`ALTER TABLE "unpause_event" DROP CONSTRAINT "FK_0e34a951d449872859d5f277faa"`)
        await db.query(`ALTER TABLE "unpause_event" DROP CONSTRAINT "FK_c9324e019ccecd749ae0371f09a"`)
        await db.query(`ALTER TABLE "burn_event" DROP CONSTRAINT "FK_0399688cc6bafa65bbdbe3c3276"`)
        await db.query(`ALTER TABLE "burn_event" DROP CONSTRAINT "FK_a71866936eb97351678ad61a1c1"`)
        await db.query(`ALTER TABLE "approval_event" DROP CONSTRAINT "FK_263de97df8f71c59fb9360b22e8"`)
        await db.query(`ALTER TABLE "approval_event" DROP CONSTRAINT "FK_77afdbded434e1422d4d64262e6"`)
        await db.query(`ALTER TABLE "transfer_event" DROP CONSTRAINT "FK_1ef004b1f7d028a9b034ec6e941"`)
        await db.query(`ALTER TABLE "transfer_event" DROP CONSTRAINT "FK_6b6127cda80d0aca2e4ef3f89cb"`)
        await db.query(`ALTER TABLE "approve_function" DROP CONSTRAINT "FK_91f027356c5f1e7801541f8e592"`)
        await db.query(`ALTER TABLE "approve_function" DROP CONSTRAINT "FK_40fb9c1218eed68dd8c3a111b79"`)
        await db.query(`ALTER TABLE "transfer_from_function" DROP CONSTRAINT "FK_233e8399bfee7511cbca4b093d8"`)
        await db.query(`ALTER TABLE "transfer_from_function" DROP CONSTRAINT "FK_4a362fe8e2df65ac41f9fd2c092"`)
        await db.query(`ALTER TABLE "unpause_function" DROP CONSTRAINT "FK_bda7a40aafacfe78c71e33833e9"`)
        await db.query(`ALTER TABLE "unpause_function" DROP CONSTRAINT "FK_9f60514e88ad67a06ff6dfe9c10"`)
        await db.query(`ALTER TABLE "mint_function" DROP CONSTRAINT "FK_c64df59fd234a6a91afeb5fbf95"`)
        await db.query(`ALTER TABLE "mint_function" DROP CONSTRAINT "FK_85dfb7befeaa7380eba3ff362ad"`)
        await db.query(`ALTER TABLE "burn_function" DROP CONSTRAINT "FK_f7d898257be0970d599ab42288a"`)
        await db.query(`ALTER TABLE "burn_function" DROP CONSTRAINT "FK_a3da41127e2ba8a66ae4748b644"`)
        await db.query(`ALTER TABLE "finish_minting_function" DROP CONSTRAINT "FK_cbe98fd86e0a12115e37cef9e3e"`)
        await db.query(`ALTER TABLE "finish_minting_function" DROP CONSTRAINT "FK_ce7e2a26d9d710d760021845066"`)
        await db.query(`ALTER TABLE "pause_function" DROP CONSTRAINT "FK_e619bbab75ec51d1904ecf876b9"`)
        await db.query(`ALTER TABLE "pause_function" DROP CONSTRAINT "FK_cc18166cc22da69ef874a38841f"`)
        await db.query(`ALTER TABLE "transfer_function" DROP CONSTRAINT "FK_e745f4b36014e926dc224b17454"`)
        await db.query(`ALTER TABLE "transfer_function" DROP CONSTRAINT "FK_c9528612481178d92d2b78dadb0"`)
        await db.query(`ALTER TABLE "transfer_ownership_function" DROP CONSTRAINT "FK_508a4e3f78a565370b47cafad03"`)
        await db.query(`ALTER TABLE "transfer_ownership_function" DROP CONSTRAINT "FK_6d3f6a999b2101dd04e57d8045e"`)
    }
}
