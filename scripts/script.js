//document ready - go!
$(function () {

  //game  

  const colours = [{
      colourName: `magenta`,
      evenNumber: false,
      oddNumber: true,
      hex: `#e94e9c`,
      cClass: `colour-magenta`
    },
    {
      colourName: `green`,
      evenNumber: false,
      oddNumber: true,
      hex: `#d9e01e`,
      cClass: `colour-green`
    },
    {
      colourName: `teal`,
      evenNumber: true,
      oddNumber: false,
      hex: `#54c4c6`,
      cClass: `colour-teal`
    },
    {
      colourName: `purple`,
      evenNumber: true,
      oddNumber: false,
      hex: `#977dba`,
      cClass: `colour-purple`
    },
  ]

  const array1 = [{
      numberName: 1,
      evenNumber: false,
      oddNumber: true,
      fortune: `Never gonna happen.`,
    },
    {
      numberName: 2,
      evenNumber: true,
      oddNumber: false,
      fortune: `Yes!`,
    },
    {
      numberName: 5,
      evenNumber: false,
      oddNumber: true,
      fortune: `As if!`,
    },
    {
      numberName: 6,
      evenNumber: true,
      oddNumber: false,
      fortune: 'Duh!',
    }
  ]

  const array2 = [{
      numberName: 3,
      evenNumber: false,
      oddNumber: true,
      fortune: `Definitely........NOT!`,
    },
    {
      numberName: 4,
      evenNumber: true,
      oddNumber: false,
      fortune: `Take a chill pill. Ask again later.`,
    },
    {
      numberName: 7,
      evenNumber: false,
      oddNumber: true,
      fortune: `You go girl! Yes!`,
    },
    {
      numberName: 8,
      evenNumber: true,
      oddNumber: false,
      fortune: `All that and a bag of chips.`,
    }
  ]

    // put all of the colors into buttons on the page
    const createColouredDots = function () {
      colours.forEach((colour) => {
        let colourClass = colour.cClass;
        console.log(colourClass);
        //add the html that includes the colours class as well as a data attribute containing the colour's name.
        $('.colour-selection').append(`<div class="colour-swatch ${colourClass}" data-colour="${colour.colourName}"></div>`);
      }); //these brackets are for the colours.forEach(colour) function.
    } // this bracket closes the createColouredDots function



  //user enters their name into a field labled "what is your name?"
  //user enters a question into a field labled "as a question that can be answered by yes or no"
  //user presses "submit".
  //when submit is pressed, values for both of the above variables are stored

  const getNameAndQuestion = function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    // console.log('it worked');

    //storing value for the name entered by the user
    let userName = $('.user-name-form').val();
    // console.log(userName);

    //storing balue for the question entered by the user
    let userQuestion = $('.user-question-form').val();
    // console.log(userQuestion);

    //the users question is repeted back to them in the form of a string at the top of the section
    // turn the user inputs into into html
    const userNameHtml = `<h2 class="user-name">${userName}, you asked: </h2>`;
    const userQuestionHtml = `<h2 class="user-question">${userQuestion}</h2>`;

    //put it in the html on the page
    $('.greeting').append(userNameHtml);
    $('.greeting').append(userQuestionHtml);
    createColouredDots();

  }); //these brackets close the form.on(submit) event
  } //this bracket closes the getNameAndQuestion function

  //run the getNameAndQuestion function
  getNameAndQuestion();

  //the submit button pushes the user down to a new section of the page.
  //WILL ADD LATER.


  //the paperfortune teller appears. the user will be presented with three rounds of options to narrow down their fortune.
  //for the first round, the user is presented with a choice of four colors to choose from.

  //run the colored dots creator function.
  // createColouredDots();

// let selectedColour = "not set by user yet";

const selectedColourChoice = function() {
  //user must click on the swatch of one of the four colours to select it.
  $('.colour-selection').on('click','.colour-swatch', function () {
    //store the users choice in a variable that holds the colour's name
    const selectedColour = $(this).attr(`data-colour`);
    console.log(selectedColour);
    userColour(selectedColour);
    //hide colours once selection has been made.
      $('.colour-selection').hide();
       return selectedColour;
  })
 };

 //run the selectedColourChoiceFunction
 selectedColourChoice();

 //declare variable globally so it can be changed by the userColour function
 let colourChar= "evenOrOdd";

 //user colour function
 const userColour = function(colour) {
   //determine length of function
   const colourCharLength = colour.length;
   if (colourCharLength % 2 === 0) {
     console.log(`it's EVEN!!!!!`);
     colourChar = "even"
   } else {
     console.log(`it's ODD!!!!!`)
     colourChar = "odd"
   }
   console.log(`the colourChar = ${colourChar}`)
   evenOrOdd(colourChar);
 };


let showArray = " ";

//the function determines what array or numbers should be shown based on whether or not 
 const evenOrOdd = function(ColourChar) {
   if (ColourChar === "even") {
console.log('even matches - show array1')
showArray = array1.forEach((item) => {
  $('.first-array-selection').append(`<p class="first-array first-array-even">${item.numberName}</p>`);
})} 

else if (ColourChar === "odd") {
console.log('doesn not match - show array2')
showArray = array2.forEach((item) => {
      $('.first-array-selection').append(`<p class="first-array first-array-odd">${item.numberName}</p>`);

})}}//for evenOrOdd function



/*
//the users question is repeted back to them in the form of a string at the top of the section
// turn the user inputs into into html
const userNameHtml = `<h2 class="user-name">${userName}, you asked: </h2>`;
const userQuestionHtml = `<h2 class="user-question">${userQuestion}</h2>`;

//put it in the html on the page
$('.greeting').append(userNameHtml);
$('.greeting').append(userQuestionHtml);
*/

  // - array1: [1,2,5,6]
  // - array2: [3,4,7,8]
  //the fortune teller always starts with array 1. If the character length of the colour is odd, the user will be presented with array2.
  // If the character length of the colour is even, the user will be presented with array1.
  //the user selects a number from the array they are presented with. the paper fortune teller then alternates arrays as many times as the number selected.
  //if starting on array1 and the selected number is even, present array1 again. if starting on array1 and the selected number is off, present array 2.
  //if starting on array2 and the selected number is even, present array2 again. if starting on array1 and the selected number is off, present array 1.
  //user selects a number from the presented array. this number retrieves the property "answer" associated with it and returns it to the user.
  //The user is presented with the answer beneath their question.
  //At the bottom of the game there is a button called "play again" which clears the selections, brings the user back to the top of the page and restarts the game.






}); //these brackets belong to the document ready function.