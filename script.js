// =============================nav bar=================================
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// ============================service div button==============================

$(document).ready(function () {
  $(".original-coffee").hover(function () {
    $("#ori-btn").toggle();
  });
});

$(document).ready(function () {
  $(".coffee-flavor").hover(function () {
    $("#flav-btn").toggle();
  });
});

$(document).ready(function () {
  $(".pleasant-abient").hover(function () {
    $("#abi-btn").toggle();
  });
});