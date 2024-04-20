/*
  Warnings:

  - You are about to drop the column `humidity` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `infraRed` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `long` on the `Sensor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sensor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alert" BOOLEAN NOT NULL DEFAULT false,
    "temp" TEXT,
    "hum" TEXT,
    "flame" TEXT,
    "image" TEXT
);
INSERT INTO "new_Sensor" ("id", "temp") SELECT "id", "temp" FROM "Sensor";
DROP TABLE "Sensor";
ALTER TABLE "new_Sensor" RENAME TO "Sensor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
