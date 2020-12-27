/*
  Warnings:

  - The migration will change the primary key for the `UserVerification` table. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `UserVerification` DROP PRIMARY KEY;
