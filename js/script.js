const cumprimento = document.querySelector(".apresentacao-nome p");
const dataHoje = new Date();
const horas = dataHoje.getHours();

if(horas>= 6 && horas<= 11){
  cumprimento.innerText = "Bom dia";
}else if(horas>= 12 && horas<= 18){
  cumprimento.innerText = "Boa Tarde";
}else{
  cumprimento.innerText = "Boa Noite";
}

const btnProjeto = document.querySelector(".apresentacao-nome .btnProjeto");

btnProjeto.addEventListener("click", scrollProjeto);

function scrollProjeto(e){
  e.preventDefault();
  const target = e.target;
  const id = target.getAttribute('href');
  const targetSection = document.querySelector(id).offsetTop;

  window.scroll({
    top: targetSection,
    behavior: "smooth",
  })
}