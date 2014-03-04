$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});
$(".lineUpButton").on("click", function(event){
  console.log("LINE UP!!");
  //magic happens here
  for(var i = 0; i < window.dancers.length; i++){
    var dancer = window.dancers[i];
    dancer.lineUp();
  }
});

// var makeBlinkyDancer = function(top, left, timeBetweenSteps){

//   return new BlinkyDancer(top, left, timeBetweenSteps);
// };

// var makeChameleonDancer = function(top, left, timeBetweenSteps){

//   return new ChameleonDancer(top, left, timeBetweenSteps);
// };

// var makeBreakDancer = function(top, left, timeBetweenSteps){

//   return new BreakDancer(top, left, timeBetweenSteps);
// };

var makeObamaDancer = function(top, left, timeBetweenSteps){
  return new ObamaDancer(top, left, timeBetweenSteps);
};

var makeStickDancer = function(top, left, timeBetweenSteps){

  return new StickDancer(top, left, timeBetweenSteps);
};

var makeHamsterDancer = function(top, left, timeBetweenSteps){

  return new HamsterDancer(top, left, timeBetweenSteps);
};
