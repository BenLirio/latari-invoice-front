## User stories
A new user should be able to create an account
A return user should be able to log in to his account
A User trying to save invoice information should be able to save his invoice
A User trying to index other users invoices should not be able to
A user trying to change his password should be able to do so
A user tyring to log out and log in as another user should be able to do so.
A user trying to be remembered from time to time should be able to.

## Wire frames
https://xd.adobe.com/view/4a152c29-2535-46df-4892-73fc16b59ebd-3c24/
link here brings you to live wire frame
Most of this wire frame is a reach goal, but I wanted to have something in mind when programing.

### Basic project
I had a long trial and error period with a bunch of other system.
First I tried a testing based approach. That did not really work out to well. Yet I really go to under stand the back end becuase of it. I now understand how the authentication works even thought that is not very helpful for the project.
But this is about the front end so I will go into that.
## Front end MVC
I tried to recreate the rails on front end.
By indexing all of the available recources and dynamically representing them on the front end so that they could automatically update when I used them.
## Pitfalls
I really ran into the first issues with asynchronous coding. I didn't understand how to properly manipulate the ASYNC await and promise synctax. 
I learned two very important things while testing.
1. Chome dev tools shows a life representation of an object. It takes in the reference and then keep track of it from there.
If you want to get a single instance of an object that is effected by promises and awaits use JSON.parse(JSON.stringify())
2. The biggest problem I have in programing is constantly trying to refactor and optimize a small part of the code when I could be taking large gains in other areas.
## Ended up pivoting the project in order to complete requirements.
I now have a very boring, but working project.

Other things I am still trying to figure out is how exactly does webpack compile code, I feel like I have run into a few issues when not understaning completely how to reference my dependencies.
### one of the requirements is commits every day, here is a link to the other file
https://github.com/BenLirio/invoice-front-end
