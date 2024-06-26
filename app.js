
function smooths(targetSelector, duration) {
  console.log('Starting smooth scroll function');
  var target = document.querySelector(targetSelector);

  var targetPosition = target.getBoundingClientRect().top 
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;


  function animation(currentTime) {
    var startTime = null;
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
   var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      console.log('Animation completed');
    }
  }
// this ease function if not making noticeable chnage to animatio 
// triend with out by passing distance to scroolto function it works same
function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
  console.log('Animation started');
}
document.querySelector('.start').addEventListener("click", function() {
  smooths(".end", 1000);
});

document.querySelector('.end').addEventListener("click", function() {
  smooths(".start", 1000);
}); 