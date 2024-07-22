//MOBILE MENU
const nav = document.querySelector(".section-1 ul");
const mobile = document.querySelector(".fa-bars");

function toggle() {
  if (nav.classList.contains("active")) {
    mobile.classList.replace("fa-times", "fa-bars"); //TOGGLE FONT AWESOME ICON (BARS AND X)
    document.documentElement.style.overflowY = "initial";
  } else {
    mobile.classList.replace("fa-bars", "fa-times");
    document.documentElement.style.overflowY = "hidden"; //WHEN IN MOBILE MENU DISABLE SCROLLING
  }
  nav.classList.toggle("active");
}

//TURN OFF MOBILE NAV IF RESIZED BIGGER THAN MOBILE SCREEN (IF ITS OPENED)
function closeMobile() {
  if (window.screen.width >= 970) {
    nav.classList.remove("active");
    mobile.classList.replace("fa-times", "fa-bars");
    document.documentElement.style.overflowY = "initial";
  }
}

//EVENT LISTENERS FOR MOBILE MENU
mobile.addEventListener("click", toggle);
window.addEventListener("resize", closeMobile);

//SROLLING FUNCTIONS FOR NAV
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollTopButton = document.querySelector(".arrow-up i");
const scrollTopButtonBorder = document.querySelector(".arrow-up");

scrollTopButtonBorder.addEventListener("click", () => {
  // THE SCROLL TO TOP BUTTON (ARROW-UP)
  scrollTopButton.classList.add("arrow-up-clicked");
  scrollToTop();
  scrollTopButton.onanimationend = () => {
    //THE ANIMATION CHECK SCSS
    scrollTopButton.classList.remove("arrow-up-clicked");
  };
});

function closeMobileAfterSection() {
  if (window.screen.width <= 970) {
    document.documentElement.style.overflowY = "initial";
    nav.classList.remove("active");
    mobile.classList.replace("fa-times", "fa-bars");
  }
}

const aboutSection = document.querySelector(".section-2");
const scrollToAbout = () => {
  closeMobileAfterSection(); //CLOSE THE NAV IF IN MOBILE AFTER A LINK IS PRESSED
  aboutSection.scrollIntoView({ behavior: "smooth" });
};
const menuSection = document.querySelector(".section-3");
const scrollToMenu = () => {
  menuSection.scrollIntoView({ behavior: "smooth" });
  closeMobileAfterSection();
};
const chefSection = document.querySelector(".section-4");
const scrollToChefs = () => {
  chefSection.scrollIntoView({ behavior: "smooth" });
  closeMobileAfterSection();
};
const footerSection = document.querySelector("footer");
const scrollToFooter = () => {
  footerSection.scrollIntoView({ behavior: "smooth" });
  closeMobileAfterSection();
};

//CHNAGE ARROW COLOR ON PICTURES
const chefsImages = document.querySelector(".section-4-content-items");
const section5 = document.querySelector(".section-5");
const section2Image = document.querySelector(".change-arrow-color");

const options = {
  rootMargin: "-90% 0px 0% 0px", //ROOT MARGIN
  threshold: [0],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //TRUE IF ARROW IS ON TOP OF QUERYSELECTORS
      scrollTopButton.style.color = "rgb(255, 102, 46)"; //orange
      scrollTopButtonBorder.style.borderColor = "gray";
    } else {
      scrollTopButton.style.color = "rgb(44, 44, 44)"; //black
      scrollTopButtonBorder.style.borderColor = "rgb(44, 44, 44)"; //black
    }
  });
}, options);
observer.observe(chefsImages);
observer.observe(section5);

//ONLY OBSERVE IF <768px (section2Image)
let section2ImageObserved = true;
const checkSection2Observer = () => {
  if (window.screen.width < 768) {
    if (section2ImageObserved) {
      observer.unobserve(section2Image);
      section2ImageObserved = false;
      scrollTopButton.style.color = "rgb(44, 44, 44)"; //black
      scrollTopButtonBorder.style.borderColor = "rgb(44, 44, 44)"; //black
    }
  } else {
    if (!section2ImageObserved) {
      observer.observe(section2Image);
      section2ImageObserved = true;
    }
  }
};

observer.observe(section2Image);
checkSection2Observer();
window.addEventListener("resize", checkSection2Observer);
