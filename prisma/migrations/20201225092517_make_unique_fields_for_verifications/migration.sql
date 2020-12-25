/*
  Warnings:

  - The migration will change the primary key for the `UserVerification` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserVerification` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[userId,by,type]` on the table `UserVerification`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `UserVerification` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserVerification.userId_by_type_unique` ON `UserVerification`(`userId`, `by`, `type`);
