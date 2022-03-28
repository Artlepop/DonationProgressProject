var donationGoal = 0;

var progress = 0;
var inputField = document.getElementById('inputField');
var pText = document.getElementById('progressText');
var pBar = document.getElementById('pBar');
var maxWidth = 1552;
pText.innerHTML = '0%';
pBar.style.width = '0px';
var confettiHasGoneOff = false;

function resetProgress()
{
  progress = 0;
  confettiHasGoneOff = false;
  pText.innerHTML = progress + '%';
  pBar.style.width = '0px';
}

function SetDonationGoal()
{
  donationGoal = inputField.value;
}

function Donate(/*donation*/)
{
  if(donationGoal <= 0)
  {
    alert("No Donation Goal Set");
  }
  else
  {
    progress += (inputField.value / donationGoal);
    if(progress >= 1)
  {
    progress = 1;

    if(!confettiHasGoneOff)
    {
      // do this for 30 seconds
var duration = 30 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 100,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 100,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
    confettiHasGoneOff = true;
    }
  }
  var width = Math.round(maxWidth * progress);
  pBar.style.width = width + 'px';
  pText.innerHTML = (progress * 100) + '%';
  }
}

function addPercentage(/*percentageToAdd*/) 
{
  progress += (inputField.value / 100);
  if(progress >= 1)
  {
    progress = 1;

    if(!confettiHasGoneOff)
    {
      // do this for 30 seconds
var duration = 30 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 100,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 100,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
    confettiHasGoneOff = true;
    }
  }
  var width = Math.round(maxWidth * progress);
  pBar.style.width = width + 'px';
  pText.innerHTML = (progress * 100) + '%';
}
