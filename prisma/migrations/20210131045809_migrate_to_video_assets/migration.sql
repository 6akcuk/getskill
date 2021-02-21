/*
  Warnings:

  - You are about to drop the column `isDraft` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `isUploaded` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `isReady` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `publicId` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `VideoLesson` table. All the data in the column will be lost.
  - You are about to drop the column `uploadUrl` on the `VideoLesson` table. All the data in the column will be lost.
  - Added the required column `videoId` to the `VideoLesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VideoLesson` DROP COLUMN `isDraft`,
    DROP COLUMN `isUploaded`,
    DROP COLUMN `isReady`,
    DROP COLUMN `duration`,
    DROP COLUMN `publicId`,
    DROP COLUMN `version`,
    DROP COLUMN `uploadUrl`,
    ADD COLUMN     `videoId` INT NOT NULL;

-- CreateTable
CREATE TABLE `Video` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `ownerId` INT NOT NULL,
    `isUploaded` BOOLEAN NOT NULL DEFAULT false,
    `isReady` BOOLEAN NOT NULL DEFAULT false,
    `duration` INT NOT NULL DEFAULT 0,
    `signedUrl` VARCHAR(191) NOT NULL,
    `preview` VARCHAR(191),
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Video` ADD FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VideoLesson` ADD FOREIGN KEY (`videoId`) REFERENCES `Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
