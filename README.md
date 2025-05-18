# week-03-assignment

A cookie clicker using JavaScript

## Plan

1. Do GitHub branch process
2. make a wireframe, look at examples and user stories below
   - it's okay if end webpage doesn't look like wireframe, talk about it if so, though

- 1. Have a clickable img

2. And have two values to play with:
1. Total cookies
   a. When you click on the clickable element (cookie) you get 1 cookie into e.g. the jar, if you keep clicking, the total value goes up by one each click
1. Cookies per second
   a. As well as the total amount, you'll have an automatic value that will add cookies every second (where you don't have to keep clicking with cursor)
   i. How you get the cps value to go up is to buy upgrades in your store
   ii. The way the upgrades work is, each should have a price, e.g. "15 cookies", so you'd have to pay 15 cookies (of your total cookies) to get the upgrade, but that means your cps goes up by e.g. 10 or 2, meaning cps becomes 10 or 2
1. Make it responsive and accessible
1. Save the pages score in the pages reset, so when you refresh, the score appears again

• Event Listeners
• DOM manipulation
• Local storage
• Fetching data
• setInterval
• CSS Layout Tools: Flexbox and Grid

1. Get a cookie image (source it and possible one with animation would be helpful)(you do know from demo how to update a value from an api data property - change name to tree thing)
2. Build for phone in mind first (with responsiveness for desktop (media query) test on phone as well
3. Way to change browser view settings to phone?
4. Make the upgrade shop (can just have one upgrade do that via JS before doing loop, to see it on webpage)
5. Html a shop container
   a. Html the container div to have 10 separate sections, each with x3 p tags for: name, cost, increase, and space for a button within (or make the button in JS with these three text properties)
6. Use api data to make and append button upgrade to shop container
7. Make the total cookies go up when image is clicked (can make the image a button)
8. Make the cps go up from the first upgrade and at the same time make the upgrade decrease the total cookies by the specified amount
9. Implement event listeners to handle user interactions.
   i. Clickable image needs one
   ii. Upgrade button(s) need one?
10. If there're buttons, when user clicks on them, make sure they're working, make sure don't have buttons that don’t do anything
11. Use local storage to save and restore the cookie count and relevant game information.
12. You might have some kind of logic related to local storage set item, get item, might have something like when the user buys an upgrade update the cps take value from the cookie count and set items' upgrades in local storage
13. OR, when user clicks on the cookie, update value of cookie count but also save that value in local storage, so if you refresh you get that data
14.
15. Save game progress and update the DOM with this info/ data/ value

- draw on:working with objects and arrays, using loops, setting up event listeners, and manipulating the DOM.

## Wireframe

- see /assets/screenshots/wireframe

## Resources

- Image https://www.vecteezy.com/png/57190262-delicious-pistachio-cookie-with-sea-salt-and-chocolate-perfect-for-food-blogs
- Help from classmate Connor Mc' with: "const value = Number(Value From Local Storage)"

## Required (answer these at the least, here)

- What requirements did you achieve?
- Were there any requirements or goals that you were unable to achieve?
- If so, what was it that you found difficult about these tasks?
  Optional
  (answer these if poss)
- add any other reflections you would like to share about your submission, for example:
  • Requesting feedback about a specific part of your submission.
  • What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
  • What errors or bugs did you encounter while completing your assignment? How did you solve them?
  What went really well and what could have gone better?
