var StickDancer = function(bottom, left, timeBetweenSteps){

  Dancer.call(this, bottom, left, timeBetweenSteps);
  this.$node.append('<img src="resources/stick.gif" />');
  var sprite = this.$node;
  var x = left;
  var y = bottom;
  var dx = 0;
  var dy = 0;
  var groundLevel = bottom;
  var isJumping = false;
  var oldStep = this.step;

  var handleEnterFrame = function(){
    sprite.css({left: x, bottom: y});
    x += dx;
    y += dy;
    if(y < groundLevel && isJumping){
      isJumping = false;
      dy = 0;
      y = groundLevel;
    }else if(isJumping){
      dy -= 1;
    }
  };
  var timer = setInterval (handleEnterFrame, 1000/30);

  this.removeTimer = function(){
    clearInterval(timer);
  };
  this.lineUp = function(){
    this.removeTimer();
    var styleSettings = {
      left: 50
    };
    this.$node.css(styleSettings);
  };

  this.step = function(){
    oldStep.call(this);
    if(!isJumping){
      dy = 15;
      isJumping = true;
    }
  };
};

StickDancer.prototype = new Dancer();

StickDancer.prototype.constructor = StickDancer;
