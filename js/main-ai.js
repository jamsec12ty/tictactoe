let currentTurn = "X"; //sets player initial value
let playerOneScore = 0;
let playerTwoScore = 0;
let turnCounter = 0;//
const playerOne = "X";
const playerTwo = "O";
let gameIsOver = false; //starting point (game not over when we start game)


$(document).ready(function(){

  console.log('Tic Tac Toe');


const checkWin = function(){
  const cell0 = $("#0").html();
  const cell1 = $("#1").html();
  const cell2 = $("#2").html();
  const cell3 = $("#3").html();
  const cell4 = $("#4").html();
  const cell5 = $("#5").html();
  const cell6 = $("#6").html();
  const cell7 = $("#7").html();
  const cell8 = $("#8").html();

    if ((cell0 !== "" && cell0 === cell1 && cell1 === cell2) ||
       (cell3 !== "" && cell3 === cell4 && cell4 === cell5) ||
       (cell6 !== "" && cell6 === cell7 && cell7 === cell8) ||
       (cell0 !== "" && cell0 === cell3 && cell3 === cell6) ||
       (cell1 !== "" && cell1 === cell4 && cell4 === cell7) ||
       (cell2 !== "" && cell2 === cell5 && cell5 === cell8) ||
       (cell0 !== "" && cell0 === cell4 && cell4 === cell8) ||
       (cell2 !== "" && cell2 === cell4 && cell4 === cell6))

    {
      // console.log(currentTurn);
      // console.log("End of Game!");
      if (currentTurn === "X") {
        console.log("player one wins!");
        playerOneScore += 1;
        $().css("playerOneWinMsg");
        $("#pOneWin").show();


      } else {
        console.log("player two wins!");
        playerTwoScore += 1;
        $().css("playerTwoWinMsg");
        $("#pTwoWin").show();
      }

        gameIsOver = true;
        $("#endGame").show();
        $("#restartButton").show();


    } else if(turnCounter === 9){
        console.log("It's a DRAW");
        gameIsOver = true;
        $("#endGame").show();
        $("#drawMsg").show();
        $("#restartButton").show();
    }



};


  // Do something whenever the user clicks on the game board
  // $('#board').click( fn ); <-- shortcut convenience method
  $('.cell').on( 'click', function(ev){
    const activeCell = $(this).attr('id');
    // This code will run whenever the #board element is clicked
    // The function will re-run EACH click

      const contents = $(this).html(); //get contents of cell

      //test if cell contains X or O in it.
      if (contents === "X" || contents === "O" || gameIsOver){
      //leave the function early if the cell is occupied, which prevents the turn taking code and turn switching code from being executed.
      return;

      }// contents checker

    //turn taking code
    $(this).html(currentTurn); //this means we can change the turn, using currentTurn as a starting variable

    turnCounter += 1; //add 1 to turn counter after each turn

    //Check if turn caused the game to be won.

    if (!gameIsOver){
      console.log(gameIsOver)
      checkWin();
    };
    // console.log(turnCounter);



  //turn switching code

  currentTurn = "O";


//PLAY AI MOVE HERE
//1. find all available free cells and store in array

console.log($(".cell"));


let blankCells = []; //create empty array variable as starting point.
let allCells = $(".cell"); // create variable to represent values of all cells.

for(const singleCell of allCells){ //loop through all cells and create an array of the empty cells with no html in them
  if ($(singleCell).html() === "" ){
    blankCells.push(singleCell);// push single cells into blank cells array.
  }
}
console.log(blankCells);


//2. choose a random cell from the array and play the computer move into that cell

let randomNumber = Math.floor(Math.random() * blankCells.length);

console.log(randomNumber);//grabs index of blank cells array.

let randomCell = blankCells[randomNumber];
console.log(randomCell);//reads the contents of blank cells array.

$(randomCell).html("O");

turnCounter += 1;
console.log(turnCounter);
//3. check again for a winner - maybe move winner check code into function
if (!gameIsOver){
  checkWin();
};

//4. switch player back to human

currentTurn = "X";



    // console.log(activeCell);
  });//end click function



  // Do something whenever the user clicks on the restart button
  // $('#restartButton').click( fn ); <-- shortcut convenience method
  $('#restartButton').on( 'click', function(){
    // This code will run whenever the #board element is clicked
    // The function will re-run EACH click
    $(".cell").html("");
    turnCounter = 0;
    gameIsOver = false;
    $("#endGame").hide();
    $("#pOneWin").hide();
    $("#pTwoWin").hide();
    $("#drawMsg").hide();
    $("#restartButton").hide();
    console.log('Restart button clicked!');
  });


}); //end of document ready





// BUT: how then do we find out which SPEFICIC <li> this particular
// event happened to?
// $('li').on('click', function( ev ){
//   console.log('list item clicked');
//   // console.log('target:', ev.target); // <--- vanilla DOM node!
//
//   // #1
//   // Change the contents of the element that was clicked for this event
//   $(ev.target).html('i was clicked');
//
//   // #2
//   // jQuery also uses 'this' to store the target element - but note it's
//   // still a vanilla DOM node, so needs to be passed to $() to become jQuery-compatible
//   $(this).html('i was clicked');
//
// });




// Do something whenever the mouse enters the board, and
// something else when the mouse leaves
// $('#board').hover(
  //   function(){
    //     console.log('mouse entered area');
    //   },
    //   function(){
      //     console.log('mouse left area');
      //   }
      // );
