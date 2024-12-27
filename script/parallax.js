window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".selector", {
    scrollY: {
      translateY: [
        [0, 500], // Scroll range
        [0, 300], // Translation range
      ],
      scale: [
        [0, 500], // Scroll range
        [1, 1.2], // Scale range
      ],
    },
  });
};
