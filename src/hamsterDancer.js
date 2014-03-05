var HamsterDancer = function(bottom, left, timeBetweenSteps){

  Dancer.call(this, bottom, left, timeBetweenSteps);
  this.$node.append('<img src="resources/hamster.gif" />');
  var oldStep = this.step;
  var that = this;
  this.lineUp = function(){
    this.$node.stop();
    this.step = function(){};
     var styleSettings = {
      left: 40
    };
    this.$node.css(styleSettings);
  };
  this.bounce = function(){
      that.$node.animate({
        left: "+=50",
        bottom: "+=80"
      }, 500,
    function(){
      that.$node.animate({
        left: "-=50",
        bottom: "+=80"
      }, 500,
    function(){
      that.bounce();
    });
    });
  };
  this.bounce();
};

HamsterDancer.prototype = new Dancer();

HamsterDancer.prototype.constructor = HamsterDancer;
