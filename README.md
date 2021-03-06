# Invoice application
This web application helps business owners keep track of their invoices online. It saves the data and makes sure they can edit and delete the invoices that they have already. Users will use this application to Create Read Update and Delete their own private invoices under their own account.
## backend repo
https://github.com/BenLirio/latari-invoice-back
## Deployed
### Front End
https://benlirio.github.io/latari-inv…
### Back End
https://young-island-83955.herokuapp.com/

## Technologies used
WebPack
Grunt
Handlebars
npm, node js
Chrome

## User stories
A new user should be able to create an account

A return user should be able to log in to his account

A User trying to save invoice information should be able to save his invoice

A User trying to index other users invoices should not be able to

A user trying to change his password should be able to do so

A user tyring to log out and log in as another user should be able to do so.

A user trying to be remembered from time to time should be able to.


## Planning and story
I started off this project with a large scope in mind. 
I really wanted to just create something that was very complex.
I knew based on talking with mike that I should scale the project down. 
I decided to do this, but I also got side tracked with a couple of things. First off I got side tracked with unit testing, this took way too much time and was not worth it in the end because I did not end up using it at all. Second thing I got sidetracked with was a feature that automatically requests the table information as soon as I log in. I wanted it to set up the mvc client side so it will be easy to use. After getting side tracked with this, I finished a very small project the last day. This project almost passed all of the requirements but did not have everything. Over break I decided to build off of the small project and slightly add to it. I really wanted to get something finished and pass the requirements. 
## Wire frames
https://xd.adobe.com/view/4a152c29-2535-46df-4892-73fc16b59ebd-3c24/
link here brings you to live wire frame
Most of this wire frame is a reach goal, but I wanted to have something in mind when programing.

## Unsolved problems
The transitions should be fixed.
The remember me button is permanently pressed down.
I really ran into the first issues with asynchronous coding. I didn't understand how to properly manipulate the ASYNC await and promise synctax. 
I learned two very important things while testing.
1. Chome dev tools shows a life representation of an object. It takes in the reference and then keep track of it from there.
If you want to get a single instance of an object that is effected by promises and awaits use JSON.parse(JSON.stringify())
2. The biggest problem I have in programing is constantly trying to refactor and optimize a small part of the code when I could be taking large gains in other areas.
