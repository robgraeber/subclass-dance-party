$(document).ready(function(){
  window.dancers = [];
  var numberBetween = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var floorMin = $(window).height() * 0;
    var floorMax = $(window).height() * 0.08;
    var dancer = new dancerMakerFunction(numberBetween(floorMin,floorMax), numberBetween(0,$(window).width()), Math.random() * 1000);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    if(dancer instanceof ObamaDancer){
      dancer.$node.on("mouseover",function(event){
        dancer.$node.finish();
        dancer.$node.hide( "explode", {pieces: 9 }, 500 );
      });
    }
    if(dancer instanceof HamsterDancer){
      dancer.$node.on("mouseover",function(event){
        dancer.$node.finish();
        dancer.$node.hide("scale", 
          {percent: 25}, 500 );
      });
    }
  });

  $(".lineUpButton").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      dancer.lineUp();
    }
  });

});


