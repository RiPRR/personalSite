$(document).ready(function () {
  localStorage.setItem("tab", "#homePage");
  document.getElementById("projectPage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("blogPage").style.display = "none";
});

$("#homeBttn").click(function () {
  popIn("#homePage");
});

$("#projects").click(function () {
  popIn("#projectPage");
});

$("#blog").click(function () {
  popIn("#blogPage");
});

$("#about").click(function () {
  popIn("#aboutPage");
});

let descriptors = document.getElementsByClassName("descriptor");
function deRender(target) {
  for (let descriptor of descriptors) {
    $(descriptor).animate({ opacity: ".1" }, 120)
    $(descriptor)
      .promise()
      .done(() => { descriptor.style.visibility = "hidden"; })
    //descriptor.style.visibility = "hidden";
  }
  $(target).animate({ width: "toggle", height: "toggle" }, 800);
}

function popIn(target) {
  deRender(localStorage.getItem("tab"));
  $(target).animate({ width: "toggle", height: "toggle" }, 800);
  $(target)
    .promise()
    .done(() => {
      for (let descriptor of descriptors) {
        $(descriptor).animate({ opacity: ".95" }, 120)
        descriptor.style.visibility = "visible";

      }
    });
  localStorage.setItem("tab", target);
}
