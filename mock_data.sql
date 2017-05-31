-- artists
insert into artists (id, name, genre) values (1,'The Beatles', 'Pop, Rock');
insert into artists (id, name, genre) values (2,'Elvis Presley', 'Rock and Roll');
insert into artists (id, name, genre) values (3,'Michael Jackson', 'Pop, Rock, R&B');
insert into artists (id, name, genre) values (4,'Madonna', 'Pop, Dance');
insert into artists (id, name, genre) values (5,'Elton John', 'Pop, Rock');
insert into artists (id, name, genre) values (6,'Led Zeppelin', 'Hard Rock, Blues, Folk Rock');
insert into artists (id, name, genre) values (7,'Pink Floyd', 'Progressive Rock, Psychedelic Rock');
insert into artists (id, name, genre) values (8,'AC/DC', 'Hard Rock, Blues Rock, Rock and Roll');
insert into artists (id, name, genre) values (9,'Whitney Houston', 'R&B, Pop, Soul, Gospel');
insert into artists (id, name, genre) values (10,'Meat Loaf', 'Hard Rock, Blues Rock, Rock and Roll');
insert into artists (id, name, genre) values (11,'Eagles', 'Rock, Country Rock, Soft Rock');
insert into artists (id, name, genre) values (12, 'Bee Gees', 'Pop, Soul, Disco Rock, Soft Rock');
insert into artists (id, name, genre) values (13, 'Fleetwood Mac', 'Pop Rock, Soft Rock, Blues Rock, Art Pop, British Blues');
insert into artists (id, name, genre) values (14, 'Shania Twain', 'Country, Country Pop, Country Rock, Pop');
insert into artists (id, name, genre) values (15, 'Alanis Morissette', 'Alternative Rock, Post-Grunge, Pop Rock, Electronica, Dance-Pop');
insert into artists (id, name, genre) values (16, 'Mariah Carey', 'R&B, Pop, Hip Hop, Soul');
insert into artists (id, name, genre) values (17, 'Celine Dion', 'Pop, Chanson, Soft Rock, R&B');


--albums
insert into albums (id, title, artist_id, year) values (1, 'Thriller', 3, 1982);
insert into albums (id, title, artist_id, year) values (2, 'Back in Black', 8, 1980);
insert into albums (id, title, artist_id, year) values (3, 'The Dark Side of The Moon', 7, 1973);
insert into albums (id, title, artist_id, year) values (4, 'The Bodyguard', 9, 1992);
insert into albums (id, title, artist_id, year) values (5, 'Bat Out Of Hell', 10, 1977);
insert into albums (id, title, artist_id, year) values (6, 'Their Greatest Hits (1971 - 1975)', 11, 1976);
insert into albums (id, title, artist_id, year) values (7, 'Saturday Night Fever', 12, 1977);
insert into albums (id, title, artist_id, year) values (8, 'Rumours', 13, 1977);
insert into albums (id, title, artist_id, year) values (9, 'Come On Over', 14, 1997);
insert into albums (id, title, artist_id, year) values (10, 'Led Zeppelin IV', 6, 1971);
insert into albums (id, title, artist_id, year) values (11, 'Bad', 3, 1987);
insert into albums (id, title, artist_id, year) values (12, 'Jagged Little Pill', 15, 1995);
insert into albums (id, title, artist_id, year) values (13, 'Falling Into You', 17, 1996);
insert into albums (id, title, artist_id, year) values (14, 'Sgt. Peppers Lonely Hearts Club Band', 1, 1967);
insert into albums (id, title, artist_id, year) values (15, 'Hotel California', 11, 1976);
insert into albums (id, title, artist_id, year) values (16, 'Music Box', 16, 1993);


