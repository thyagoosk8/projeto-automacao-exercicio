   class CadastroPage {

  constructor(service) {
    this.service = service;
  }

  cadastrar(usuario) {
    return this.service.cadastrar(usuario);
  }

}

module.exports = CadastroPage;