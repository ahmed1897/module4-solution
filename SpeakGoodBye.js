(function (window) {
  var byeSpeaker = {}; // Create an object to attach the "speak" method to

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose the 'byeSpeaker' object to the global scope
})(window);