-- songs
insert into songs (id, title, album_id, track_no, length) values (1, 'Wanna Be Starting Something', 1, 1, 320);
insert into songs (id, title, album_id, track_no, length) values (2, 'Baby Be Mine', 1, 2, 320);
insert into songs (id, title, album_id, track_no, length) values (3, 'The Girl Is Mine', 1, 3, 320);
insert into songs (id, title, album_id, track_no, length) values (4, 'Thriller', 1, 4, 320);
insert into songs (id, title, album_id, track_no, length) values (5, 'Beat It', 1, 5, 320);
insert into songs (id, title, album_id, track_no, length) values (6, 'Billie Jean', 1, 6, 320);
insert into songs (id, title, album_id, track_no, length) values (7, 'Human Nature', 1, 7, 320);
insert into songs (id, title, album_id, track_no, length) values (8, 'PYT', 1, 8, 320);
insert into songs (id, title, album_id, track_no, length) values (9, 'Lady in My Life', 1, 9, 320);
insert into songs (id, title, album_id, track_no, length) values (10,'Bad', 3, 1, 320);
insert into songs (id, title, album_id, track_no, length) values (11,'The Way You Make Me Feel', 3, 2, 320);
insert into songs (id, title, album_id, track_no, length) values (12,'Speed Demon', 3, 3, 320);
insert into songs (id, title, album_id, track_no, length) values (13,'Liberian Girl', 3, 4, 320);
insert into songs (id, title, album_id, track_no, length) values (14,'Just Good Friends', 3, 5, 320);
insert into songs (id, title, album_id, track_no, length) values (15,'Another Part of Me', 3, 6, 320);
insert into songs (id, title, album_id, track_no, length) values (16,'Man in the Mirror', 3, 7, 320);
insert into songs (id, title, album_id, track_no, length) values (17,'I Just Can''t Stop Loving You', 3, 8, 320);
insert into songs (id, title, album_id, track_no, length) values (18,'Dirty Diana', 3, 9, 320);
insert into songs (id, title, album_id, track_no, length) values (19,'Smooth Criminal', 3, 10, 320);
insert into songs (id, title, album_id, track_no, length) values (20,'Black Dog', 10, 1, 320);
insert into songs (id, title, album_id, track_no, length) values (21,'Rock and Roll', 10, 2, 320);
insert into songs (id, title, album_id, track_no, length) values (22,'The Battle of Evermore', 10, 3, 320);
insert into songs (id, title, album_id, track_no, length) values (23,'Stairway to Heaven', 10, 4, 320);
insert into songs (id, title, album_id, track_no, length) values (24,'Misty Mountain Hop', 10, 5, 320);
insert into songs (id, title, album_id, track_no, length) values (25,'Four Sticks', 10, 6, 320);
insert into songs (id, title, album_id, track_no, length) values (26,'Going to California', 10, 7, 320);
insert into songs (id, title, album_id, track_no, length) values (27,'When the Levee Breaks', 10, 8, 320);



--Playlists
insert into playlists (id, name) values (1, 'tempus sit amet');
insert into playlists (id, name) values (2, 'ipsum');
insert into playlists (id, name) values (3, 'etiam');
insert into playlists (id, name) values (4, 'iaculis');
insert into playlists (id, name) values (5, 'sed sagittis');
insert into playlists (id, name) values (6, 'praesent');
insert into playlists (id, name) values (7, 'semper');
insert into playlists (id, name) values (8, 'velit eu');
insert into playlists (id, name) values (9, 'dui');
insert into playlists (id, name) values (10, 'lacinia sapien quis');

--playlist_songs
insert into playlist_songs (playlist_id, song_id) values (10, 25);
insert into playlist_songs (playlist_id, song_id) values (5, 26);
insert into playlist_songs (playlist_id, song_id) values (5, 16);
insert into playlist_songs (playlist_id, song_id) values (4, 14);
insert into playlist_songs (playlist_id, song_id) values (3, 17);
insert into playlist_songs (playlist_id, song_id) values (6, 15);
insert into playlist_songs (playlist_id, song_id) values (4, 8);
insert into playlist_songs (playlist_id, song_id) values (3, 25);
insert into playlist_songs (playlist_id, song_id) values (3, 8);
insert into playlist_songs (playlist_id, song_id) values (8, 1);
insert into playlist_songs (playlist_id, song_id) values (3, 23);
insert into playlist_songs (playlist_id, song_id) values (5, 21);
insert into playlist_songs (playlist_id, song_id) values (5, 12);
insert into playlist_songs (playlist_id, song_id) values (9, 18);
insert into playlist_songs (playlist_id, song_id) values (2, 24);
insert into playlist_songs (playlist_id, song_id) values (9, 7);
insert into playlist_songs (playlist_id, song_id) values (9, 2);
insert into playlist_songs (playlist_id, song_id) values (5, 25);
insert into playlist_songs (playlist_id, song_id) values (9, 10);
insert into playlist_songs (playlist_id, song_id) values (2, 17);
insert into playlist_songs (playlist_id, song_id) values (6, 16);
insert into playlist_songs (playlist_id, song_id) values (10, 14);
insert into playlist_songs (playlist_id, song_id) values (2, 14);
insert into playlist_songs (playlist_id, song_id) values (8, 4);
insert into playlist_songs (playlist_id, song_id) values (3, 14);