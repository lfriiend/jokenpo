function jogar() {
  if (
    document.getElementById('pedra').checked == false &&
    document.getElementById('papel').checked == false &&
    document.getElementById('tesoura').checked == false
  ) {
    alert('Escolha uma opção')
  }
  //jogada da máquina
  else {
    var sorteio = Math.floor(Math.random() * 3)
    switch (sorteio) {
      case 0:
        document.getElementById('pc').innerHTML = 'Máquina: Pedra'
        break
      case 1:
        document.getElementById('pc').innerHTML = 'Máquina: Papel'
        break
      case 2:
        document.getElementById('pc').innerHTML = 'Máquina: Tesoura'
        break
    }
    //condição de empate
    if (
      (document.getElementById('pedra').checked == true && sorteio == 0) ||
      (document.getElementById('papel').checked == true && sorteio == 1) ||
      (document.getElementById('tesoura').checked = true && sorteio == 2)
    ) {
      document.getElementById('placar').innerHTML = 'Placar: empate'
      alert('Você empatou, tente mais uma vez!')
    } else if (
      (document.getElementById('pedra').checked == true && sorteio == 2) ||
      (document.getElementById('papel').checked == true && sorteio == 0) ||
      (document.getElementById('tesoura').checked = true && sorteio == 1)
    ) {
      document.getElementById('placar').innerHTML = 'Placar: Você venceu'
      alert('Parabéns, você ganhou :)')
    } else {
      document.getElementById('placar').innerHTML = 'Placar: Máquina venceu'
      alert('Você perdeu T_T')
    }
  }
}

function reset() {
  document.getElementById('pc').innerHTML = ''
  document.getElementById('placar').innerHTML = ''
}
