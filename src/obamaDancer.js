var ObamaDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="resources/dancing_obama.gif" />');
  var oldStep = this.step;

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    obamaMoves();
  };
  var spanStyleSettings = {
    border: "none"
  };
  var imgStyleSettings = {
    width: "25%",
    height: "25%"
  };
  this.$node.css(spanStyleSettings);
  this.$node.find("img").css(imgStyleSettings);
};

ObamaDancer.prototype = new Dancer();

ObamaDancer.prototype.constructor = ObamaDancer;
