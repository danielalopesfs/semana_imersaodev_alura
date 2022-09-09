function Chutar() {
  var elementResult = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementResult.innerHTML = "Você acertou o número secreto. Parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementResult.innerHTML = "Você deve digitar um número de 0 a 10.";
  } else {
    elementResult.innerHTML =
      "Você errou. O número secreto era " + numeroSecreto;
  }
}

var numeroSecreto = parseInt(Math.random() * 11);
