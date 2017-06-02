var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/artists', db.getAllArtists);
router.get('/api/artists/:id', db.getSingleArtist);
router.get('/api/artists/:id/songs', db.getAllSongsByAnArtist);
router.post('/api/artists', db.createArtist);
router.put('/api/artists/:id', db.updateArtist);
router.delete('/api/artists/:id', db.removeArtist);

router.get('/api/albums', db.getAllAlbums);
router.get('/api/albums/:id', db.getSingleAlbum);
router.post('/api/albums', db.createAlbum);
router.put('/api/albums/:id', db.updateAlbum);
router.delete('/api/albums/:id', db.removeAlbum);

router.get('/api/songs', db.getAllSongs);
router.get('/api/albums/:id/songs', db.getAllSongsOnAnAlbum);
router.get('/api/songs/:id', db.getSingleSong);
router.post('/api/songs', db.createSong);
router.put('/api/songs/:id', db.updateSong);
router.delete('/api/songs/:id', db.removeSong);

router.get('/api/playlists', db.getAllPlaylists);
router.get('/api/playlists/:id', db.getPlaylistById);
router.post('/api/playlists', db.createPlaylist);
router.put('/api/playlists/:id', db.updatePlaylist);
router.delete('/api/playlists/:id', db.removePlaylist);
router.get('/api/playlists/:id/songs', db.getAllSongsInAPlaylist);
router.post('/api/playlists/:id/', db.addASongToAPlaylist);
router.patch('/api/playlists/:id/', db.addASongToAPlaylist);
// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'Brandons Music Player API'}); 
});

module.exports = router;
