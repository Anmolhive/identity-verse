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
        ["elCenterY", "elOutY"], // Scroll range
        ["elCenterY", "screenHeight"], // Translation range
      ],
    },
  });
  lax.addElements(".slide-left", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"], // Scroll range
        [800, 0], // Translation range
      ],
    },
  });
  lax.addElements(".slide-right", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"], // Scroll range
        [-800, 0], // Translation range
      ],
    },
  });

  lax.addElements(".page-header", {});

  if (window.innerWidth > 767) {
    lax.addElements(
      ".page-header",
      {
        scrollY: {
          translateY: [
            [0, 500], // Scroll range
            [0, 30], // Translation range
          ],
        },
      },
      {
        onUpdate: function (driverValues, domElement) {
          const scrollY = driverValues.scrollY[0];

          if (scrollY > 200) {
            domElement.classList.add("bg-header");
          } else {
            domElement.classList.remove("bg-header");
          }
        },
      }
    );
  }
};
