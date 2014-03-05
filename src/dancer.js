var Dancer = function(bottom, left, timeBetweenSteps){
  this.bottom = bottom;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(bottom, left);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){that.step();}, this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(bottom, left){
  var styleSettings = {
    bottom: bottom,
    left: left
  };
  this.$node.css(styleSettings);
};