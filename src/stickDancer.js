var StickDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="resources/stick.gif" />');
  var sprite = this.$node;
  var x = left;
  var y = top;
  var dx = 0;
  var dy = 0;
  var groundLevel = top;
  var isJumping = false;
  var oldStep = this.step;

  var handleEnterFrame = function(){
    sprite.css({left: x, top: y});
    x += dx;
    y -= dy;
    if(y > groundLevel && isJumping){
      isJumping = false;
      dy = 0;
      y = groundLevel;
    }else if(isJumping){
      dy -= 1;
    }
  };
  var timer = setInterval (handleEnterFrame, 1000/30);

  this.lineUp = function(){
    clearInterval(timer);
    var styleSettings = {
      left: 50
    };
    this.$node.css(styleSettings);
  };

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    if(!isJumping){
      dy = 25;
      isJumping = true;
    }
  };
  var imgStyleSettings = {
    width: "25%",
    height: "25%"
  };
  this.$node.find("img").css(imgStyleSettings);
};

StickDancer.prototype = new Dancer();

StickDancer.prototype.constructor = StickDancer;
