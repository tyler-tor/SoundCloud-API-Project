# SoundCloud-API-Project
SoundCloud API Project AppAcademy

A website to view songs and albums made by other users for every user.
You can add albums and songs by signing up or logging in if a account is already made. 
Also if you don't want to make a account feel free to use the Demo User to test the sight out before you make a account.

# Steps on getting started
1. pull the project to clone the project
2. cd  into the backend and frontend folderds and npm install
3. cd into the backend folder and set up your local environment with a .env file example below

![image](https://user-images.githubusercontent.com/93111660/189495259-d4260946-f6e4-4ff1-be05-ff639ff37550.png)

Rum the App on your local environment by using two different terminals one being in the backend folder and the other being in the front end folder
![image](https://user-images.githubusercontent.com/93111660/189495321-e500cf84-f4ac-496b-929d-b48971624d12.png)
in both folders.

Live link: https://tylers-soundcloud-project.herokuapp.com/

## Splash page view:

![image](https://user-images.githubusercontent.com/93111660/189492368-fb6eb000-33e4-47a8-a08b-46e93278b95a.png)

Here you have access to view the Splash page, Songs, Albums for view only. You can utilize the Log in, Signup or Demo User to access Create, Update, Delete songs or albums.


## Home page view:

![image](https://user-images.githubusercontent.com/93111660/189492458-b7f43148-3aec-4afb-84bf-9762611e0b50.png)

Here you can start by creating a Album and from there create songs for the Album to perform your Crud actions on either one.


## Albums page view: 

![image](https://user-images.githubusercontent.com/93111660/189492708-3350475b-e1f4-4dfd-bb88-91e6517413fd.png)

With access to the albums page you can access CRUD actions on your albums only, each album displays the songs associated with that album.


## Songs page view:

![image](https://user-images.githubusercontent.com/93111660/189492648-3f8739ad-c891-4faa-b461-78345d3b1caa.png)

With access to the songs page you can access CRUD actions on your songs only.

## Song detail information:

![image](https://user-images.githubusercontent.com/93111660/189495399-fa60f501-c503-4bdc-b199-a3ec880a760a.png)

Access by clicking on one of the songs on the songs view page. It will redirect you to display the individual song.

## Album detail information:

![image](https://user-images.githubusercontent.com/93111660/189495423-28b831ed-49df-486f-bd10-995e73c54cf1.png)

Access by clicking on one of the albums on the albums view page. It will redirect you to display the individual album.

## Tech implementation:

In order to implement security and validation if you are not the owner of a song/album you will not have access to Update/Delete a song or Album.
Also will not have access to add songs to a album you do not own. You can view songs and albums that are on the application but cannot perform non-user actions on them. Controls this by checking the album and song userId against the login user.id below is a coding example:

![image](https://user-images.githubusercontent.com/93111660/189495605-0ed6c68a-47f4-4510-a137-0e031c45a839.png)

![image](https://user-images.githubusercontent.com/93111660/189495634-6d6ee29a-3a21-4bb1-825b-28b03f1294e7.png)



## Technologies:
- React
- Redux
- Express
- Node Js
- Sqlite3
- Postgres
- Heroku

## Future implentations: 
- Playlists
- Comments
- CRUD operations for Playlists/comments
- Profile page for the current user displaying specific information with ways to adjust settings/information




