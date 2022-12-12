let dinheiro = 50.0
let fome = 0
let sono = 0
let tedio = 0

let v_dinheiro = document.querySelector('#dinheiro')
let v_fome = document.querySelector('#fome')
let v_sono = document.querySelector('#sono')
let v_tedio = document.querySelector('#tedio')

function morrer(dinheiro, fome, sono, tedio) {
  if (fome >= 100) {
    alert('Você morreu de fome')
    window.location.reload()
  } else if (sono >= 100) {
    alert('Você morreu de sono')
    window.location.reload()
  } else if (tedio >= 100) {
    alert('você morreu de tedio')
    window.location.reload()
  } else if (dinheiro <= 0) {
    alert('você faliu')
    window.location.reload()
  }

}

function verificar(statu) {
  if (statu <= 0) {
    alert('Você não precisa disso agora')
    return statu
  }
}

function trabalhar() {
  dinheiro += 10.0
  fome += 10
  sono += 15
  tedio += 10
  morrer(dinheiro, fome, sono, tedio)
  v_dinheiro.innerHTML = dinheiro
  v_fome.innerHTML = fome
  v_sono.innerHTML = sono
  v_tedio.innerHTML = tedio
}

function comer() {
  if (verificar(fome)) {

  } else {
    dinheiro -= 5.0
    fome -= 5
  }
  morrer(dinheiro, fome, sono, tedio)
  if (fome < 0) {
    fome = 0
  }
  v_dinheiro.innerHTML = dinheiro
  v_fome.innerHTML = fome

}

function dormir() {
  if (verificar(sono)) {
    fome = fome
    sono = sono
  } else {
    fome += 5
    sono -= 20
  }
  morrer(dinheiro, fome, sono, tedio)
  if (sono < 0) {
    sono = 0
  }
  v_sono.innerHTML = sono
  v_fome.innerHTML = fome
}

function jogar() {

  if (verificar(tedio)) {

  } else {
    tedio -= 10
    sono += 5
    fome += 5
  }

  morrer(dinheiro, fome, sono, tedio)
  if (tedio < 0) {
    tedio = 0
  }

  v_tedio.innerHTML = tedio
  v_sono.innerHTML = sono
  v_fome.innerHTML = fome

}

