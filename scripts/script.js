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
      fortune: `Never gonna happen.`,
    },
    {
      numberName: 2,
      fortune: `Yes!`,
    },
    {
      numberName: 5,
      fortune: `As if!`,
    },
    {
      numberName: 6,
      fortune: 'Duh!',
    }
  ]

  const array2 = [{
      numberName: 3,
      fortune: `Definitely........NOT!`,
    },
    {
      numberName: 4,
      fortune: `Take a chill pill. Ask again later.`,
    },
    {
      numberName: 7,
      fortune: `You go girl! Yes!`,
    },
    {
      numberName: 8,
      fortune: `All that and a bag of chips.`,
    }
  ]

  const combinedArray = [{
      numberName: 1,
      fortune: `Never gonna happen.`,
    },
    {
      numberName: 2,
      fortune: `Yes!`,
    },
    {
      numberName: 3,
      fortune: `Definitely........NOT!`,
    }, {
      numberName: 4,
      fortune: `Take a chill pill. Ask again later.`,
    },
    {
      numberName: 5,
      fortune: `As if!`,
    }, {
      numberName: 6,
      fortune: 'Duh!',
    },
    {
      numberName: 7,
      fortune: `You go girl! Yes!`,
    },
    {
      numberName: 8,
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

      //ensure that the html being added below, doesnt continously add to the page when the submit button is pressed.
      $('.greeting').empty();
      $('.colour-selection').empty();

      //the users question is repeted back to them in the form of a string at the top of the section
      // turn the user inputs into into html
      const userNameHtml = `<h2 class="user-name">${userName}, you asked: </h2>`;
      const userQuestionHtml = `<h2 class="user-question">${userQuestion}</h2>`;

      //put it in the html on the page
      $('.greeting').html(userNameHtml);
      $('.greeting').html(userQuestionHtml);
      $('.colour-selection').append(`<h3 class="instructions">First, select a colour:</h3>`);

      createColouredDots();

    }); //these brackets close the form.on(submit) event
  } //this bracket closes the getNameAndQuestion function

  //run the getNameAndQuestion function
    getNameAndQuestion();

  //the submit button pushes the user down to a new section of the page.
  //WILL ADD LATER.


  //the paperfortune teller appears. the user will be presented with three rounds of options to narrow down their fortune.
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
    $('.first-array-selection').append(`<h3 class="instructions">Now, select a number:</h3>`);
    if (ColourChar === "even") {
      console.log('even matches - show array1')
      showArray = array1.forEach((item) => {
        $('.first-array-selection').append(`<p class="first-array first-array-even">${item.numberName}</p>`);
      })
    } else if (ColourChar === "odd") {
      console.log('doesn not match - show array2')
      showArray = array2.forEach((item) => {
        $('.first-array-selection').append(`<p class="first-array first-array-odd">${item.numberName}</p>`);
      })
    }
  } //for evenOrOdd function


  //the user selects a number from the array they are presented with.

  const selectedFirstNumberChoice = function () {
    //user must click on the number to select it.
    $('.first-array-selection').on('click', '.first-array', function () {
      //store the users choice in a variable that holds the number's value
      let selectedFirstNumber = $(this.innerHTML);
      selectedFirstNumber = selectedFirstNumber.selector;
      console.log(selectedFirstNumber);
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
    let userFirstNumber = parseInt(userFirstNumberString);
    // console.log(userFirstNumber);
    //show instructions
    $('.second-array-selection').append(`<h3 class="instructions">Pick a final number:</h3>`);
    //show second round of arrays based on conditions met.
    if (userFirstNumber === 1 || userFirstNumber === 5 || userFirstNumber === 4 || userFirstNumber === 8) {
      console.log(`you're going to see array2`);
      showArray = array2.forEach((item) => {
        $('.second-array-selection').append(`<p class="second-array">${item.numberName}</p>`);
      })
    } else {
      //show array1
      console.log(`you're going to see array1`)
      showArray = array1.forEach((item) => {
        $('.second-array-selection').append(`<p class="second-array">${item.numberName}</p>`);
      })
    }
  }

  const selectedSecondNumberChoice = function () {
    //user must click on the number to select it.
    $('.second-array-selection').on('click', '.second-array', function () {
      //store the users choice in a variable that holds the number's value
      let selectedSecondNumber = $(this.innerHTML);
      selectedSecondNumber = selectedSecondNumber.selector;
      //verify selectedSecondNumber picked up the innerHTML value by logging it to the console.
      console.log(selectedSecondNumber);
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
    if (finalSelection == 1) {
      console.log(combinedArray[0].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[0].fortune}</h3>`);

    } else if (finalSelection == "2") {
      console.log(combinedArray[1].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[1].fortune}</h3>`);

    } else if (finalSelection == "3") {
      console.log(combinedArray[2].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[2].fortune}</h3>`);

    } else if (finalSelection == "4") {
      console.log(combinedArray[3].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[3].fortune}</h3>`);

    } else if (finalSelection == "5") {
      console.log(combinedArray[4].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[4].fortune}</h3>`);

    } else if (finalSelection == "6") {
      console.log(combinedArray[5].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[5].fortune}</h3>`);

    } else if (finalSelection == "7") {
      console.log(combinedArray[6].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[6].fortune}</h3>`);

    } else {
      console.log(combinedArray[7].fortune);
      $('.your-fortune').append(`<h3 class="fortune">${combinedArray[7].fortune}</h3>`);
    } //this bracket belongs to the  final else 

  }; //this bracket belongs to the displayFortune function



  //At the bottom of the game there is a button called "play again" which clears the selections, brings the user back to the top of the page and restarts the game.






}); //these brackets belong to the document ready function.