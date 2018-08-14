//user enters their name into a field labled "what is your name?"
//user enters a question into a field labled "as a question that can be answered by yes or no"
//user presses "submit".
//when submit is pressed, values for both of the above variables are stored and the submit button pushes the user down to a new section of the page.
//the users question is repeted back to them in the form of a string at the top of the section: `${userName], you asked '${userQuestion}'.`
//the paperfortune teller appears. the user will be presented with three rounds of options to narrow down their fortune.
//for the first round, the user is presented with a choice of four colors to choose from. user must click on the swatch of one of the four colours to select it.
//the character length of the colour selected indicates how many times the paper fortune teller opens and closes - alternating the following arrays 
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



const colours = [
  magenta,
  green,
  teal {
    evenNumber: true,
    oddNumber: false,
    hex: `#977dba`,
  },
  purple: {
    evenNumber: true,
    oddNumber: false,
    hex: `#977dba`,
  }

]