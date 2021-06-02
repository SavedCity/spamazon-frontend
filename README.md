# spamazon-frontend

<h1>Spamazon</h1>

<h4>A shopping app by Troy Redway, Andy Checo, and Jesse Moryn</h4>

Link to deployed frontend on Heroku:  https://spamazon-ga.herokuapp.com

The frontend of Spamazon was made using Create React App and is hosted on Heroku. The products displayed on our page are pulled from our Django API which is also hosted on Heroku.

<h2>Process and General Issues</h2>
We began by creating a repo on Github and cloning it to our local machines, then one of us went about initializing everything by using npm create-react-app. Then we got rid of the default code in app.js and went about building our basic CRUD routes, using Postman to test them. We also hooked it up to our Heroku Django API, which we used to store all our product data for the app.

Once the basics of Spamazon (some might say, the <i>Spamazon Basics</i>) were set up, we started making component files to build out the functionality of our app. This included things like AddForm, Nav, Products, Edit, and so on. Using component files also allowed us to split up the work a bit, as this app is a bit small for three people to work on without causing huge merge conflicts.

Once we had all those working fine with minimal styling applied, we wanted to figure out how to select a product and display its details as a modal on the page. After a ton of frustrating trial and error with React Router and functional components, we decided to build it a different way that we knew was actually possible. Unfortunately this required some significant structural changes to our code, including altering the render in our app.js, products component, ViewProduct component, and the creation of a new component called ProductDetail.

After all of that was done and working, we realized that there were also significant changes made on someone else's machine for the building out of an extensive Cart/Checkout feature, but using the old file structure.

After discussion, we decided the easiest way to merge these files was for one person to go through the Cart/Checkout files on a non-production github branch, and attempt to integrate them into the new file structure we made. After much more trial and error, we once again had a working version which we pushed to main and then got everyone back on the same codebase.

It wasn't a very elegant solution to resolving merge conflicts, but it worked for us, so no harm, no foul.

After that, all there was to do was work on our styling and some minor bugs, which went just fine.

<h2>Heroku Issue</h2>
We had a similar issue on the frontend as we did on the backend, that being that our file structure wasn't correctly implemented to allow Heroku to detect our create-react-app file structure. Evidently it would be wiser in the future to make the react app FIRST, then push it to a github version to ensure all the proper files are in the parent directory.

To resolve the issue, we ended up having to use a git subtree push command so that Heroku used the correct directory as the parent. Once again, maybe not an elegant solution, but it worked for us.

<h2>Unresolved Issues</h2>
This issue is also mentioned in our backend README and has to do with the price in our products model. For some reason, when we posted a new product to the page with a nonzero number in the decimals places, it would round to a whole number with .00 in the decimal places. We were using DecimalField in our Django model and still aren't sure why our page does this.
