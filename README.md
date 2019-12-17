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
