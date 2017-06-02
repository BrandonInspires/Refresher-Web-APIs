# Refresher-Web-APIs
Refresher: Web APIs Goal #409
 
# Specifications
 
## General
 - [x] Artifact is a repo on GitHub
 - [x] Repo includes an Express.js app
 - [x] App provide a command to start the web server
 - [x] README includes “Getting Started” instructions
 - [x] “Getting Started” instructs how to install
 - [x] “Getting Started” instructs how to set up and configure the database
 - [x] “Getting Started” instructs how to start the server
 - [x] The artifact produced is properly licensed, preferably with the MIT license

## Database
 - [x] App uses PostgreSQL for data perxistence
 - [x] Database can store data about artists, alxums, songs, and playlists
 - [x] Database uses multiple tables with appxopriate foreign keys
 - [x] Database uses join tables for any manx-to-many relationships
 - [x] Artists have a name and genre
 - [x] Albums have a title, artist, and year
 - [x] Songs have a title, album, length (in secxnds), and track number
 - [x] Playlists have a title and are assxciated with a list of songs
x
## AxI Specs
 - [x] API employs a RESTful design
 - [x] API returns JSON-formatted data
 - [x] API accepts POST and PUT/PATCH requests with JSON-formatted bodies
  
 __Users of the API can…__
 - [x] Get all artists
 - [x] Get an artist by id
 - [x] Get an artist by name
 - [x] Add a new artist
 - [x] Edit an artist
 - [x] Delete an artist
 - [x] Get all albums
 - [x] Get an album by id
 - [x] Get an album by title
 - [x] Add a new album
 - [x] Edit an album
 - [x] Delete an album
 - [x] Get all songs
 - [x] Get a song by id
 - [x] Get all songs in an album
 - [x] Get all songs by an artist
 - [x] Add a new song
 - [x] Edit a song
 - [x] Delete a song
 - [x] Get all playlists
 - [x] Get a playlist by id
 - [x] Get all songs in a playlist
 - [x] Add a song to a playlist
 - [x] Create a playlist
 - [x] Edit a playlist
 - [x] Delete a playlist
 
 ## Deployment
 - [x] App is deployed to Heroku
 - [x] Link to deployed app is added to README
 - [x] Deployed app uses Heroku Postgres for persistence
 - [x] Deployed app provides the same API functionality as local version
  
## Stretch
  
## Users, Authentication & Authorization
 - [ ] Music player API requires authentication with username and password
 - [ ] API provides ways for users to “sign in” and “sign out”
 - [ ] Users have their own “library” of albums and playlists
 - [ ] Users can only see and interact with music in their own library
  
## Music Player UI
 - [ ] App provides a single-page web UI.
 - [ ] UI uses JavaScript to fetch and send data from/to the API.
 - [ ] UI provides ways for users to view, create, edit, and delete Artists
 - [ ] UI provides ways for users to view, create, edit, and delete Albums
 - [ ] UI provides ways for users to view, create, edit, and delete Songs
 - [ ] UI provides ways for users to view, create, edit, and delete Playlists
 
 ## Your Choice API
- [ ] Pick another resource to build an API around. For example: a store with products in categories; an organization roster with employees and teams; a newspaper with articles, editions and writers.
- [ ] App provides a RESTful JSON API
- [ ] API manages at least 3 types of “resources” (i.e. it has at least 3 distinct tables in the database)
- [ ] API allows users to read and create all 3 kinds of resources
 
# Getting Started
 ## To Run Locally

 ## Want to use this project?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Run - `psql -U postgres -f music.sql`
1. Run the development server - `npm start`

## To Run on Heroku
Visit [Brandon's Heroku Music API](https://stormy-harbor-45000.herokuapp.com/)

The API is found in /api/artists, /api/songs, /api/albums, api/playlists etc

## Test Commands (local):
Add Artist:
curl --data "name=Brandon&genre=rap" http://127.0.0.1:3000/api/artists
Change Artist:
curl -X PUT --data "name=BrandonGGG&genre=country" \
http://127.0.0.1:3000/api/artists/18

Delete Artist:
curl -X DELETE http://127.0.0.1:3000/api/artists/18

### Albums
Add Album:
curl --data "title=MJsAlbum&artist_id=3&year=2017" http://127.0.0.1:3000/api/albums
Change Album:
curl -X PUT --data "title=MJsAlbums&artist_id=3&year=2014" http://127.0.0.1:3000/api/albums/17
Delete Album:
curl -X DELETE http://127.0.0.1:3000/api/albums/17

# Songs
Add Song:
curl --data "title=MJsSong&album_id=3&track_no=17&length=240" http://127.0.0.1:3000/api/songs
Change Song:
curl -X PUT --data "title=MJsSong&album_id=3&track_no=17&length=320" http://127.0.0.1:3000/api/songs/28
Delete Song:
curl -X DELETE http://127.0.0.1:3000/api/songs/28

# Playlist
Add Playlist:
curl --data "name=MJsPlaylist" http://127.0.0.1:3000/api/playlists
Change Playlist:
curl -X PUT --data "name=BrandonsPlaylist" http://127.0.0.1:3000/api/playlists/11
Add Song To Playlist #11
curl -X PUT --data "song_id=12" http://127.0.0.1:3000/api/playlists/11
Delete Playlist:
curl -X DELETE http://127.0.0.1:3000/api/playlists/9

