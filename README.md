# week-03-assignment

A cookie clicker using JavaScript

## Plan

1. Do GitHub branch process
2. make a wireframe, look at examples and user stories below
   - see /assets/screenshots/wireframe
   - it's okay if end webpage doesn't look like wireframe, tlak about it if s o, though

- Main thing is you want a clickable element, doesn't have to be a cookie, can be collect frogs for a pond, animal etc.
- You have two values you'll be playing with, 1. Total cookies 2. Cookies per second 3. Each upgrade should have a price, so you have to pay with cookies to be (your total cookies go down but cookies per second go up by whatever amount you set)
  a. The idea is the more upgrades you buy the less total cookies, But your cookies per second goes up
  b. You can keep it simples:
  c. Have a list of upgrades and the cookie to click
  d. Doesn't have to be a revolutionary concept, high design,
  • 🐿️ As a developer, I want to retrieve upgrade information from an API so that all the developers working on the game can access a single, consistent source of up-to-date information.
  § To build your shop, need to use this API: cookie-upgrade-api.vercel.app/api/upgrades (Joe made it)
  § The API has 10 diff upgrades, just start with one, and stay there if it gets too complex for you, make sure one upgrade works (it make the total cookie count go down, but cookies per second goes up), if you are instead giving toys to your dog, "enhanced oven" name isn't going to makes sense, so keep the values from api upgrades but can rename them (if you're looping through the Api to get the items out, you know how to update the value of a property)
  • 🐿️As a user, I want to be able to purchase upgrades from the shop so that I can enhance my gameplay experience.
  § Make sure the logic works for the user that if they use upgrade
  • 🐿️ As a developer, I want to use functions effectively to keep my code organised and reusable.
  § pko
  • 🐿️ As a user, I’d like the website to respond dynamically so that my interactions with the website are responsive and smooth.
  § Make sure all buttons are working
  • 🐿️ As a user, I want my cookie count and relevant game information to be stored in local storage so that my progress is saved and I can continue playing from where I left off later.
  § Have something like , when the user buy s an upgrade, upgrade cookies per sec, total cookie count goes down, and set local storage so if page is refreshed you get the data back
  • 🐿️ As a user, I want the cookie count to increment automatically and the game state to update each second so that the game progresses even when I’m not actively clicking.
  § We use set interval, it's how you keep the cookies count going higher automatically at regular intervals
  • 🐿️ As a user, I want the game state to be managed every second using setInterval to ensure my progress is saved and the game remains updated.
  § Last two user things are interconnected
  Tip is attempt everything in this user order story, build from the top down,

## Resources

-

## Required (answer these at the least, here)

• 🎯 What requirements did you achieve?
• 🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:
• Requesting feedback about a specific part of your submission.
• What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
• What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
