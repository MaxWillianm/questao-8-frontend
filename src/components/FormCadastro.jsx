import FormControl from './FormControl';

const FormCadastro = () => {
  return (
    <form>
      <FormControl id="nome" label="Nome" />
      <FormControl id="sobrenome" label="Sobrenome" />
      <FormControl id="idade" label="Idade" />
      <FormControl
        id="email"
        type="email"
        label="E-mail"
        placeholder="demo@gmail.com"
      />
      <FormControl id="senha" type="password" label="Senha" />
      <FormControl
        id="senha_confirm"
        type="password"
        label="Repita sua Senha"
      />
      <button type="button" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
};

export default FormCadastro;
