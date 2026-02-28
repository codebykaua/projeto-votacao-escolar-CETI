/* ===================================================
   URNA ELETRONICA ESCOLAR - Script principal
   Fluxo: Login -> Votacao -> Confirmacao -> Fim
   =================================================== */

const chapasPorSala = {
  // ================= TURNO MATUTINO =================
  "1.o A Matutino": [
    { numero: "10", nome: "Renovação 1A Mat", lider: { nome: "Aluno A1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno A2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 1A Mat", lider: { nome: "Aluno A3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno A4", foto: "images/vice2.jpg" } }
  ],
  "1.o B Matutino": [
    { numero: "10", nome: "Renovação 1B Mat", lider: { nome: "Aluno B1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno B2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 1B Mat", lider: { nome: "Aluno B3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno B4", foto: "images/vice2.jpg" } }
  ],
  "1.o C Matutino": [
    { numero: "10", nome: "Renovação 1C Mat", lider: { nome: "Aluno C1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno C2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 1C Mat", lider: { nome: "Aluno C3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno C4", foto: "images/vice2.jpg" } }
  ],
  "2.o A Matutino": [
    { numero: "10", nome: "Renovação 2A Mat", lider: { nome: "Aluno D1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno D2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 2A Mat", lider: { nome: "Aluno D3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno D4", foto: "images/vice2.jpg" } }
  ],
  "2.o B Matutino": [
    { numero: "10", nome: "Renovação 2B Mat", lider: { nome: "Aluno E1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno E2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 2B Mat", lider: { nome: "Aluno E3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno E4", foto: "images/vice2.jpg" } }
  ],
  "2.o C Matutino": [
    { numero: "10", nome: "Renovação 2C Mat", lider: { nome: "Aluno F1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno F2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 2C Mat", lider: { nome: "Aluno F3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno F4", foto: "images/vice2.jpg" } }
  ],
  "3.o A Matutino": [
    { numero: "10", nome: "Renovação 3A Mat", lider: { nome: "Aluno G1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno G2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 3A Mat", lider: { nome: "Aluno G3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno G4", foto: "images/vice2.jpg" } }
  ],
  "3.o B Matutino": [
    { numero: "10", nome: "Renovação 3B Mat", lider: { nome: "Aluno H1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno H2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 3B Mat", lider: { nome: "Aluno H3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno H4", foto: "images/vice2.jpg" } }
  ],
  "3.o C Matutino": [
    { numero: "10", nome: "Renovação 3C Mat", lider: { nome: "Aluno I1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno I2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Voz Ativa 3C Mat", lider: { nome: "Aluno I3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno I4", foto: "images/vice2.jpg" } }
  ],

  // ================= TURNO VESPERTINO =================
  "1.o A Vespertino": [
    { numero: "10", nome: "Futuro 1A Vesp", lider: { nome: "Aluno J1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno J2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 1A Vesp", lider: { nome: "Aluno J3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno J4", foto: "images/vice2.jpg" } }
  ],
  "1.o B Vespertino": [
    { numero: "10", nome: "Futuro 1B Vesp", lider: { nome: "Aluno K1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno K2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 1B Vesp", lider: { nome: "Aluno K3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno K4", foto: "images/vice2.jpg" } }
  ],
  "1.o C Vespertino": [
    { numero: "10", nome: "Futuro 1C Vesp", lider: { nome: "Aluno L1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno L2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 1C Vesp", lider: { nome: "Aluno L3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno L4", foto: "images/vice2.jpg" } }
  ],
  "2.o A Vespertino": [
    { numero: "10", nome: "Futuro 2A Vesp", lider: { nome: "Aluno M1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno M2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 2A Vesp", lider: { nome: "Aluno M3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno M4", foto: "images/vice2.jpg" } }
  ],
  "2.o B Vespertino": [
    { numero: "10", nome: "Futuro 2B Vesp", lider: { nome: "Aluno N1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno N2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 2B Vesp", lider: { nome: "Aluno N3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno N4", foto: "images/vice2.jpg" } }
  ],
  "2.o C Vespertino": [
    { numero: "10", nome: "Futuro 2C Vesp", lider: { nome: "Aluno O1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno O2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 2C Vesp", lider: { nome: "Aluno O3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno O4", foto: "images/vice2.jpg" } }
  ],
  "3.o A Vespertino": [
    { numero: "10", nome: "Futuro 3A Vesp", lider: { nome: "Aluno P1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno P2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 3A Vesp", lider: { nome: "Aluno P3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno P4", foto: "images/vice2.jpg" } }
  ],
  "3.o B Vespertino": [
    { numero: "10", nome: "Futuro 3B Vesp", lider: { nome: "Aluno Q1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno Q2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 3B Vesp", lider: { nome: "Aluno Q3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno Q4", foto: "images/vice2.jpg" } }
  ],
  "3.o C Vespertino": [
    { numero: "10", nome: "Futuro 3C Vesp", lider: { nome: "Aluno R1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno R2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "Força 3C Vesp", lider: { nome: "Aluno R3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno R4", foto: "images/vice2.jpg" } }
  ],

  // ================= TURNO NOTURNO =================
  "1.o A Noturno": [
    { numero: "10", nome: "Liderança 1A Not", lider: { nome: "Aluno S1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno S2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 1A Not", lider: { nome: "Aluno S3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno S4", foto: "images/vice2.jpg" } }
  ],
  "1.o B Noturno": [
    { numero: "10", nome: "Liderança 1B Not", lider: { nome: "Aluno T1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno T2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 1B Not", lider: { nome: "Aluno T3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno T4", foto: "images/vice2.jpg" } }
  ],
  "2.o A Noturno": [
    { numero: "10", nome: "Liderança 2A Not", lider: { nome: "Aluno U1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno U2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 2A Not", lider: { nome: "Aluno U3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno U4", foto: "images/vice2.jpg" } }
  ],
  "2.o B Noturno": [
    { numero: "10", nome: "Liderança 2B Not", lider: { nome: "Aluno V1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno V2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 2B Not", lider: { nome: "Aluno V3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno V4", foto: "images/vice2.jpg" } }
  ],
  "3.o A Noturno": [
    { numero: "10", nome: "Liderança 3A Not", lider: { nome: "Aluno W1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno W2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 3A Not", lider: { nome: "Aluno W3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno W4", foto: "images/vice2.jpg" } }
  ],
  "3.o B Noturno": [
    { numero: "10", nome: "Liderança 3B Not", lider: { nome: "Aluno X1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno X2", foto: "images/vice1.jpg" } },
    { numero: "20", "nome": "União 3B Not", lider: { nome: "Aluno X3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno X4", foto: "images/vice2.jpg" } }
  ],
  "3.o C Noturno": [
    { numero: "10", nome: "Liderança 3C Not", lider: { nome: "Aluno Y1", foto: "images/candidato1.jpg" }, vice: { nome: "Aluno Y2", foto: "images/vice1.jpg" } },
    { numero: "20", nome: "União 3C Not", lider: { nome: "Aluno Y3", foto: "images/candidato2.jpg" }, vice: { nome: "Aluno Y4", foto: "images/vice2.jpg" } }
  ]
};

// ---- Estado da aplicacao ----
let alunoAtual = { matricula: "", sala: "" };
let digitosVoto = "";
let chapaEscolhida = null;
let chapasAtuaisDaSala = []; 

// ---- Elementos do DOM ----
const screens = {
  login: document.getElementById("screen-login"),
  votacao: document.getElementById("screen-votacao"),
  fim: document.getElementById("screen-fim"),
};

const overlay = document.getElementById("overlay-confirm");

// Login
const inputMatricula = document.getElementById("input-matricula");
const selectSala = document.getElementById("select-sala");
const loginError = document.getElementById("login-error");
const btnLoginConfirm = document.getElementById("btn-login-confirm");

// Votacao
const digitBox1 = document.getElementById("digit-1");
const digitBox2 = document.getElementById("digit-2");
const candidatoInfo = document.getElementById("candidato-info");
const votoNulo = document.getElementById("voto-nulo");
const displayPlaceholder = document.getElementById("display-placeholder");
const chapaNome = document.getElementById("chapa-nome");
const chapaNumero = document.getElementById("chapa-numero");
const fotoLider = document.getElementById("foto-lider");
const nomeLider = document.getElementById("nome-lider");
const fotoVice = document.getElementById("foto-vice");
const nomeVice = document.getElementById("nome-vice");

// Confirmacao
const confirmChapaNome = document.getElementById("confirm-chapa-nome");

// ---- Funcoes de navegacao entre telas ----
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ---- TELA DE LOGIN (Verificação no Firestore e Filtro de Sala) ----
btnLoginConfirm.addEventListener("click", async function () {
  const matricula = inputMatricula.value.trim();
  const sala = selectSala.value;

  if (!matricula || matricula.length < 3) {
    showLoginError("Informe uma matricula valida (minimo 3 digitos).");
    return;
  }
  if (!sala) {
    showLoginError("Selecione a sala.");
    return;
  }

  if (!chapasPorSala[sala] || chapasPorSala[sala].length === 0) {
     showLoginError("Não há chapas cadastradas para esta sala ainda.");
     return;
  }

  btnLoginConfirm.disabled = true;
  btnLoginConfirm.textContent = "Verificando...";

  try {
    const docRef = db.collection("votos").doc(matricula);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      showLoginError("Esta matrícula já registrou um voto!");
      btnLoginConfirm.disabled = false;
      btnLoginConfirm.textContent = "Confirmar";
      return;
    }

    alunoAtual = { matricula, sala };
    chapasAtuaisDaSala = chapasPorSala[sala]; 
    
    hideLoginError();
    btnLoginConfirm.disabled = false;
    btnLoginConfirm.textContent = "Confirmar";
    showScreen("votacao");

  } catch (error) {
    console.error("Erro ao verificar o banco: ", error);
    showLoginError("Erro ao conectar com o sistema. Tente novamente.");
    btnLoginConfirm.disabled = false;
    btnLoginConfirm.textContent = "Confirmar";
  }
});

inputMatricula.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

function showLoginError(msg) {
  loginError.textContent = msg;
  loginError.classList.add("visible");
}

function hideLoginError() {
  loginError.classList.remove("visible");
}

// ---- TELA DE VOTACAO ----
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", function () {
    const valor = this.dataset.value;
    if (digitosVoto.length < 2) {
      digitosVoto += valor;
      atualizarDisplay();
    }
  });
});

document.getElementById("btn-corrigir").addEventListener("click", function () {
  digitosVoto = "";
  chapaEscolhida = null;
  atualizarDisplay();
});

document.getElementById("btn-confirmar").addEventListener("click", function () {
  if (digitosVoto.length < 2) return; 

  if (chapaEscolhida) {
    confirmChapaNome.textContent =
      chapaEscolhida.nome + " (n." + chapaEscolhida.numero + ")";
  } else {
    confirmChapaNome.textContent = "VOTO NULO";
  }
  overlay.classList.add("active");
});

function atualizarDisplay() {
  digitBox1.textContent = digitosVoto[0] || "";
  digitBox2.textContent = digitosVoto[1] || "";

  digitBox1.classList.toggle("filled", digitosVoto.length >= 1);
  digitBox2.classList.toggle("filled", digitosVoto.length >= 2);

  if (digitosVoto.length === 2) {
    const chapa = chapasAtuaisDaSala.find((c) => c.numero === digitosVoto);
    if (chapa) {
      chapaEscolhida = chapa;
      mostrarCandidato(chapa);
    } else {
      chapaEscolhida = null;
      mostrarNulo();
    }
  } else {
    chapaEscolhida = null;
    esconderInfo();
  }
}

function mostrarCandidato(chapa) {
  displayPlaceholder.style.display = "none";
  votoNulo.classList.remove("visible");
  candidatoInfo.classList.add("visible");

  chapaNome.textContent = chapa.nome;
  chapaNumero.textContent = "Chapa n." + chapa.numero;
  fotoLider.src = chapa.lider.foto;
  fotoLider.alt = "Foto de " + chapa.lider.nome;
  nomeLider.textContent = chapa.lider.nome;
  fotoVice.src = chapa.vice.foto;
  fotoVice.alt = "Foto de " + chapa.vice.nome;
  nomeVice.textContent = chapa.vice.nome;
}

function mostrarNulo() {
  displayPlaceholder.style.display = "none";
  candidatoInfo.classList.remove("visible");
  votoNulo.classList.add("visible");
}

function esconderInfo() {
  displayPlaceholder.style.display = "block";
  candidatoInfo.classList.remove("visible");
  votoNulo.classList.remove("visible");
}

// ---- OVERLAY DE CONFIRMACAO ----
document.getElementById("btn-confirm-sim").addEventListener("click", function () {
  overlay.classList.remove("active");
  this.disabled = true; 
  finalizarVoto();
});

document.getElementById("btn-confirm-nao").addEventListener("click", function () {
  overlay.classList.remove("active");
});

// ---- TELA FINAL (Salvando no Firebase) ----
function finalizarVoto() {
  const dadosDoVoto = {
    sala: alunoAtual.sala,
    chapaVotada: chapaEscolhida ? chapaEscolhida.nome : "NULO",
    numeroChapa: chapaEscolhida ? chapaEscolhida.numero : "NULO",
    dataVoto: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("votos").doc(alunoAtual.matricula).set(dadosDoVoto)
    .then(function() {
      tocarPlim();
      showScreen("fim");
      document.getElementById("btn-confirm-sim").disabled = false;
    })
    .catch(function(error) {
      console.error("Erro ao salvar o voto: ", error);
      alert("Ocorreu um erro ao registrar seu voto no banco de dados.");
      document.getElementById("btn-confirm-sim").disabled = false;
    });
}

document.getElementById("btn-fim-ok").addEventListener("click", function () {
  resetarTudo();
  showScreen("login");
});

function resetarTudo() {
  alunoAtual = { matricula: "", sala: "" };
  digitosVoto = "";
  chapaEscolhida = null;
  chapasAtuaisDaSala = [];
  inputMatricula.value = "";
  selectSala.value = "";
  digitBox1.textContent = "";
  digitBox2.textContent = "";
  digitBox1.classList.remove("filled");
  digitBox2.classList.remove("filled");
  esconderInfo();
  hideLoginError();
}

// ---- Som "plim" ----
function tocarPlim() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, ctx.currentTime);
    gain1.gain.setValueAtTime(0.3, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.5);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1320, ctx.currentTime + 0.08);
    gain2.gain.setValueAtTime(0.2, ctx.currentTime + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.08);
    osc2.stop(ctx.currentTime + 0.6);
  } catch (e) {}
}

// ---- Suporte a teclado fisico ----
document.addEventListener("keydown", function (e) {
  if (!screens.votacao.classList.contains("active")) return;

  if (e.key >= "0" && e.key <= "9" && digitosVoto.length < 2) {
    digitosVoto += e.key;
    atualizarDisplay();
  } else if (e.key === "Backspace" || e.key === "Delete") {
    digitosVoto = "";
    chapaEscolhida = null;
    atualizarDisplay();
  } else if (e.key === "Enter" && digitosVoto.length === 2) {
    document.getElementById("btn-confirmar").click();
  }
});

showScreen("login");