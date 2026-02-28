/* ===================================================
   URNA ELETRONICA ESCOLAR - Script principal
   Fluxo: Login -> Votacao -> Confirmacao -> Fim
   =================================================== */

// ---- Dados das chapas (editar aqui) ----
const chapas = [
  {
    numero: "10",
    nome: "Renovacao",
    lider: { nome: "Lucas Mendes", foto: "images/candidato1.jpg" },
    vice: { nome: "Ana Beatriz", foto: "images/vice1.jpg" },
  },
  {
    numero: "20",
    nome: "Voz Ativa",
    lider: { nome: "Maria Clara", foto: "images/candidato2.jpg" },
    vice: { nome: "Pedro Henrique", foto: "images/vice2.jpg" },
  },
  {
    numero: "30",
    nome: "Futuro Jovem",
    lider: { nome: "Gabriel Santos", foto: "images/candidato3.jpg" },
    vice: { nome: "Julia Fernandes", foto: "images/vice3.jpg" },
  },
];

// ---- Estado da aplicacao ----
let alunoAtual = { matricula: "", sala: "" };
let digitosVoto = "";
let chapaEscolhida = null;

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

// ---- TELA DE LOGIN (Firebase Auth) ----
btnLoginConfirm.addEventListener("click", function () {
  const matricula = inputMatricula.value.trim();
  const sala = selectSala.value;

  // Validacao basica
  if (!matricula || matricula.length < 3) {
    showLoginError("Informe uma matricula valida (minimo 3 digitos).");
    return;
  }
  if (!sala) {
    showLoginError("Selecione a sala.");
    return;
  }

  // Desabilita botao enquanto autentica
  btnLoginConfirm.disabled = true;
  btnLoginConfirm.textContent = "Verificando...";

  // Monta email a partir da matricula (ex: 20231045@ceti.edu.br)
  const email = matricula + "@ceti.edu.br";
  // Senha = somente a turma selecionada (ex: "1.o A Matutino")
  const senha = sala;

  auth.signInWithEmailAndPassword(email, senha)
    .then(function (userCredential) {
      // Login OK
      alunoAtual = { matricula, sala };
      hideLoginError();
      btnLoginConfirm.disabled = false;
      btnLoginConfirm.textContent = "Confirmar";
      showScreen("votacao");
    })
    .catch(function (error) {
      btnLoginConfirm.disabled = false;
      btnLoginConfirm.textContent = "Confirmar";

      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-credential") {
        showLoginError("Matricula ou turma incorreta. Verifique seus dados.");
      } else if (error.code === "auth/wrong-password") {
        showLoginError("Turma incorreta para esta matricula.");
      } else if (error.code === "auth/too-many-requests") {
        showLoginError("Muitas tentativas. Aguarde um momento.");
      } else {
        showLoginError("Erro ao autenticar: " + error.message);
      }
    });
});

// Permitir somente numeros na matricula
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

// ---- TELA DE VOTACAO (teclado numerico) ----
// Clicar nos botoes do teclado
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", function () {
    const valor = this.dataset.value;
    if (digitosVoto.length < 2) {
      digitosVoto += valor;
      atualizarDisplay();
    }
  });
});

// Botao CORRIGIR
document.getElementById("btn-corrigir").addEventListener("click", function () {
  digitosVoto = "";
  chapaEscolhida = null;
  atualizarDisplay();
});

// Botao CONFIRMAR (abre overlay)
document.getElementById("btn-confirmar").addEventListener("click", function () {
  if (digitosVoto.length < 2) return; // precisa ter 2 digitos

  if (chapaEscolhida) {
    confirmChapaNome.textContent =
      chapaEscolhida.nome + " (n." + chapaEscolhida.numero + ")";
  } else {
    confirmChapaNome.textContent = "VOTO NULO";
  }
  overlay.classList.add("active");
});

// Atualizar o display dos digitos e buscar chapa
function atualizarDisplay() {
  // Atualiza caixas de digitos
  digitBox1.textContent = digitosVoto[0] || "";
  digitBox2.textContent = digitosVoto[1] || "";

  digitBox1.classList.toggle("filled", digitosVoto.length >= 1);
  digitBox2.classList.toggle("filled", digitosVoto.length >= 2);

  // Se tem 2 digitos, busca a chapa
  if (digitosVoto.length === 2) {
    const chapa = chapas.find((c) => c.numero === digitosVoto);
    if (chapa) {
      chapaEscolhida = chapa;
      mostrarCandidato(chapa);
    } else {
      chapaEscolhida = null;
      mostrarNulo();
    }
  } else {
    // Menos de 2 digitos: mostra placeholder
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
// Botao SIM
document.getElementById("btn-confirm-sim").addEventListener("click", function () {
  overlay.classList.remove("active");
  finalizarVoto();
});

// Botao NAO
document.getElementById("btn-confirm-nao").addEventListener("click", function () {
  overlay.classList.remove("active");
});

// ---- TELA FINAL ----
function finalizarVoto() {
  // Toca som "plim"
  tocarPlim();

  // Desloga o aluno apos votar (impede votar de novo)
  auth.signOut().then(function () {
    console.log("Aluno deslogado apos votar.");
  }).catch(function (error) {
    console.error("Erro ao deslogar: ", error);
  });

  showScreen("fim");
}

// Botao OK da tela final
document.getElementById("btn-fim-ok").addEventListener("click", function () {
  // Limpa tudo e volta ao login
  resetarTudo();
  showScreen("login");
});

function resetarTudo() {
  alunoAtual = { matricula: "", sala: "" };
  digitosVoto = "";
  chapaEscolhida = null;
  inputMatricula.value = "";
  selectSala.value = "";
  digitBox1.textContent = "";
  digitBox2.textContent = "";
  digitBox1.classList.remove("filled");
  digitBox2.classList.remove("filled");
  esconderInfo();
  hideLoginError();
}

// ---- Som "plim" via Web Audio API ----
function tocarPlim() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Primeiro tom
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

    // Segundo tom (harmonico)
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
  } catch (e) {
    // Fallback silencioso se Web Audio nao for suportado
  }
}

// ---- Suporte a teclado fisico ----
document.addEventListener("keydown", function (e) {
  // Somente na tela de votacao
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

// ---- Inicializacao ----
showScreen("login");
