// Cole aqui a URL exata gerada pelo Apps Script (que termina em /exec)
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwQIbBAFfRLPPZBtiN_1JiKlc5nV1ff7mkwDA3FKPab861iPIiN2fGKwiD6MWRUW7YB/exec";
 
const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
 
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
 
  aviso.style.color = "#2563eb";
  aviso.textContent = "Enviando...";
 
  fetch(URL_PLANILHA, {
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  })
    .then(function () {
      aviso.style.color = "#16a34a";
      aviso.textContent = "Enviado com sucesso!";
      form.reset();
    })
    .catch(function () {
      aviso.style.color = "#dc2626";
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });
});