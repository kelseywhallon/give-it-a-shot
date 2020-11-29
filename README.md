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
1. Ensure environment variables are set
    \-   `API_KEY`
2.  Local database is created, and is set up with the models provided with this repository, and config is changed to point to your database.
    1. `cd give-it-a-shot-image-sql`
    2\. `createdb give-it-a-shot`
    3\. Create a config.json:
        \-
    4. `sequelize db:migrate`
3.  Seed the database with Sequelize:
    1.  `cd give-it-a-shot-api-sql`
    2.  `sequelize db:seed --seed seeders/20201118201018-image-seeder.js`
4.  Dependencies are installed (npm i, both in frontend and backend directories)

## React Component Hierarchy - needs to be updated

-   App
    -   Header
    -   Routes
        -   AccountDetails
        -   Favorites
        -   Register
        -   Login
        -   Quiz
            -   QuizForm
                -   Option
            -   Results
                -   Option
        -   Details
            -   DrinkDetails
        -   UpdateUser
        -   Favorites
    -   Footer

## Entity Relationship Diagram

![Entity Relationship Diagram](images/ERDv2.jpeg)

## Wireframes

![Wireframes](images/wireframe.png)

## Code Snipets

## Future Development

-   Bubble up Sequelize errors, like password validation needs to be 8 characters long
-   Implement API calls with Axios, for range of added features: wider browser support, easy to use progress bar, simultaneous requests
-   Only suggest the ingredients that pair with the appropriate liquor, instead of all ingredients
-   Create an Account navigation link, with a drop down for "Account Details" and "Favorites"
-   Redirect user home after registering, instead of logging in
-   Register/Log in errors - none are thrown, the user has no idea what is happenign
-   Use React Contexts to avoid explicitly passing props down
