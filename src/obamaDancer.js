var ObamaDancer = function(bottom, left, timeBetweenSteps){

  Dancer.call(this, bottom, left, timeBetweenSteps);
  this.$node.append('<img src="resources/dancing_obama.gif" class="obama"/>');
  var oldStep = this.step;
  var that = this;
  this.lineUp = function(){
     this.$node.stop();
     var styleSettings = {
      left: 40
    };
    this.$node.css(styleSettings);
  };

  this.moveRight = function(){
    that.$node.animate({
      left: "+=50"
    }, 500,
  function(){
    that.$node.animate({
      left: "-=50"
    }, 500,
  function(){
    that.moveRight();
  });
  });
  };
  this.moveRight();
};

ObamaDancer.prototype = new Dancer();

ObamaDancer.prototype.constructor = ObamaDancer;
