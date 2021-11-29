// Move between pages
//#region
var updown = document.getElementsByClassName("updown")[0];
var sec1Btn = document.getElementById("sec1-btn");
var sec2Btn = document.getElementById("sec2-btn");
var sec3Btn = document.getElementById("sec3-btn");
var sec4Btn = document.getElementById("sec4-btn");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");

var nav_home = document.getElementById("nav-home");
var nav_about = document.getElementById("nav-about");
var nav_projects = document.getElementById("nav-projects");
var nav_contact = document.getElementById("nav-contact");
var active;
// deneme
const removeCircle = function () {
  for (i = 0; i < updown.children.length; i++) {
    updown.children[i].children[0].classList.remove("fa-dot-circle-o");
  }
};
const addCircle = function (btn) {
  btn.children[0].classList.add("fa-dot-circle-o");
};

sec1Btn.addEventListener("click", function () {
  nav_home.click();
  removeCircle();
  addCircle(sec1Btn);
  // sec1Btn.children[0].classList.add("fa", "fa-dot-circle-o");
});
sec2Btn.addEventListener("click", function () {
  nav_about.click();
  removeCircle();
  addCircle(sec2Btn);
});
sec3Btn.addEventListener("click", function () {
  nav_projects.click();
  removeCircle();
  addCircle(sec3Btn);
});
sec4Btn.addEventListener("click", function () {
  nav_contact.click();
  removeCircle();
  addCircle(sec4Btn);
});
function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.left + rect.width <= windowWidth &&
    rect.top + rect.height <= windowHeight
  );
}

section1.addEventListener("mouseenter", function () {
  active = section1;
  removeCircle();
  addCircle(sec1Btn);
});
section2.addEventListener("mouseenter", function () {
  active = section2;
  removeCircle();
  addCircle(sec2Btn);
});
section3.addEventListener("mouseenter", function () {
  active = section3;
  removeCircle();
  addCircle(sec3Btn);
});
section4.addEventListener("mouseenter", function () {
  active = section4;
  removeCircle();
  addCircle(sec4Btn);
});

window.addEventListener("wheel", function (e) {
  //scrolling down > /// up <
  // if section1 is active
  if (active === section1) {
    if (e.deltaY > 0) {
      nav_about.click();
    }
  }
  //if sec2 is active
  else if (active === section2) {
    if (e.deltaY < 0) {
      nav_home.click();
    } else if (e.deltaY > 0) {
      nav_projects.click();
    }
  } else if (active === section3) {
    if (e.deltaY < 0) {
      nav_about.click();
    } else if (e.deltaY > 0) {
      nav_contact.click();
    }
  } else if (active === section4) {
    if (e.deltaY < 0) {
      nav_projects.click();
    } else if (event.deltaY > 0) {
    }
  }
});

//go to project page on click
project = document.getElementsByClassName("project");
for (let i = 0; i <= project.length - 1; i++) {
  project[i].addEventListener("click", function () {
    window.open("project.html");
  });
}

// deneme
/*
document.addEventListener("mouseover", function (e) {
  if (e.target.id === "section1") {
    upBtn.style.display = "none";
    downBtn.style.display = "inline-block";
    downBtn.onclick = function () {
      section2.scrollIntoView();
    };
  } else if (e.target.id === "section2") {
    upBtn.style.display = "inline-block";
    downBtn.style.display = "inline-block";
    upBtn.onclick = function () {
      section1.scrollIntoView();
    };
    downBtn.onclick = function () {
      section3.scrollIntoView();
    };
  } else if (e.target.id === "section3") {
    upBtn.style.display = "inline-block";
    downBtn.style.display = "inline-block";
    upBtn.onclick = function () {
      section2.scrollIntoView();
    };
    downBtn.onclick = function () {
      section4.scrollIntoView();
    };
  } else if (e.target.id === "section4") {
    upBtn.style.display = "inline-block";
    downBtn.style.display = "none";
    upBtn.onclick = function () {
      section3.scrollIntoView();
    };
  }
  console.log(e.target.id);
});
*/
//#endregion

// MEMBER MODALS
//#region
// Get the modal
var modal = document.getElementById("myModal");
var modalHeader = document.getElementById("mContent");
var modalBody = document.getElementById("mBody");
// Get the buttons that opens the modal
var arifBtn = document.getElementById("arif");
var emelBtn = document.getElementById("emel");
var hilalBtn = document.getElementById("hilal");
var zeynepBtn = document.getElementById("zeynep");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
arifBtn.onclick = function () {
  modalHeader.innerHTML = "<h2>Arif</h2>";
  modalBody.innerHTML =
    "<h2>Arif bir Android developer. </h2> Arif bir Android developer.Arif bir Android developer.Arif bir Android developer.Arif bir Android developer.Arif bir Android developer.Arif bir Android developer.Arif bir Android developer.";
  modal.style.display = "block";
};
emelBtn.onclick = function () {
  modalHeader.innerHTML = "<h2>Emel</h2>";
  modalBody.innerText = "Emel Xamarin çalışıyor.";
  modal.style.display = "block";
};

hilalBtn.onclick = function () {
  modalHeader.innerHTML = "<h2>Hilal</h2>";
  modalBody.innerText = "Hilal full-stack web developer olmaya çalışıyor. ";
  modal.style.display = "block";
};
zeynepBtn.onclick = function () {
  modalHeader.innerHTML = "<h2>Zeynep</h2>";
  modalBody.innerText = "Zeynep Flutter ve Dart çalışıyor.";
  modal.style.display = "block";
};
// close modal on click x
span.onclick = function () {
  modal.style.display = "none";
};

// close modal on click anywhere outside modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//Close modal on esc
window.addEventListener("keyup", function (e) {
  if (e.key === 27 || e.keyCode === 27 || e.which === 27) {
    modal.style.display = "none";
  }
});
//#endregion

//STYLING

//Member boxes mouse leave
var members = document.getElementsByClassName("uye");
for (let i = 0; i < members.length; i++) {
  members[i].addEventListener("mouseleave", function () {
    members[i].style.transition = "linear, 0.5s";
  });
}
//Project boxes mouse leave
var projects = document.getElementsByClassName("project");
for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseleave", function () {
    projects[i].style.transition = "linear, 0.5s";
  });
}

// smooth scroll
//#region

$(document).ready(function () {
  document.documentElement.style.scrollBehavior = "smooth";
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        80,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//#endregion
