[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Full-Stack Project Client for My Garage

This app allows users to keep track of the number of cars by make, model, year, and color. Users can create, update, delete, and retrieve cars.

Use with Full-Stack Project API for My Garage.

Link to live application: https://andyjzhong.github.io/full-stack-project-client/

Links to the Repos are provided in the URL section below.

## Description

The purpose of this app is to maintain a simple collection of cars. It has the ability to record certain details of the car, including: make, model, year, and color. The genesis of the idea arrived after multiple attempts of extravagant ideas. After speaking with a consultant I decided to keep the project simple in order to meet the requirements of creating a relational database with the ability to create, update, show, and delete. My interest in cars and desire to maintain the simplicity of the project led me to creating this app.

## Approach
It was really important to me that I focused on making sure I hit all my requirements before I started doing any styling. I came up with wireframes for a basic and minimalistic app. I next focused one what CRUD actions would make sense for an app that manages car collections. I knew I wanted to have the ability to create, show, and delete cars and I figured it might make the most sense if the user can only update the color of the cars. For the actual coding, I started by creating a database and a cars tables using Ruby on Rails. I added in the types of attributes I wanted for my car, which were the make, model, year, and color of the cars. Once that was established, the next step was to create a relationship between the cars and the users. For the Front End, I added in the User Management section that I had created for the Game Project to save some time and was also applicable. I added in a cool background picture and navbars. User handlebars, I had the ability to show the collection of users cars. Once I had most of my features completed, I was able to focus on showing/hiding the appropriate buttons and sections and cleaned up some of the UI features.

## Challenges

-   Time was certainly a factor for this project, in particular the last week of a semester for grad school. The biggest challenge I had to overcome was having to timebox effectively in order to ensure the completion of this project. The fact that I kept my idea simple allowed me to focus on the requirements this time rather than working on the visuals so much.
-   Another issue I ran into was installing Heroku. I had an issue with the Heroku deployment process which was frsutrating but with the help of a consultant and the issue log, I was able to move past this issue.
-   One of the challenges that took much of my time was trying to figure out how to incorporate the ability to only allow the current user to make changes to their own cars. This involved working on the Cars Controller file and managing its relationship with the Users table, which was provided to us by the Rails API Template.
-   Creating the update feature was definitely the most challenging part of the project. By presentation time, I was unable to complete this feature. In time, I was able to pinpoint the issue and solved it for resubmission.

## User Stories

As a user, I would like to:

-   Sign up for an account so I can manage my car collection.
-   Sign into my account so I can interact with my cars.
-   Sign out of my account so others cannot make changes to my cars/account.
-   Change passwords in the event I want to protect my account with added security.
-   Create a car in a collection with:
    -   Make
    -   Model
    -   Year
    -   Color
-   Update a car's color in case I wanted to repaint the car.
-   Delete the car in the event a car is sold.
-   Retrieve the collection of cars in my garage and list details about them.

## Wireframes

Link to wireframe: http://imgur.com/a/ytEjv

## URLs

-   Front End Repo: https://github.com/andyjzhong/full-stack-project-client
-   Back End Repo: https://github.com/andyjzhong/full-stack-project-api
-   Deployed Front End Client: https://andyjzhong.github.io/full-stack-project-client/
-   Heroku Site: https://whispering-springs-26931.herokuapp.com/

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
