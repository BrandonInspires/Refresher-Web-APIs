DROP TABLE IF EXISTS "artists";
CREATE TABLE "artists" (
"id"  SERIAL ,
"name" TEXT ,
"genre" TEXT ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "albums";
CREATE TABLE "albums" (
"id"  SERIAL ,
"artist_id" INTEGER ,
"title" TEXT ,
"year" INTEGER ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "songs";
CREATE TABLE "songs" (
"id"  SERIAL ,
"title" TEXT ,
"album_id" INTEGER ,
"length" INTEGER ,
"track_no" INTEGER ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "playlists";
CREATE TABLE "playlists" (
"id"  SERIAL ,
"name" TEXT ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "playlist_songs";
CREATE TABLE "playlist_songs" (
"song_id" INTEGER NOT NULL ,
"playlist_id" INTEGER NOT NULL
);

ALTER TABLE "playlist_songs" ADD FOREIGN KEY ("song_id") REFERENCES "songs" ("id");
ALTER TABLE "playlist_songs" ADD FOREIGN KEY ("playlist_id") REFERENCES "playlists" ("id");
