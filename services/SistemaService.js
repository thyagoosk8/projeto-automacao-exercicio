    class SistemaService {

  cadastrar(usuario) {
    if (!usuario.nome || !usuario.email || !usuario.senha) {
      return {
        status: 400,
        mensagem: "Todos os campos de cadastro são obrigatórios"
      };
    }

    return {
      status: 201,
      id: 999
    };
  }

  login(email, senha) {
    if (
      email === "usuario.padrao@sistema.com" &&
      senha === "SenhaSegura123!"
    ) {
      return {
        status: 200,
        token: "token_seguro_123"
      };
    }

    return {
      status: 401,
      erro: "Credenciais inválidas"
    };
  }

}

module.exports = SistemaService;