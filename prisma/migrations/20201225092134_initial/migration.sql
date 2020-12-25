-- CreateTable
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191),
    `role` ENUM('USER', 'MODERATOR', 'ADMIN') NOT NULL DEFAULT 'USER',
    `isEmailVerified` BOOLEAN NOT NULL DEFAULT false,
    `isPhoneVerified` BOOLEAN NOT NULL DEFAULT false,
    `vkontakteId` VARCHAR(191),
UNIQUE INDEX `User.email_unique`(`email`),
UNIQUE INDEX `User.phone_unique`(`phone`),
UNIQUE INDEX `User.vkontakteId_unique`(`vkontakteId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserToken` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `deviceId` VARCHAR(191) NOT NULL,
    `ip` INT NOT NULL,
    `isValid` BOOLEAN NOT NULL DEFAULT true,
    `userId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserVerification` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `by` ENUM('phone', 'email') NOT NULL DEFAULT 'phone',
    `type` ENUM('phone', 'email', 'forgot_password') NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `attempts` INT NOT NULL DEFAULT 0,
    `times` INT NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL,
    `userTokenId` INT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `publicName` VARCHAR(191) NOT NULL,
    `avatar` JSON,
    `about` VARCHAR(191),
    `contacts` JSON,
    `userId` INT NOT NULL,
UNIQUE INDEX `Profile_userId_unique`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VideoLesson` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `isDraft` BOOLEAN NOT NULL DEFAULT true,
    `isUploaded` BOOLEAN NOT NULL DEFAULT false,
    `isReady` BOOLEAN NOT NULL DEFAULT false,
    `duration` INT NOT NULL DEFAULT 0,
    `name` VARCHAR(191) NOT NULL,
    `poster` VARCHAR(191),
    `publicId` VARCHAR(191),
    `version` INT,
    `uploadUrl` VARCHAR(191),
    `description` VARCHAR(191),
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('SKILL') NOT NULL,
    `videoLessonId` INT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicesToTags` (
    `tagId` INT NOT NULL,
    `serviceId` INT NOT NULL,
    `serviceName` VARCHAR(191) NOT NULL,
    `videoLessonId` INT NOT NULL,

    PRIMARY KEY (`tagId`,`serviceId`,`serviceName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserToken` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserVerification` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserVerification` ADD FOREIGN KEY (`userTokenId`) REFERENCES `UserToken`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VideoLesson` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD FOREIGN KEY (`videoLessonId`) REFERENCES `VideoLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesToTags` ADD FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicesToTags` ADD FOREIGN KEY (`videoLessonId`) REFERENCES `VideoLesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
