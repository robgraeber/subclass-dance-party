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

  this.lineUp = function(){
    clearInterval(timer);
    var styleSettings = {
      left: 50
    };
    this.$node.css(styleSettings);
  };

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    if(!isJumping){
      dy = 15;
      isJumping = true;
      console.log(dy);
    }
  };
};

StickDancer.prototype = new Dancer();

StickDancer.prototype.constructor = StickDancer;
