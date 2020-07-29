# Notified !

Notified is a web application where students looking for career opportunities can collaboratively manage and track the latest openings by adding to it as well as get notified when added by someone else. You can see the live  application here, [Notified](https://be-notified.herokuapp.com)

## Table of Contents

 - [Motivation](https://github.com/adarshsuresh07/Notified#motivation)
 - [Stacks Used](https://github.com/adarshsuresh07/Notified#stacks-used)
 - [Basic concept](https://github.com/adarshsuresh07/Notified#basic-concept)
 - [Features Implemented](https://github.com/adarshsuresh07/Notified#features-implemented)
 - [Future Scopes](https://github.com/adarshsuresh07/Notified#future-scopes)
 - [Contributors](https://github.com/adarshsuresh07/Notified#contributors)

## Motivation

The initial motive behind the idea was to create a space dedicated for sharing career openings for the students of our class. When shared through mediums like Whatsapp group, there is a much greater chance of getting ignored and at some point these messages gets piled up and students end up in no more paying attention to that. In addition, we felt a need to get notified about the openings of our preference and keep track of the application and wish list status of the opportunities.

## Stacks Used

The whole application is build on the following : 

 - `Reactjs`  front end
 - `Redux` state management
 - `MongoDB` database
 - `Nodejs - Express` backend
 - `SendGrid` email communication
 - `Heroku` deployment


## Basic concept

Lets now familiarise Notified a bit more clearly. You'll find 4 different stacks for opportunity management on the dashboard once you've successfully set up your account :

 - ***Opportunity stack*** : aka main stack, this is a global stack that contains all active opportunities added by users. It gets updated with every new opportunity that you add to the system.
 - ***Todo stack*** : aka wish stack, every user gets a private copy of todo stack to own and you can pool this by picking those openings from the main stack which you wish to apply or look into.
 - ***Applied stack*** : This is the place where you move the openings which you've applied ( yes, an end to this : "Dude, I get the link, I apply..don't even know which all I've applied and what I've to wait for") and yes, it is also private to the user.
 - ***Expired stack*** : A place where an opening from your main stack gets piled up when its no longer active.


## Features Implemented

 - [x] User authentication and account verification
 - [x] Users can add a new opportunity
 - [x] When a new opportunity is added, all users gets notified about it
 - [x] The opportunities which are no longer active gets automatically moved to the expired stack
 - [x] Users can filter the opportunities based on the categories  by any keyword
 - [x] Users can search for opportunities by keywords
 - [x] Users can customise their todo and applied stack by moving the opportunities back and forth between the stack
 - [x] Even though a user can move an opportunity from main stack to todo, the change wont get reflected to other users, its perfectly abstracted
 - [x] To apply for an opportunity, there is an apply button which directly takes you for applying or you can copy the link easily from there
 - [x] Users can submit feedback and reach us in person for any queries or suggestions
 - [x] A help section is available in the landing page to let you know the interface
 

## Future Scopes

We are looking forward to incorporate many more user-friendly and amazing features to Notified in the future. 

 - [ ] Room concept 
 > Currently every Notified user belongs to the **single room/cluster** where there is only one main stack and  any new opening added is public within the cluster.  This doesn't provide much abstraction when a group of users want to create a separate cluster and share openings within their cluster. 
 > 
 > Under the **room concept**, a user can initiate a room and invite users to the cluster and share things relevant to their cluster. Thus, there will be many rooms with two or more users belonging to it and is abstracted from other similar rooms.
 - [ ] Option to share an opportunity to a non user via a link
 - [ ] Get notified on new openings based on preferences

 By listing them here, we feel more responsible in implementing them as soon as possible and glad to know what you think about it. 

## Contributors

 `Adarsh S `
 
[1]: https://github.com/adarshsuresh07
[2]: https://adarshsuresh07.github.io/Portfolio/


[![github](https://img.icons8.com/fluent/48/000000/github.png)][1]      [![portfolio](https://img.icons8.com/ios/50/000000/domain.png)][2]
---

`Haseena Hassan`

[1]: https://github.com/haseena-hassan
[2]: http://www.linkedin.com/in/haseena-hassan


[![github](https://img.icons8.com/fluent/48/000000/github.png)][1]      [![linkedin](https://img.icons8.com/fluent/48/000000/linkedin.png)][2]




## #a note to readers..

Thank You ! Have a question or want to reach out?

**We'd love to hear from you. If you don’t see the information you need or have a suggestion or feedback, email us at notified.team@gmail.com**


<img src="https://img.icons8.com/flat_round/64/000000/filled-like.png"/>