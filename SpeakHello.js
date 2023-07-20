(function (window) {
  var helloSpeaker = {}; // Create an object to attach the "speak" method to

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose the 'helloSpeaker' object to the global scope
})(window);
