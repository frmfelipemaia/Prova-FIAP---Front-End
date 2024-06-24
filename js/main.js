function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 40) {
        navbar.classList.remove('nav-bg');
    } else {
        navbar.classList.add('nav-bg');
    }
}
window.addEventListener('scroll', scrollValue);
// Primeira Animação, nav bar mudar de cor ao descer a página

function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('.filled').style.setProperty('--progress', scrollPercent);
}
document.addEventListener('scroll', updateProgressBar);
// Segunda Animação, nav bar agora tem uma barra de progresso

