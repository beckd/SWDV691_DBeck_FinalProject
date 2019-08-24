# SWDV691_DBeck_Final_Project
David Beck's repo for SWDV691 - Final Project	David Beck's repo for SWDV691 - Final Project

## Link to Game:
https://swdv691-finalproject-dbeck.herokuapp.com/

## 8/21/19 -- The Home Stretch
The game is now fully functional and hosted entirely in the cloud via Heroku. This week's focus is on bug fixing and polish. I've had lots of successful playthroughs already, but more polish is needed. I originally had my server and app code in separate repos. But after some issues getting my app code up in the cloud, it became apparent that combining the code into a monolith structure was the best course of action. It also had the added benefit of allowing my to work through one repo and one pipeline to Heroku. It did however introduce a some new bugs, most of which I believe I've addressed, and will continue to address as I test this week.

## Known Issues:
* The initial load of the game is taking a while, 10-15 seconds on my machine. I'm trying to investigate why, so please be aware.
* If you refresh the page during the game, the user data is getting lost. It's not erased from the db, it just doesn't remember which user is playing. I'm investigating this issue as well, but to be frank, it seems above my skill level at this point. I'm also reluctant to attempt a fix that might have knock-on effects to anything related to user data. I'm still investigating, but more willing to just issue a warning for this issue at this time.
* Not optimized for smaller browser sizes and mobile. I received feedback regarding this, and it's completely valid. As this is an MVP I feel inclined to leave this issue for know, as I don't believe I have enough time left to properly make the code changes needed and to test them out. 

 ## A Text-Based Adventure
This project will build on a previous project from all the way back in SWDV 600. In that class we built a TBA using only Python. I want to go back and revisit this project, adding to it all the things I've learned since then. I want to translate this single file game into a fully fledged game that is hosted and accessible to the public.

 ## My Trello board for this project:
https://trello.com/b/WshWyFyf/swdv691dbeckfinalproject

 ## Using Ionic
I plan on using Ionic with Cordova for this project. I believe the Tabs template (that I've used before) would provide a natural framework to rapidly develop my MVP. 

 ## Other Technologies I plan on using are:
* MongoDB - for Database storage
* Heroku - for hosting
* Mongoose - for web services
