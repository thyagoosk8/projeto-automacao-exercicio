const SistemaService = require("../services/SistemaService");
const CadastroPage = require("../pages/CadastroPage");
const usuarios = require("../data/usuarios");

const service = new SistemaService();
const cadastro = new CadastroPage(service);

console.log("Teste: Cadastro com sucesso");

const resposta = cadastro.cadastrar(usuarios.usuarioCadastro);

if (resposta.status === 201) {
  console.log("✅ Cadastro realizado com sucesso!");
} else {
  console.log("❌ Falha no cadastro.");
}