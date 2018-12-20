const knop = document.getElementById('knop');
let doos = document.querySelectorAll('.doos');
i=0;
console.log(doos);
console.log(i);

const schuif = () => {
  setTimeout(function(){ doos[0].classList.toggle('doos--top'); }, 0);
  setTimeout(function(){ doos[1].classList.toggle('doos--top'); }, 500);
  setTimeout(function(){ doos[2].classList.toggle('doos--top'); }, 1000);
  setTimeout(function(){ doos[3].classList.toggle('doos--top'); }, 1500);
}


knop.addEventListener('click', schuif);
