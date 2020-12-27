/*
  Warnings:

  - You are about to drop the column `userTokenId` on the `UserVerification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserVerification` DROP FOREIGN KEY `userverification_ibfk_2`;

-- AlterTable
ALTER TABLE `UserVerification` DROP COLUMN `userTokenId`;
