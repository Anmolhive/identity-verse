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
        [0, 1000],
        {
            767: [0, 200],
            1400: [0, 1000],
        } // Scroll range
        
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

  lax.addElements(
    ".page-header",
    {
      scrollY: {
        translateY: [
          [0, 500],
          {
            767: [0, 0],
            1400: [0, 30],
          },
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
};
