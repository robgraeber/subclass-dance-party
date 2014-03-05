var ObamaDancer = function(bottom, left, timeBetweenSteps){

  Dancer.call(this, bottom, left, timeBetweenSteps);
  this.$node.append('<img src="resources/dancing_obama.gif" class="obama"/>');
  var oldStep = this.step;

  this.lineUp = function(){
     this.$node.finish();
     var styleSettings = {
      left: 40
    };
    this.$node.css(styleSettings);
  };

  this.moveLeft = function(){
    this.$node.animate({
      left: "-=50"
    }, 500);
  };

  this.moveRight = function(){
    this.$node.animate({
      left: "+=50"
    }, 500);
  };

  this.step = function(){
    oldStep.call(this);
    this.moveLeft();
    this.moveRight();
  };
};

ObamaDancer.prototype = new Dancer();

ObamaDancer.prototype.constructor = ObamaDancer;
