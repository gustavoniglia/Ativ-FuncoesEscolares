function alunoAprovado(nota) {
  return nota >= 7;
}

function listaProfessores() {
  return ['Marcos', 'Joana', 'Fernanda', 'Lucas'];
}

function validarEmail(email) {
  return email.includes('@');
}

function calcularFaltas(totalAulas, faltas) {
  const porcentagem = (faltas / totalAulas) * 100;
  return porcentagem.toFixed(2); // retorna string com 2 casas decimais
}

function verificarUsuarioLogado(usuario) {
  return usuario === 'admin';
}

module.exports = {
 alunoAprovado,
 listaProfessores,
 validarEmail,
 calcularFaltas,
 verificarUsuarioLogado
}