curl --data "name=Brandon&genre=rap" http://127.0.0.1:3000/api/artists
curl -X PUT --data "name=BrandonGGG&genre=country" \
http://127.0.0.1:3000/api/artists/18

curl -X DELETE http://127.0.0.1:3000/api/artists/18

# Albums

curl --data "title=MJsAlbum&artist_id=3&year=2017" http://127.0.0.1:3000/api/albums

curl -X PUT --data "title=MJsAlbums&artist_id=3&year=2014" http://127.0.0.1:3000/api/albums/17

curl -X DELETE http://127.0.0.1:3000/api/albums/17

# Songs

curl --data "title=MJsSong&album_id=3&track_no=17&length=240" http://127.0.0.1:3000/api/songs

curl -X PUT --data "title=MJsSong&album_id=3&track_no=17&length=320" http://127.0.0.1:3000/api/songs/28

curl -X DELETE http://127.0.0.1:3000/api/songs/28

# Playlist

curl --data "name=MJsPlaylist" http://127.0.0.1:3000/api/playlists
curl -X PUT --data "name=BrandonsPlaylist" http://127.0.0.1:3000/api/playlists/11
curl -X PUT --data "song_id=12" http://127.0.0.1:3000/api/playlists/11
curl -X DELETE http://127.0.0.1:3000/api/playlists/9