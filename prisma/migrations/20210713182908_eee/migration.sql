/*
  Warnings:

  - You are about to drop the column `email` on the `Playlist` table. All the data in the column will be lost.
  - Added the required column `owner` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Playlist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Playlist.email_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Playlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Playlist" ("id", "name") SELECT "id", "name" FROM "Playlist";
DROP TABLE "Playlist";
ALTER TABLE "new_Playlist" RENAME TO "Playlist";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
