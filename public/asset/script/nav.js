// .title_container or .logo_container

// .nav_container

var el = document.querySelector('.title_container');

el.onclick = function() {
  el.classList.toggle('active');
}