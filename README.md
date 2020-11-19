# Give It A Shot

We know all know the feeling: standing in a room full of people, unsure if you belong or what to say. In our case, everyone is ordering fancy cocktails and all you know how to say is "Vodka Soda". Give It A Shot changes all of that.

## How It Works

Once logged in, you will be taken to our drink quiz, starting with the type of liquor. You will also be able to specify any ingredients or flavors you like; or, you can specify no preference.

From there, Give It A Shot will recommend you 3 brand new drinks! If you don't like those ones, you can always load more.

If you don't want to wait through the quiz, there's always the option to completely randomize what drink you'd like.

## Motivation

As fledgling cocktail connoisseurs, we love trying new drinks. But, just like you, we _don't even know what we don't know!_ Through Give It A Shot, we'll be able to try any drink known to the publicly available, [Cocktail DB](https://www.thecocktaildb.com/)

## Running Locally

Our hosted version of this web app can be found at:

But if you'd like to play with the code yourself, please do the following:
1\. Ensure environment variables are set
2\. Local database is set up with the models provided with this repository, and config is changed to point to your database.
3\. Dependencies are installed (npm i, both in frontend and backend directories)

## React Component Hierarchy

-   App
    -   Header
    -   AccountDetails
    -   Favorites
    -   LandingPage
    -   Register
        -   RegisterForm
    -   Login
        -   LoginForm
    -   Quiz
        -   QuizForm
    -   Recommendations
        -   DrinkContainer
            -   Drink
            -   Drink
            -   Drink
    -   Details
        -   DrinkDetails

### Note to self

Quiz flow is actually just one component, that builds up the REST call over the course of the quiz. When the user "submits" each preference, that liquor/ingredient will be save in state to the ultimate REST call and the next quiz data will be loaded.

## Entity Relationship Diagram

![Entity Relationship Diagram](images/ERD.jpeg)

## Wireframes

![Wireframes](images/wireframe.png)

## Code Snipets

## Future Development

-   Bubble up Sequelize errors, like password validation needs to be 8 characters long
-   Implement API calls with Axios, for range of added features: wider browser support, easy to use progress bar, simultaneous requests
-   Further expand images auto seeding + formatting for JSON response. Subdirectories within images can be named as the field they will represent in the response JSON, with all the potential options for that field as images underneath.
