var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://vxszdberskpzcn:32df3a0f42b2fdfd94afa209871387bf36d899ab1941a81af9d290d0bd536338@ec2-54-225-68-71.compute-1.amazonaws.com:5432/d1ql7aq3ve4hak';
var db = pgp(connectionString);

function getAllArtists(req, res, next) {
  db.any('select * from artists')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL artists'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleArtist(req, res, next) {
  var artist_id = parseInt(req.params.id);
  db.one('select * from artists where id = $1', artist_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE artist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createArtist(req, res, next) {
  db.none('insert into artists(name, genre)' +
      'values(${name}, ${genre})', 
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one artist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateArtist(req, res, next) {
  db.none('update artists set name=$1, genre=$2 where id=$3',
    [req.body.name, req.body.genre, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated artist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeArtist(req, res, next) {
  var artistsId = parseInt(req.params.id);
  db.result('delete from artists where id = $1', artistsId)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} artist`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}
// Albums

function getAllAlbums(req, res, next) {
  db.any('select * from albums')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL albums'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function getSingleAlbum(req, res, next) {
  var album_id = parseInt(req.params.id);
  db.one('select * from albums where id = $1', album_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE album'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createAlbum(req, res, next) {
  db.none('insert into albums(title, artist_id, year)' +
      'values(${title}, ${artist_id}, ${year})', 
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one album'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateAlbum(req, res, next) {
  db.none('update albums set title=$1, artist_id=$2, year=$3 where id=$4',
    [req.body.title, req.body.artist_id, parseInt(req.body.year), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated album'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeAlbum(req, res, next) {
  var album_id = parseInt(req.params.id);
  db.result('delete from albums where id = $1', album_id)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} album`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}
// Songs
function getAllSongs(req, res, next) {
  db.any('select * from songs')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL songs'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};


function getSingleSong(req, res, next) {
  var song_id = parseInt(req.params.id);
  db.one('select * from songs where id = $1', song_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function getAllSongsOnAnAlbum(req, res, next) {
  var album_id = parseInt(req.params.id);
  db.any('SELECT * FROM songs Where album_id = $1', album_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all songs from an album'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};
function getAllSongsByAnArtist(req, res, next) {
  var artist_id = parseInt(req.params.id);
  db.any('SELECT * FROM songs join albums on songs.album_id = albums.id where albums.artist_id = $1', artist_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all songs by an artist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createSong(req, res, next) {
  db.none('insert into songs(title, album_id, track_no, length)' +
      'values(${title}, ${album_id}, ${track_no}, ${length})', 
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updateSong(req, res, next) {
  db.none('update songs set title=$1, album_id=$2, track_no=$3, length=$4 where id=$5',
    [req.body.title, req.body.album_id, parseInt(req.body.track_no), parseInt(req.body.length), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeSong(req, res, next) {
  var song_id = parseInt(req.params.id);
  db.result('delete from songs where id = $1', song_id)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} song`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

// Playlists

function getAllPlaylists(req, res, next) {
  db.any('select * from playlists')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL playlists'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};


function getPlaylistById(req, res, next) {
  var playlist_id = parseInt(req.params.id);
  db.one('select * from playlists where id = $1', playlist_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE playlist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function getAllSongsInAPlaylist(req, res, next) {
  var playlist_id = parseInt(req.params.id);
  db.any('SELECT playlists.name AS "Playlist Name", songs.title AS "Song Title", albums.title AS "Album Title", artists.name AS "Artist Name", songs.length FROM playlist_songs join songs on songs.id = playlist_songs.song_id join albums on albums.id = songs.album_id join artists on artists.id = albums.artist_id join playlists on playlists.id = playlist_songs.playlist_id Where playlist_id = $1', playlist_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all songs from a playlist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};
function addASongToAPlaylist(req, res, next) {
  var attributes = {
    playlistId: parseInt(req.params.id),
    songId: req.body.song_id,
  }
  var query = db.none('insert into playlist_songs(playlist_id, song_id) values(${playlistId}, ${songId})', attributes)
  console.log('GOOD SQL A ???', query)
 
 // Async npm mod
 // 
  // var playlistId = parseInt(req.params.id);
  // var songId = req.body.song_id;
  // var query = db.none('insert into playlist_songs(playlist_id, song_id) values($1, $2)', [playlistId, songId])
  // console.log('GOOD SQL B ???', query)

  // BAD: 
  // var query = db.none('insert into playlist_songs(playlist_id, song_id) values(' + playlistId + ', ' + songId + ')')

  db.none('insert into playlist_songs(playlist_id, song_id) values(${1},${2})', playlist_id, req.body.song_id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all songs by an artist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function createPlaylist(req, res, next) {
  db.none('insert into playlists(name)' +
      'values(${name})', 
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one playlist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

function updatePlaylist(req, res, next) {
  db.none('update playlists set name=$1 where id=$2',
    [req.body.name, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated playlist'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removePlaylist(req, res, next) {
  var playlist_id = parseInt(req.params.id);
  db.result('delete from playlists where id = $1', playlist_id)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} playlist`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllArtists: getAllArtists,
  getSingleArtist: getSingleArtist,
  createArtist: createArtist,
  updateArtist: updateArtist,
  removeArtist: removeArtist,
  getAllAlbums: getAllAlbums,
  getSingleAlbum: getSingleAlbum,
  getAllSongsOnAnAlbum: getAllSongsOnAnAlbum,
  getAllSongsByAnArtist: getAllSongsByAnArtist,
  getAllPlaylists: getAllPlaylists,
  getPlaylistById: getPlaylistById,
  createPlaylist: createPlaylist,
  updatePlaylist: updatePlaylist,
  removePlaylist: removePlaylist,
  getAllSongsInAPlaylist: getAllSongsInAPlaylist,
  addASongToAPlaylist: addASongToAPlaylist,
  createAlbum: createAlbum,
  updateAlbum: updateAlbum,
  removeAlbum: removeAlbum,
  getAllSongs: getAllSongs,
  getSingleSong: getSingleSong,
  createSong: createSong,
  updateSong: updateSong,
  removeSong: removeSong
};
