document.getElementById("botaoEnviar").addEventListener("click")

function validate()
      {
       var email = document.forms["form"]["email"].value;
       var correto = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!email.match(correto))
      {
       alert("Email inválido!");
       return true;
      }
}