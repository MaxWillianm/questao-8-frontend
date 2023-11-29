import { FormLogin, FormCadastro } from './components';
import { useState } from 'react';

// a variável que irá controlar qual formulário deve ser exibido
// deverá aceitar apenas os valores "cadastro" e "login" a serem setados
// pelo botões após seleção do usuário
// lembre-se de criar um "tipo de variável" de estado que o React "monitore"
// e que no "click" de cada botão vocês possam setar o valor adequado para
// exibir cada formulário
export default function App() {
  const [tipoForm, setTipoForm] = useState(null);

  const handleTipoForm = (tipo) => () => {
    setTipoForm(tipo);
  };

  return (
    <div className="App container-fluid">
      <h1 className="mb-4">e-comércio - N2 Q8</h1>
      <div className="btn-group" role="group">
        <button onClick={handleTipoForm('cadastro')} type="button" className="btn btn-primary">
          Cadastre-se
        </button>
        <button onClick={handleTipoForm('login')} type="button" className="btn btn-success">
          Login
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        {tipoForm === 'cadastro' ? (
          <FormCadastro />
        ) : tipoForm === 'login' ? (
          <FormLogin />
        ) : (
          <p style={{ marginTop: 12, fontSize: 12 }}>
            Selecione uma ação acima
          </p>
        )}
      </div>
    </div>
  );
}

