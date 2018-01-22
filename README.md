# NoSix - Contractors / Admin website

Please visit the site at: https://nosix.herokuapp.com/home

This website was prepared for the NoSix crew as a proof-of-concept as part of the Wellington 2017 PacHack event hosted at Enspiral Dev Academy's Cuba St campus.

No-Six Ltd is an Auckland-based media creation company focussed on producing modern media content for clients, and at the same time helping the freelancers working with them to understand and reach their own business goals.

Our aim for them was to create a site that allowed contractors to register / login and begin to assess their progress towards reaching their individual financial goals.

From the homepage each contractor can go to separate modules that guide them to creating a weekly expenses budget which then calculated their annual expenses that they needed to cover. A separate ledger module allows them to record income and expenses and the net position is shown against a progress bar on the home page.

To have a look please use the following commands and go to localhost:3000 - 

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```
