export const CREATE_TEXT = {
  title: 'Cadastro de Pergunta',
  subtitle: 'Cadastre uma pergunta da sua disciplina para ser utilizada no jogo'
}

export const EDIT_TEXT = {
  title: 'Edição de Pergunta',
  subtitle: 'Edite a pergunta da sua disciplina que está sendo utilizada no jogo'
}

export const ALTERNATIVES = [
  { label: 'Alternativa A', value: 'a' },
  { label: 'Alternativa B', value: 'b' },
  { label: 'Alternativa C', value: 'c' },
  { label: 'Alternativa D', value: 'd' },
  { label: 'Alternativa E', value: 'e' },
]

export const DISCIPLINAS_OPTIONS = [
  { sigla: 'IAC001', nomeCompleto: 'Arquitetura e Organização de Computadores', cor: '#32CD32', }, // Verde
  { sigla: 'IAL002', nomeCompleto: 'Algoritmos e Lógica de Programação', cor: '#32CD32', }, // Verde
  { sigla: 'ILM001', nomeCompleto: 'Programação em Microinformática', cor: '#32CD32', }, // Verde
  { sigla: 'ISI002', nomeCompleto: 'Sistemas de Informação', cor: '#32CD32', }, // Verde
  { sigla: 'MMD001', nomeCompleto: 'Matemática Discreta', cor: '#32CD32', }, // Verde
  { sigla: 'AAG001', nomeCompleto: 'Administração Geral', cor: '#FFD700', }, // Amarelo
  { sigla: 'ILP010', nomeCompleto: 'Linguagem de Programação', cor: '#FFD700', }, // Amarelo
  { sigla: 'ILP029', nomeCompleto: 'Linguagem de Programação II - Linguagem Visual Basic (VB)', cor: '#FFD700', }, // Amarelo
  { sigla: 'LPO001', nomeCompleto: 'Comunicação e Expressão', cor: '#FFD700', }, // Amarelo
  { sigla: 'MCA002', nomeCompleto: 'Cálculo', cor: '#FFD700', }, // Amarelo
  { sigla: 'CCG001', nomeCompleto: 'Contabilidade', cor: '#FF8C00', }, // Laranja
  { sigla: 'IED001', nomeCompleto: 'Estruturas de Dados', cor: '#FF8C00', }, // Laranja
  { sigla: 'IHC001', nomeCompleto: 'Interação Humano Computador', cor: '#FF8C00', }, // Laranja
  { sigla: 'IHW100', nomeCompleto: 'Laboratório de Hardware', cor: '#FF8C00', }, // Laranja
  { sigla: 'ISO100', nomeCompleto: 'Sistemas Operacionais I', cor: '#FF8C00', }, // Laranja
  { sigla: 'LIN100', nomeCompleto: 'Inglês I', cor: '#FF8C00', }, // Laranja
  { sigla: 'CEF100', nomeCompleto: 'Economia e Finanças', cor: '#FF0000', }, // Vermelho
  { sigla: 'IBD002', nomeCompleto: 'Banco de Dados', cor: '#FF0000', }, // Vermelho
  { sigla: 'IES100', nomeCompleto: 'Engenharia de Software I', cor: '#FF0000', }, // Vermelho
  { sigla: 'ILP007', nomeCompleto: 'Programação Orientada a Objetos', cor: '#FF0000', }, // Vermelho
  { sigla: 'ISO200', nomeCompleto: 'Sistemas Operacionais II', cor: '#FF0000', }, // Vermelho
  { sigla: 'LIN200', nomeCompleto: 'Inglês II', cor: '#FF0000', }, // Vermelho
  { sigla: 'HST002', nomeCompleto: 'Sociedade e Tecnologia', cor: '#8A2BE2', }, // Roxo
  { sigla: 'IBD100', nomeCompleto: 'Laboratório de Banco de Dados (Escolha 1)', cor: '#8A2BE2', }, // Roxo
  { sigla: 'IES200', nomeCompleto: 'Engenharia de Software II', cor: '#8A2BE2', }, // Roxo
  { sigla: 'ILP023', nomeCompleto: 'Programação para WEB', cor: '#8A2BE2', }, // Roxo
  { sigla: 'ISD001', nomeCompleto: 'Sistemas Distribuídos', cor: '#8A2BE2', }, // Roxo
  { sigla: 'LIN300', nomeCompleto: 'Inglês III', cor: '#8A2BE2', }, // Roxo
  { sigla: 'MET100', nomeCompleto: 'Estatística Aplicada', cor: '#8A2BE2', }, // Roxo
  { sigla: 'AGO005', nomeCompleto: 'Gestão de Projetos', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'IES300', nomeCompleto: 'Engenharia de Software III', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'IRC008', nomeCompleto: 'Redes de Computadores', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'ISG003', nomeCompleto: 'Segurança da Informação', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'LIN400', nomeCompleto: 'Inglês IV', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'MPL001', nomeCompleto: 'Programação Linear e Aplicações', cor: '#4B0082', }, // Anil/Índigo
  { sigla: 'AGR101', nomeCompleto: 'Gestão de Equipes', cor: '#00FFFF', }, // Ciano
  { sigla: 'CEE002', nomeCompleto: 'Empreendedorismo', cor: '#00FFFF', }, // Ciano
  { sigla: 'IES301', nomeCompleto: 'Laboratório de Engenharia de Software', cor: '#00FFFF', }, // Ciano
  { sigla: 'IRC100', nomeCompleto: 'Laboratório de Redes (Escolha 2)', cor: '#00FFFF', }, // Ciano
  { sigla: 'ITE002', nomeCompleto: 'Tópicos Especiais em Informática (Escolha 2)', cor: '#00FFFF', }, // Ciano
  { sigla: 'LIN500', nomeCompleto: 'Inglês V', cor: '#00FFFF', }, // Ciano
  { sigla: 'TTG001', nomeCompleto: 'Metodologia da Pesquisa Científico-Tecnológica', cor: '#00FFFF', }, // Ciano
  { sigla: 'TTG003', nomeCompleto: 'Trabalho de Graduação I', cor: '#00FFFF', }, // Ciano
  { sigla: 'HSO003', nomeCompleto: 'Ética e Responsabilidade Profissional', cor: '#EE82EE', }, // Violeta
  { sigla: 'IIA002', nomeCompleto: 'Inteligência Artificial (Escolha 3)', cor: '#EE82EE', }, // Violeta
  { sigla: 'ISA002', nomeCompleto: 'Auditoria de Sistemas (Escolha 3)', cor: '#EE82EE', }, // Violeta
  { sigla: 'ITI004', nomeCompleto: 'Gestão e Governança de Tecnologia da Informação', cor: '#EE82EE', }, // Violeta
  { sigla: 'LIN600', nomeCompleto: 'Inglês VI', cor: '#EE82EE', }, // Violeta
  { sigla: 'TES001', nomeCompleto: 'Estágio Supervisionado', cor: '#EE82EE', }, // Violeta
  { sigla: 'TTG103', nomeCompleto: 'Trabalho de Graduação II', cor: '#EE82EE', }  // Violeta
]
