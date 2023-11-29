import FormControl from './FormControl';

const FormLogin = () => {
  return (
    <form>
      <FormControl id="email" type="email" label="E-mail de cadastro" />
      <FormControl id="senha" type="password" label="Senha" />
      <button type="button" className="btn btn-success">
        Entrar
      </button>
    </form>
  );
};

export default FormLogin;
