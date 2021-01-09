/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[userId]` on the table `Specialist`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Specialist_userId_unique` ON `Specialist`(`userId`);
