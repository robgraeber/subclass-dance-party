var HamsterDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
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
          top: y + top
        }, 30);
      }else if(x >= bounce/2-x){
        //falling
        y = bounce/2-x;
        this.$node.animate({
          left: x + left,
          top: y + top
        }, 30);
      }
    }
  };

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    this.bounce();
  };
  var imgStyleSettings = {
    width: "25%",
    height: "25%"
  };
  this.$node.find("img").css(imgStyleSettings);
};

HamsterDancer.prototype = new Dancer();

HamsterDancer.prototype.constructor = HamsterDancer;
