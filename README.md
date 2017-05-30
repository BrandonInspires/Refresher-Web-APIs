# Refresher-Web-APIs
Refresher: Web APIs Goal #409
 
# Specifications
 
## General
 - [ ] Artifact is a repo on GitHub
 - [ ] Repo includes an Express.js app
 - [ ] App provide a command to start the web server
 - [ ] README includes “Getting Started” instructions
 - [ ] “Getting Started” instructs how to install
 - [ ] “Getting Started” instructs how to set up and configure the database
 - [ ] “Getting Started” instructs how to start the server
 - [ ] The artifact produced is properly licensed, preferably with the MIT license

## Database
 - [ ] App uses PostgreSQL for data persistence
 - [ ] Database can store data about artists, albums, songs, and playlists
 - [ ] Database uses multiple tables with appropriate foreign keys
 - [ ] Database uses join tables for any many-to-many relationships
 - [ ] Artists have a name and genre
 - [ ] Albums have a title, artist, and year
 - [ ] Songs have a title, album, length (in seconds), and track number
 - [ ] Playlists have a title and are associated with a list of songs
  
## API Specs
 - [ ] API employs a RESTful design
 - [ ] API returns JSON-formatted data
 - [ ] API accepts POST and PUT/PATCH requests with JSON-formatted bodies
  
 __Users of the API can…__
 - [ ] Get all artists
 - [ ] Get an artist by id
 - [ ] Get an artist by name
 - [ ] Add a new artist
 - [ ] Edit an artist
 - [ ] Delete an artist
 - [ ] Get all albums
 - [ ] Get an album by id
 - [ ] Get an album by title
 - [ ] Add a new album
 - [ ] Edit an album
 - [ ] Delete an album
 - [ ] Get all songs
 - [ ] Get a song by id
 - [ ] Get all songs in an album
 - [ ] Get all songs by an artist
 - [ ] Add a new song
 - [ ] Edit a song
 - [ ] Delete a song
 - [ ] Get all playlists
 - [ ] Get a playlist by id
 - [ ] Get all songs in a playlist
 - [ ] Add a song to a playlist
 - [ ] Create a playlist
 - [ ] Edit a playlist
 - [ ] Delete a playlist
 
 ## Deployment
 - [ ] App is deployed to Heroku
 - [ ] Link to deployed app is added to README
 - [ ] Deployed app uses Heroku Postgres for persistence
 - [ ] Deployed app provides the same API functionality as local version
  
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
 

