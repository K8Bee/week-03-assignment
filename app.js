// console.log("Hello World!");

//what are the basics here to complete the requirements:
//we need the default starting values for cookie total count and cookies per sec (cps)
//there are two ways to do this:
//1st - can have two variables with whatever initial value you want, e.g:
// let cookiecount = 0;
// let cps = 0;
//2nd - can store as properties in an object for tidiness, either way is good:
// const stats = {
//     cookieCount: 0,
//     cps: 0,
// };
// default starting values for total cookie count and cookies per sec (cps)
let totalCookies = 0;
let cps = 0;

function addCookie(){
  totalCookies = totalCookies + 1;
  document.getElementById("total-cookies").innerHTML = totalCookies;
}
//next: we said users need to be able to come back the next day and pick up where they left off
//so you might have some logic here to say:
//if there is data in local storage, update stats with this data, so the user picks it up where they left off - have some logic here to get items from local storge
//keywords are being used ("if", "update" data)

//===================================================================
//next, need the shop upgrades:
//fetch the upgrades from the api
// api url: https://cookie-upgrade-api.vercel.app/api/upgrades
//to create multiple elemnts in a more convenient way, loops are your friend (esp if having more than one upgrade (if have up to ten - will be helped by a loop))
//once fetched, need to create the elements in the DOM to contain the upgrades data:
//to create multiple elements in a more convenient way, use loops for the below 4 statements
//create an element
//assign the value to it's text content
//append it to the DOM
//after you complete this task, you should see the upgrades on your webiste
//fetch data from API - https://cookie-upgrade-api.vercel.app/api/upgrades
//wrangle API data to get just one upgrade for now
async function fetchUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  //   console.log(response);
  const apiData = await response.json();
  //   console.log(apiData.length);
  //you can use the network tab to see if you are actually getting the data - see "fetch" somewhere on it
  const wrangledUpgrade = apiData[""];
  //return wrangledUpgrade so it will happen outside of this block scope?
  return wrangledUpgrade;
  // console.log(wrangledUpgrade);
}

fetchUpgrades();

//to create multiple elements in a more convenient way, loops are your friend (esp if having more than one upgrade (if have up to ten - will be helped by a loop))
//once fetched, need to create the elements in the DOM to contain the upgrades data:
//to create multiple elements in a more convenient way, use loops for the below 4 statements
//create an element
//assign the value to it's text content
//append it to the DOM
//after you complete this task, you should see the upgrades on your webiste

//create loop to use to make the elements for the different upgrades in the shop(the loop is to create several elements more conveniently than making them individually)
//the pseudocode:
// createElement (button?)
// element = text content
// call the shop container  or getElementById and appendChild (append the new btn element to the parent shop container)

//create btn elements in DOM to contain the shop ugrades (all within the shop container in the DOM)
//parameter (upgradeObject)
const shopContainer = document.getElementById("shop-container");
function createUpgradeButtons(upgradeObject) {
  const upgradeButton = document.createElement("button");
  upgradeButton.setAttribute("", ) 
  apiData[].name = upgradeObject;
  apiData[].cost =
  apiData[].increase =
  shopContainer.appendChild(upgradeButton);
}

    // <!-- <button type="button" id="upgrade-button1"></button>
// as function has a parameter, need to give it an argument
// need to declare, then call
fetchUpgrades(createUpgradeButtons);

async function createUpgradeButtonsAndAddSrc



//apiData is the name of the array
//it's index starts at 0 and it's length is 10
//the last index can be represented by the length total -1, e.g. console.log(apiData[apiData-1]); = last upgrade
//if you leave everything blank inside it can be looped through once with a forEach loop to create and fill in all of the upgrades (10)
//=================================
//the interval
//we said the cps are auto meaning once user buys upgrade or if you decide to start with cps set as 1 at the start of game, this interval has to add that vvalue regularly every sec
//interval value either needs to go up for total cookie or cookies per sec
//this interval has to add the value regulary every second:
//in e.g. using variable names (not the object version  - see screen shot)
//code could be if using the variables above (rather than object):
setInterval(function () {
  cookieCount += cps; //clue: what this code is doing is something like: cookieCount = cookieCount + cps
  //this line: update the text content in the DOM with the new values
  //and this line: save the new values in local storage
}, 1000); //the delay
//but if chose the stats object above, as you're accessing that property, it would look something like:
// setInterval(function () {
//   stats.cookieCount += cps;

// }, delay);
//=================================
// after the above blocks, need to create some game logic coding (if you have the shop rendered, the game logic will be much easier, can just write the game logic and put them together)
//when the user clicks on the cookie, the cookieCount value goes up by 1 (this is the first bit of logic you need to build, words are used very carefully here, so the "let cookieCount = 0; will become 1 when the user clicks")
//next step: when the user clicks on the buy button in an upgrade in the shop, the cookie count value goes down (to pay for the price) and the cps value goes up

//you will need functions to contain the game logic, two ways of doing this
//esp to create logic for shop:
//to create logic for the shop, you could have a funciton per item in the shop, function per upgrade (buy oven then logic there, buy grandma then logic there)
// OR could have a reusable function that works for all upgrades, e.g. function called buy upgrades with diff parameters that when attached to a specific upgrade it gets the values for that upgrade specifically, so don't have to write 10 individual functions, you can write one that works with any
//this is harder to code, though, so start with the repetive one, and you may end up finding a way to make the reuse one by doing that anyway

//since we are using local storgae, make sure that the local storage values are updated after the user buys an upgrade OR when the user clicks on the cookie
//so one element in your logic should be the maths, so subtract value from cookie count add value to cps and store the value in local storage (if you don't do that then, the values in your local storage and values in your DOM aren't going to be the same and it'll be chaotic)
//if hard to think, do the logic first, then do local storage at the end
