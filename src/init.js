$(document).ready(function(){
  window.dancers = [];
  var numberBetween = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  var opacityCheck = function(){
    for(var i = window.dancers.length-1; i >= 0; i--){
      var dancerY = window.dancers[i].$node.css("bottom").replace(/[^-\d\.]/g, '');
      if(window.dancers[i] instanceof HamsterDancer){
        var opacity = ($('body').height() - dancerY)/$('body').height();
        window.dancers[i].$node.css({opacity: opacity});
      }
      if(dancerY > $('body').height()){
        window.dancers[i].$node.remove();
        window.dancers.splice(i,1);
      }
    }
  };
  opacityCheck();
  setInterval(opacityCheck,1000/60);


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
        dancer.$node.stop();
        dancer.$node.hide( "explode", {pieces: 9 }, 500 );
      });
    }
    if(dancer instanceof StickDancer){
      dancer.$node.on("mouseover",function(event){
        dancer.removeTimer();
        dancer.$node.hide( "explode", {pieces: 9 }, 500 );
      });
    }

    if(dancer instanceof HamsterDancer){
      dancer.$node.on("click",function(event){
        dancer.$node.stop();
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


