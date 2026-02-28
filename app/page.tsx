import Script from "next/script"

export default function UrnaPage() {
  return (
    <>
      <link rel="stylesheet" href="/style.css" />

      <div className="app-container">
        {/* TELA 1: LOGIN */}
        <div id="screen-login" className="screen active">
          <div className="login-card">
            <div className="login-header">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </div>
              <h1>Urna Eletronica Escolar</h1>
              <p>Identifique-se para votar</p>
            </div>

            <div id="login-error" className="login-error"></div>

            <div className="form-group">
              <label htmlFor="input-matricula">Numero da Matricula</label>
              <input
                type="text"
                id="input-matricula"
                placeholder="Digite sua matricula"
                inputMode="numeric"
                maxLength={10}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="select-sala">Sala</label>
              <select id="select-sala" defaultValue="">
                <option value="">Selecione a sala</option>
                <option value="1.o A Matutino">1.o A Matutino</option>
                <option value="1.o B Matutino">1.o B Matutino</option>
                <option value="2.o A Matutino">2.o A Matutino</option>
                <option value="2.o B Matutino">2.o B Matutino</option>
                <option value="3.o A Matutino">3.o A Matutino</option>
                <option value="3.o B Matutino">3.o B Matutino</option>
                <option value="1.o A Vespertino">1.o A Vespertino</option>
                <option value="1.o B Vespertino">1.o B Vespertino</option>
                <option value="2.o A Vespertino">2.o A Vespertino</option>
                <option value="2.o B Vespertino">2.o B Vespertino</option>
                <option value="3.o A Vespertino">3.o A Vespertino</option>
                <option value="3.o B Vespertino">3.o B Vespertino</option>
              </select>
            </div>

            <button id="btn-login-confirm" className="btn btn-primary">Confirmar</button>
          </div>
        </div>

        {/* TELA 2: VOTACAO */}
        <div id="screen-votacao" className="screen">
          <div className="urna">
            <div className="urna-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
              </svg>
              <h2>Votacao</h2>
              <span className="badge">Eleicao de Representantes</span>
            </div>

            <div className="urna-body">
              {/* Display do candidato */}
              <div className="urna-display">
                <div id="display-placeholder" className="display-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                  </svg>
                  <p>Digite o numero da chapa</p>
                </div>

                <div id="candidato-info" className="candidato-info">
                  <p id="chapa-nome" className="candidato-nome-chapa"></p>
                  <p id="chapa-numero" className="candidato-numero-display"></p>
                  <div className="fotos-container">
                    <div className="foto-card">
                      <img id="foto-lider" src="" alt="Foto do lider" />
                      <p className="cargo">Lider</p>
                      <p id="nome-lider" className="nome"></p>
                    </div>
                    <div className="foto-card">
                      <img id="foto-vice" src="" alt="Foto do vice" />
                      <p className="cargo">Vice-lider</p>
                      <p id="nome-vice" className="nome"></p>
                    </div>
                  </div>
                </div>

                <div id="voto-nulo" className="voto-nulo">
                  <div className="nulo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>
                    </svg>
                  </div>
                  <h3>VOTO NULO</h3>
                  <p>Numero de chapa nao encontrado</p>
                </div>
              </div>

              {/* Teclado numerico */}
              <div className="urna-keypad">
                <span className="keypad-label">Numero da Chapa</span>

                <div className="numero-input-display">
                  <div id="digit-1" className="digit-box"></div>
                  <div id="digit-2" className="digit-box"></div>
                </div>

                <div className="keypad-grid">
                  <button className="key" data-value="1">1</button>
                  <button className="key" data-value="2">2</button>
                  <button className="key" data-value="3">3</button>
                  <button className="key" data-value="4">4</button>
                  <button className="key" data-value="5">5</button>
                  <button className="key" data-value="6">6</button>
                  <button className="key" data-value="7">7</button>
                  <button className="key" data-value="8">8</button>
                  <button className="key" data-value="9">9</button>
                  <button className="key" data-value="0" style={{gridColumn: "2"}}>0</button>
                </div>

                <div className="keypad-actions">
                  <button id="btn-corrigir" className="btn btn-outline">Corrigir</button>
                  <button id="btn-confirmar" className="btn btn-primary">Confirmar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TELA 4: FIM */}
        <div id="screen-fim" className="screen">
          <div className="end-card">
            <div className="check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
              </svg>
            </div>
            <h2>FIM</h2>
            <p>Votacao concluida com sucesso!</p>
            <button id="btn-fim-ok" className="btn btn-primary">OK</button>
          </div>
        </div>
      </div>

      {/* OVERLAY: CONFIRMACAO */}
      <div id="overlay-confirm" className="overlay">
        <div className="confirm-card">
          <div className="confirm-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
            </svg>
          </div>
          <h3>Confirmar Voto</h3>
          <p>Deseja realmente votar nesta chapa?</p>
          <p id="confirm-chapa-nome" className="chapa-destaque"></p>
          <div className="confirm-actions">
            <button id="btn-confirm-nao" className="btn btn-outline">Nao</button>
            <button id="btn-confirm-sim" className="btn btn-primary">Sim</button>
          </div>
        </div>
      </div>

      {/* Firebase SDK */}
      <Script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js" strategy="beforeInteractive" />
      <Script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js" strategy="beforeInteractive" />

      {/* Configuracao Firebase */}
      <Script id="firebase-config" strategy="beforeInteractive">{`
        const firebaseConfig = {
          apiKey: "AIzaSyBCycHBd5RW8pfFaUIniIhGmwS0L9oQwao",
          authDomain: "projeto-de-votacao-ceti.firebaseapp.com",
          projectId: "projeto-de-votacao-ceti",
          storageBucket: "projeto-de-votacao-ceti.firebasestorage.app",
          messagingSenderId: "218722095189",
          appId: "1:218722095189:web:1ca36b57e949e49a1d44dc",
          measurementId: "G-T5VVSM4ZLN"
        };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
      `}</Script>

      {/* Script principal */}
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
