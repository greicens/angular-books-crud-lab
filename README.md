### My Thoughts About The This training

It was interesting to work on the front end without knowing the backend. Writing accessing the RESTful routes with $http was very intuitive. It was more difficult linking the pages within the book API using angular. Overall Angular made the job a lot easier.

### [Link to my Gist with steps to create an agular app from scratch](https://gist.github.com/greicens/277d037b1397699491aa47d5b4e70ce2)

# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Angular Book App

You're on the starter-wdi34 branch! These instructions are for WDI34!

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this training, developers will be able to:*

- display data in an angular app.
- use `$http` to access a RESTful API.

Deliberate practice is a really effective way to build skills. You've learned about a lot of key pieces of an Angular app, and now it's time to put those pieces together.  You'll be expected to be able to build an Angular app with from a skeleton that controls client-side routes.

### Overview

In this lab, you'll be creating a simple library app to keep track of books.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page, a user should be able to edit or delete a book.

Your data (a list of books) is available at `https://super-crud.herokuapp.com/books`. You and your classmates will all be working with the shared API; keep that in mind as you make changes.  If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your colleagues, though. They might be puzzled why their newly created book resources aren't appearing in the database.

### Expectations

Your finished product will:

  1. Route the user to an index page at `/`. That page will:
    * display all of the books.
    * show the image, title, author, and release date of each book.
    * include a link to the show book page on the title of each book.
  2. Route the user to a show book page at `/books/:id` for any existing book id. The show page will:
    * display all of the data about the specific book.
    * have a delete button that deletes the specific book from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the book.
    * The edit form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made when editing.

### This Repo's Structure

There are two branches in this repo that you might want to pay attention to: `starter-wdi34` and `solutions`.

The `master` branch is for a different version of this lab.

The `starter-wdi34` branch has most of the basic parts of the app set up, with some comments to help you as you build out the project. It also has client-side routing in place. (If you run it as is, you will see errors!)

The `solutions` branch has a fully built-out application that meets all the expectations above. Reference it if you're really stuck, but remember you may have your app set up differently!



### Getting Started

1. Fork and clone this repo.
2. Change directories into `angular-books-crud-lab`.
3. **Move to the `starter-wdi34` branch, then create a branch for your work!**
4. Since this app uses Angular's client-side routing,  the app will need to be served from a simple server. **Run `budo --pushstate --host=localhost --open` from the Terminal (inside your project directory).** This starts a simple server that by default will serve up your `index.html` on `/` and any route it doesn't recognize (like `/books`)!  Note: Your `index.html` *must* be in your main project directory for this server setup.
4. Take inventory of the provided code - what do you see in the browser console when you visit the site?

### Tips

* Commit frequently!

* The books API is set up with RESTful routes, so follow RESTful routing conventions.  You can test endpoints with Postman or cURL, or by setting up a simple request to trigger them.
* Look at (`console.log`) the data you get back from each `$http` request!
* If you want to change the page url from within a controller, you'll have to interact with the routing setup a little. Inject the [`$location`](https://docs.angularjs.org/api/ng/service/$location) service into your controller, and use its `path` method. You will probably want to do this with the BooksShowController, so `$location` is included there.

    * <details><summary>click for example</summary>  

      ```js  
      // inside GoatsShowController, we want to send the user back to goats index (home page) automatically
      $location.path('/');
      ```
      </details>

### Stretch Challenges

2. **Allow the user to edit the book image:** allow the user to change the URL for the book image.
3. **Add filters to organize the books index page:** add a search bar to filter the books by your search, or buttons to sort them alphabetically by author name or book title.
1. **Allow the user to add a book:** add a form on the index page that lets a user enter information for a new book.  Read the [super CRUD API documentation](https://github.com/SF-WDI-LABS/super-crud-api) documentation or code to see what fields you need to send in the request body.
