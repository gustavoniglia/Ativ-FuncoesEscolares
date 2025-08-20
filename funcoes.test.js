
const funcoes = require('./funcoes');

test('alunoAprovado deve ser retornar true para nota 7',function(){
   expect(funcoes.alunoAprovado(8)).toBe(true);
});

test('alunoaprovado deve retornar false para nota 7',function(){
   expect(funcoes.alunoAprovado(5)).toBe(false);
})

 test('ListaProfessor deve conter "Marcos"',function(){
expect(funcoes.listaProfessores()).toContain("Marcos");
 });

  test('validarEmail deve retornar true para email válido',function(){
expect(funcoes.validarEmail('teste@email.com')).toBe(true);
 });

  test('validarEmail deve retornar false para o email inválido',function(){
expect(funcoes.validarEmail('teste.com')).toBe(false);
 });

 test('calcularFaltas deve calcular porcentagem corretamente',function(){
   expect(funcoes.calcularFaltas(20,5)).toBe('25.00');
 });

 test('verificarUsuarioLogado deve retornar true para admin',function(){
   expect(funcoes.verificarUsuarioLogado('admin')).toBe(true);
 })

  test('verificarUsuarioLogado deve retornar false para admin',function(){
   expect(funcoes.verificarUsuarioLogado('kaique')).toBe(false);
 })
 



