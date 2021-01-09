/*
  Warnings:

  - You are about to drop the column `videoLessonId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `tag_ibfk_1`;

-- AlterTable
ALTER TABLE `ServicesToTags` ADD COLUMN     `specialistId` INT,
    MODIFY `videoLessonId` INT;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `videoLessonId`;

-- CreateTable
CREATE TABLE `Specialist` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `scores` INT NOT NULL DEFAULT 0,
    `userId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialistScoreHistory` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `amount` INT NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `specialistId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Specialist` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialistScoreHistory` ADD FOREIGN KEY (`specialistId`) REFERENCES `Specialist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesToTags` ADD FOREIGN KEY (`specialistId`) REFERENCES `Specialist`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
