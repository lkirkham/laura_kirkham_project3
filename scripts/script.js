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
    },
    {
      numberName: 2,
    },
    {
      numberName: 5,
    },
    {
      numberName: 6,
    }
  ]

  const array2 = [{
      numberName: 3,
    },
    {
      numberName: 4,
    },
    {
      numberName: 7,
    },
    {
      numberName: 8,
    }
  ]

  const combinedArray = [{
      numberName: 1,
      fortune: `Never gonna happen.`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/dc-no.gif" alt="dawsons creek no"</figure>`
    },
    {
      numberName: 2,
      fortune: `Can't tell. Maybe...`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/maybe.gif" alt="wynona ryder from the heathers saying maybe"</figure>`
    },
    {
      numberName: 3,
      fortune: `Yes`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/yeah-ok.gif" alt="Dionne from clueless saying "Yeah Okay"</figure>`
    }, {
      numberName: 4,
      fortune: `No, shut it down.`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/sbtb-shut-it-down.gif" alt="Saved by the bell shut it down"</figure>`
    },
    {
      numberName: 5,
      fortune: `As if!`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/as-if-clueless.gif" alt="Cher from clueless saying as if"</figure>`
    }, 
    {
      numberName: 6,
      fortune: 'Duh!',
      fortuneGif: `<figure class="fortune-result"><img src="assets/duh.gif" alt="michelle tanner duh"</figure>`
    },
    {
      numberName: 7,
      fortune: `No...`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/no-way-clueless.gif" alt="Cher from clueless saying No Way"</figure>`
    },
    {
      numberName: 8,
      fortune: `Yes!`,
      fortuneGif: `<figure class="fortune-result"><img src="assets/thumbs-up-clueless.gif" alt="travis saying two enthusiastic thumbs up"</figure>`
    }
  ]

  // put all of the colors into buttons on the page
  const createColouredDots = function () {
    colours.forEach((colour) => {
      let colourClass = colour.cClass;
      console.log(colourClass);
      //add the html that includes the colours class as well as a data attribute containing the colour's name.
      $('.colour-game-box-array').append(`<div class="colour-swatch ${colourClass}" data-colour="${colour.colourName}"></div>`);
    }); //these brackets are for the colours.forEach(colour) function.
  } // this bracket closes the createColouredDots function


  // start game
  const startGame = function () {
    // note: this is a little bit sticky - i've been able to make it work but it takes a few clicks... why is that?
$('header').on('click', '.inside-SVG', function () {
      $('.inside-SVG').css({
        "animation-duration": ".25s",
        "animation-timing-function": "linear",
          "animation-iteration-count": "3",
          "animation-direction": "normal",
          "animation-name": "spin",
      });
            $('html, body').stop(true, true).delay(300).animate({
              scrollTop: $('#form').offset().top
            }, 500, 'linear');
    }) //these brackets close the event .on(click, function(){})
  }; //these  brackets close the function startGame()

  // run the start game function
  startGame();


  //user enters their name & question and presses submit
  //when submit is pressed, values for both of the above variables are stored

  const getNameAndQuestion = function () {
    $('form').on('submit', function (event) {
      event.preventDefault();
      // console.log('it worked');

      //storing value for the name entered by the user
      let userName = $('.user-name-form').val();
      //capitalize the first letter of the string
      userName = userName.substr(0, 1).toUpperCase() + userName.substr(1);
      // console.log(userName);

      //storing balue for the question entered by the user
      let userQuestion = $('.user-question-form').val();
      //capitalize the first letter of the string
      userQuestion = userQuestion.substr(0, 1).toUpperCase() + userQuestion.substr(1);
      // console.log(userQuestion);

      //ensure that the html being added below, doesnt continously add to the page when the submit button is pressed.
      $('.greeting:first-child').empty();
      $('.colour-selection').empty();

      //the users question is repeted back to them in the form of a string at the top of the section
      // turn the user inputs into into html
      const userNameHtml = `<h2 class="user-name">${userName},<span class="filler"> you asked:</span></h2>`;
      const userQuestionHtml = `<h2 class="user-question">${userQuestion}</h2>`;

      //put it in the html on the page
      $('.greeting').removeClass("hide");
      $('.greeting').append(`<div id="top-of-game" class="wrapper"></div>`);
      $('.greeting .wrapper').append(userNameHtml);
      $('.greeting .wrapper').append(userQuestionHtml);

      $('html, body').animate({
         scrollTop: $('#greeting').offset().top
        }, 500, 'linear');

      $('.colour-selection').html(`<div class="colour-game-box"></div>`);
      $('.colour-game-box').append(`<figure class="game-gif"><img src="assets/hey-arnold.gif" alt="Gif of Hey Arnold cartoon using a Cootie Catcher"></figure><h3 class="instructions">First, select a colour:</h3>`);
      $('.colour-game-box').append(`<div class="colour-game-box-array"></div>`);
      createColouredDots();

    }); //these brackets close the form.on(submit) event
  } //this bracket closes the getNameAndQuestion function

  //run the getNameAndQuestion function
  getNameAndQuestion();


  //the user will be presented with three rounds of options to narrow down their fortune.
  //for the first round, the user is presented with a choice of four colors to choose from.


  const selectedColourChoice = function () {
    //user must click on the swatch of one of the four colours to select it.
    $('.colour-selection').on('click', '.colour-swatch', function () {
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
  let colourChar = "evenOrOdd";

  //user colour function
  const userColour = function (colour) {
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
  const evenOrOdd = function (ColourChar) {
    $('.first-array-selection').append(`<div class="first-array-game-box"></div>`);
    $('.first-array-game-box').append(`<figure class="game-gif"><img src="assets/hey-arnold.gif" alt="Gif of Hey Arnold cartoon using a Cootie Catcher"></figure><h3 class="instructions">Now, select a number:</h3>`);
    $('.first-array-game-box').append(`<div class="first-array-game-box-array"></div>`);
    if (ColourChar === "even") {
      console.log('even matches - show array1')
      showArray = array1.forEach((item) => {
        $('.first-array-game-box-array').append(`<div class="num-container num-container-${item.numberName}"><p class="first-array first-array1">${item.numberName}</p></div>`);
      })
    } else if (ColourChar === "odd") {
      console.log('doesn not match - show array2')
      showArray = array2.forEach((item) => {
        $('.first-array-game-box-array').append(`<div class="num-container num-container-${item.numberName}"><p class="first-array first-array2">${item.numberName}</p></div>`);
      })
    }
  } //for evenOrOdd function


  //the user selects a number from the array they are presented with.

  const selectedFirstNumberChoice = function () {
    //user must click on the number to select it.
    $('.first-array-selection').on('click', '.num-container', function () {
      //store the users choice in a variable that holds the number's value
      let selectedFirstNumber = this.innerText;
      // selectedFirstNumber = selectedFirstNumber;
      console.log(this.innerText);
      //run function to produce second round of arrays based on the choice of the first round of arrays
      showSecondRoundOfArrays(selectedFirstNumber);
      //hide first number array once selection has been made.
      $('.first-array-selection').hide();
      return selectedFirstNumber;
    })
  };

  selectedFirstNumberChoice();

  //if the number is even, show the same array. If the number is odd, show the other array.
  const showSecondRoundOfArrays = function (userFirstNumberString) {
    // convert the string to a number so it can be evaluated
    let userFirstNumber = userFirstNumberString;
    console.log(userFirstNumber);
    $('.second-array-selection').append(`<div class="second-array-game-box"></div>`);
    //show instructions
    $('.second-array-game-box').append(`<figure class="game-gif"><img src="assets/hey-arnold.gif" alt="Gif of Hey Arnold cartoon using a Cootie Catcher"></figure><h3 class="instructions">Select a final number:</h3>`);
    $('.second-array-game-box').append(`<div class="second-array-game-box-array"></div>`);

    //show second round of arrays based on conditions met.
    if (userFirstNumber == 1 || userFirstNumber == 5 || userFirstNumber == 4 || userFirstNumber == 8) {
      console.log(`you're going to see array2`);
      showArray = array2.forEach((item) => {
        $('.second-array-game-box-array').append(`<div class="num-container2 num-container2-${item.numberName}"><p class="second-array second-array2">${item.numberName}</p></div>`);
      })
    } else {
      //show array1
      console.log(`you're going to see array1`)
      showArray = array1.forEach((item) => {
        $('.second-array-game-box-array').append(`<div class="num-container2 num-container2-${item.numberName}"><p class="second-array second-array1">${item.numberName}</p></div>`);
      })
    }
  }

  const selectedSecondNumberChoice = function () {
    //user must click on the number to select it.
    $('.second-array-selection').on('click', '.num-container2', function () {
      //store the users choice in a variable that holds the number's value
      let selectedSecondNumber = this.innerText;
      //verify selectedSecondNumber picked up the innerHTML value by logging it to the console.
      console.log(`the selected second number is ${selectedSecondNumber}`);
      //run function to display fortune
      $('.second-array-selection').hide();
      displayFortune(selectedSecondNumber);
      //hide second number array once selection has been made.
    })
  };
  selectedSecondNumberChoice();

  const displayFortune = function (finalSelection) {
    //verify that the selectedSecondNUmber variable has been passed as "finalSelection"
    console.log(`the final selected number is ${finalSelection}`);
    $('.your-fortune').append(`<div class="your-fortune-results-box"></div>`);
    if (finalSelection == 1) {
      console.log(combinedArray[0].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[0].fortuneGif}`);

    } else if (finalSelection == 2) {
      console.log(combinedArray[1].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[1].fortuneGif}`);

    } else if (finalSelection == 3) {
      console.log(combinedArray[2].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[2].fortuneGif}`);

    } else if (finalSelection == 4) {
      console.log(combinedArray[3].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[3].fortuneGif}`);

    } else if (finalSelection == 5) {
      console.log(combinedArray[4].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[4].fortuneGif}`);

    } else if (finalSelection == 6) {
      console.log(combinedArray[5].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[5].fortuneGif}`);

    } else if (finalSelection == 7) {
      console.log(combinedArray[6].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[6].fortuneGif}`);

    } else {
      console.log(combinedArray[7].fortune);
      $('.your-fortune-results-box').append(`${combinedArray[7].fortuneGif}`);
    } //this bracket belongs to the  final else 
    $('.your-fortune-results-box').append(`<div class="restart-box"></div>`);
    $('.restart-box').append(`<button type="submit" class="btn btn-reset">Ask Again</button>`);
  }; //this bracket belongs to the displayFortune function



  //At the bottom of the game there is a button which clears the selections, brings the user back to the top of the page and restarts the game.



    const askAgain = function() {
        $('.your-fortune').on('click', function () {
              //reload the page
              location.reload(true);     
        });
      }
//run the askAgain() function
      askAgain();

}); //these brackets belong to the document ready function.
