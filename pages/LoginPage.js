class LoginPage {

  constructor(service) {
    this.service = service;
  }

  realizarLogin(email, senha) {
    return this.service.login(email, senha);
  }

}

module.exports = LoginPage;