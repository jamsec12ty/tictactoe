let currentTurn = "X"; //sets player initial value
let playerOneScore = 0;
let playerTwoScore = 0;
let turnCounter = 0;//
const playerOne = 'X';
const playerTwo = 'O';
let gameIsOver = false; //starting point (game not over when we start game)

$(document).ready(function(){

  console.log('Tic Tac Toe');



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



    //Check if turn caused the game to be won.

  turnCounter += 1; //add 1 to turn counter after each turn
  console.log(turnCounter);

  if (($("#0").html() !== "" && $("#0").html() === $("#1").html() && $("#1").html() === $("#2").html()) ||
     ($("#3").html() !== "" && $("#3").html() === $("#4").html() && $("#4").html() === $("#5").html()) ||
     ($("#6").html() !== "" && $("#6").html() === $("#7").html() && $("#7").html() === $("#8").html()) ||
     ($("#0").html() !== "" && $("#0").html() === $("#3").html() && $("#3").html() === $("#6").html()) ||
     ($("#1").html() !== "" && $("#1").html() === $("#4").html() && $("#4").html() === $("#7").html()) ||
     ($("#2").html() !== "" && $("#2").html() === $("#5").html() && $("#5").html() === $("#8").html()) ||
     ($("#0").html() !== "" && $("#0").html() === $("#4").html() && $("#4").html() === $("#8").html()) ||
     ($("#2").html() !== "" && $("#2").html() === $("#4").html() && $("#4").html() === $("#6").html()))

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

    // document.getElementById("endGame").style.zIndex = "-1";

  } else if(turnCounter === 9){
    console.log("It's a DRAW");
    gameIsOver = true;
    $("#endGame").show();
    $("#drawMsg").show();
    $("#restartButton").show();
  }




  //turn switching code
  // if currentTurn === O (turn just played) then the next "currentTurn = X"
  //else currentTurn === X, then change to currentTurn to "O"
  if (currentTurn === "O") {
    currentTurn = "X";
  } else {
    currentTurn = "O";
  }//else
//

//PLAY AI MOVE HERE
//1. find all available free cells and store in array
//2. choose a random cell from the array and play the computer move into that cells
//3. check again for a winner
//4. switch player back to human

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
