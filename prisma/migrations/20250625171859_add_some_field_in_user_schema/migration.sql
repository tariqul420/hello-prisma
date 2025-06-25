/*
  Warnings:

  - Added the required column `district` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "photoUrl" TEXT;
