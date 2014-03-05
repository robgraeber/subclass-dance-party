var HamsterDancer = function(bottom, left, timeBetweenSteps){

Dancer.call(this, bottom, left, timeBetweenSteps);
this.$node.append('<img src="resources/hamster.gif" />');
var oldStep = this.step;

this.lineUp = function(){
  this.$node.finish();
  this.step = function(){};
   var styleSettings = {
    left: 40
  };
  this.$node.css(styleSettings);
};

this.bounce = function(){
  var bounce = 50;
  var y;
  for(var x = 0; x < bounce; x++){
    if(x < bounce/2-x){
      //rising
      y = x/2;
      this.$node.animate({
        left: x + left,
        bottom: y + bottom
      }, 30);
    }else if(x >= bounce/2-x){
      //falling
      y = bounce/2-x;
      this.$node.animate({
        left: x + left,
        bottom: y + bottom
      }, 30);
    }
  }
};

  this.step = function(){
    oldStep.call(this);
    this.bounce();
  };
};

HamsterDancer.prototype = new Dancer();

HamsterDancer.prototype.constructor = HamsterDancer;
