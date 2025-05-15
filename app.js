// console.log("Hello World!");

//NOTE cps is cookies just happen every second, this amount per second goes up with an upgrade,

//what are the basics here to complete the requirements:
//we need the default starting values for cookie count and cookies per sec
//so may have two variables here , e.g:
let cookiecount = 0;
let cps = 0;
//or can store as properties in same container for tidiness, either way is good:
// const stats = {
//     cookieCount: 0,
//     cps: 0,
// };

//if there is data in local storage, update stats with this data, so the user picks it up where they left off - have some logic here to get items from local storge
//keywords are being used ("if", "update" data)

//===================================================================
//next
//shop upgrades
//fetch the upgrades from the api
// api url: https://cookie-upgrade-api.vercel.app/ap/upgrades
//to create multiple elemnts in a more convenient way, loops are your friend (esp if having more than one upgrade (if have up to ten - will be helped by a loop))
//create elements in the DOM to contain the upgrades data
//create an element
//assign the value to it's text content
//append it to the DOM
//after you complete this task, you should see the upgrades on your webiste

//=================================
//the interval
//interval value either needs to go up for total cookie or cookies per sec
//this interval has to add the value regulary every second:
//in e.g. using variable names (not the object version  - see screen shot)
setInterval(function () {
  cookieCount += cps;
  //update the text content in the DOM
}, 1000);

//=================================
// after the above blocks, go to game logic coding (if you have the shop rendered, the game logic will be much easier, can just write the game logic and put them together)
//when the user clicks on the cookie, the cookieCount value goes up by 1 (this is the first bit of logic you need to build, words are used very carefully here)
//next step: when the user clicks on the buy button in an upgrade in the shop, the cookie count value goes down (to pay for the price) and the cps value goes up

//you will need functions to contain the game logic, two ways of doing this
//to create logic for shop:
// function per upgrade (buy oven then logic there, buy grandma then logic there)
// Or could have a reusable function that works for all upgrades, e.g. funciton called buy upgrades with diff paraameters when touched with specific upgrade it works with any
//this is harder to code, though, so start with the repetive one, and you may end up fidning a way to make the reuse one by doing that anyway

//since we are using local storgae, make sure that the local storage values are updated after the user buys an upgrade
//so one element in local storage (subtract value from cookie count, and store the value in local storage, if you don't do that now, the values in your local storage won't be helpful )

//if hard to think, do the logic first, then local storage at the end
