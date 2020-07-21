
// const winCombo = [
//
// ]
$(document).ready(function(){

  console.log('Tic Tac Toe');



  // Do something whenever the mouse enters the board, and
  // something else when the mouse leaves
  $('#board').hover(
    function(){
      console.log('mouse entered area');
    },
    function(){
      console.log('mouse left area');
    }
  );

  // Do something whenever the user clicks on the game board
  // $('#board').click( fn ); <-- shortcut convenience method
  $('.cell').on( 'click', function(ev){
    const activeCell = $(this).attr('id');
    // This code will run whenever the #board element is clicked
    // The function will re-run EACH click
    $(ev.target).html('X');
    console.log(activeCell);
  });



  // Do something whenever the user clicks on the restart button
  // $('#restartButton').click( fn ); <-- shortcut convenience method
  $('#restartButton').on( 'click', function(){
    // This code will run whenever the #board element is clicked
    // The function will re-run EACH click
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
