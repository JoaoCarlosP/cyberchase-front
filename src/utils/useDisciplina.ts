export type IDisciplina = {
  cor: string
  nomeCompleto: string
  sigla: string
}


export const DISCIPLINAS_DEFAULT = [
  { sigla: 'IAC001', nomeCompleto: 'Arquitetura e Organização de Computadores', cor: '#2F4F4F', }, // Dark Slate Gray
  { sigla: 'IAL002', nomeCompleto: 'Algoritmos e Lógica de Programação', cor: '#6A5ACD', }, // Slate Blue
  { sigla: 'ILM001', nomeCompleto: 'Programação em Microinformática', cor: '#483D8B', }, // Dark Slate Blue
  { sigla: 'ISI002', nomeCompleto: 'Sistemas de Informação', cor: '#008080', }, // Teal
  { sigla: 'MMD001', nomeCompleto: 'Matemática Discreta', cor: '#4682B4', }, // Steel Blue
  { sigla: 'AAG001', nomeCompleto: 'Administração Geral', cor: '#B22222', }, // Firebrick
  { sigla: 'ILP010', nomeCompleto: 'Linguagem de Programação', cor: '#8B0000', }, // Dark Red
  { sigla: 'ILP029', nomeCompleto: 'Linguagem de Programação II - Linguagem Visual Basic (VB)', cor: '#2E8B57', }, // Sea Green
  { sigla: 'LPO001', nomeCompleto: 'Comunicação e Expressão', cor: '#556B2F', }, // Dark Olive Green
  { sigla: 'MCA002', nomeCompleto: 'Cálculo', cor: '#8A2BE2', }, // Blue Violet
  { sigla: 'CCG001', nomeCompleto: 'Contabilidade', cor: '#9932CC', }, // Dark Orchid
  { sigla: 'IED001', nomeCompleto: 'Estruturas de Dados', cor: '#8B4513', }, // Saddle Brown
  { sigla: 'IHC001', nomeCompleto: 'Interação Humano Computador', cor: '#5F9EA0', }, // Cadet Blue
  { sigla: 'IHW100', nomeCompleto: 'Laboratório de Hardware', cor: '#8B008B', }, // Dark Magenta
  { sigla: 'ISO100', nomeCompleto: 'Sistemas Operacionais I', cor: '#A52A2A', }, // Brown
  { sigla: 'LIN100', nomeCompleto: 'Inglês I', cor: '#2F4F4F', }, // Dark Slate Gray
  { sigla: 'CEF100', nomeCompleto: 'Economia e Finanças', cor: '#6A5ACD', }, // Slate Blue
  { sigla: 'IBD002', nomeCompleto: 'Banco de Dados', cor: '#483D8B', }, // Dark Slate Blue
  { sigla: 'IES100', nomeCompleto: 'Engenharia de Software I', cor: '#008080', }, // Teal
  { sigla: 'ILP007', nomeCompleto: 'Programação Orientada a Objetos', cor: '#4682B4', }, // Steel Blue
  { sigla: 'ISO200', nomeCompleto: 'Sistemas Operacionais II', cor: '#B22222', }, // Firebrick
  { sigla: 'LIN200', nomeCompleto: 'Inglês II', cor: '#8B0000', }, // Dark Red
  { sigla: 'HST002', nomeCompleto: 'Sociedade e Tecnologia', cor: '#2E8B57', }, // Sea Green
  { sigla: 'IBD100', nomeCompleto: 'Laboratório de Banco de Dados (Escolha 1)', cor: '#556B2F', }, // Dark Olive Green
  { sigla: 'IES200', nomeCompleto: 'Engenharia de Software II', cor: '#8A2BE2', }, // Blue Violet
  { sigla: 'ILP023', nomeCompleto: 'Programação para WEB', cor: '#9932CC', }, // Dark Orchid
  { sigla: 'ISD001', nomeCompleto: 'Sistemas Distribuídos', cor: '#8B4513', }, // Saddle Brown
  { sigla: 'LIN300', nomeCompleto: 'Inglês III', cor: '#5F9EA0', }, // Cadet Blue
  { sigla: 'MET100', nomeCompleto: 'Estatística Aplicada', cor: '#8B008B', }, // Dark Magenta
  { sigla: 'AGO005', nomeCompleto: 'Gestão de Projetos', cor: '#A52A2A', }, // Brown
  { sigla: 'IES300', nomeCompleto: 'Engenharia de Software III', cor: '#2F4F4F', }, // Dark Slate Gray
  { sigla: 'IRC008', nomeCompleto: 'Redes de Computadores', cor: '#6A5ACD', }, // Slate Blue
  { sigla: 'ISG003', nomeCompleto: 'Segurança da Informação', cor: '#483D8B', }, // Dark Slate Blue
  { sigla: 'LIN400', nomeCompleto: 'Inglês IV', cor: '#008080', }, // Teal
  { sigla: 'MPL001', nomeCompleto: 'Programação Linear e Aplicações', cor: '#4682B4', }, // Steel Blue
  { sigla: 'AGR101', nomeCompleto: 'Gestão de Equipes', cor: '#B22222', }, // Firebrick
  { sigla: 'CEE002', nomeCompleto: 'Empreendedorismo', cor: '#8B0000', }, // Dark Red
  { sigla: 'IES301', nomeCompleto: 'Laboratório de Engenharia de Software', cor: '#2E8B57', }, // Sea Green
  { sigla: 'IRC100', nomeCompleto: 'Laboratório de Redes (Escolha 2)', cor: '#556B2F', }, // Dark Olive Green
  { sigla: 'ITE002', nomeCompleto: 'Tópicos Especiais em Informática (Escolha 2)', cor: '#8A2BE2', }, // Blue Violet
  { sigla: 'LIN500', nomeCompleto: 'Inglês V', cor: '#9932CC', }, // Dark Orchid
  { sigla: 'TTG001', nomeCompleto: 'Metodologia da Pesquisa Científico-Tecnológica', cor: '#8B4513', }, // Saddle Brown
  { sigla: 'TTG003', nomeCompleto: 'Trabalho de Graduação I', cor: '#5F9EA0', }, // Cadet Blue
  { sigla: 'HSO003', nomeCompleto: 'Ética e Responsabilidade Profissional', cor: '#8B008B', }, // Dark Magenta
  { sigla: 'IIA002', nomeCompleto: 'Inteligência Artificial (Escolha 3)', cor: '#A52A2A', }, // Brown
  { sigla: 'ISA002', nomeCompleto: 'Auditoria de Sistemas (Escolha 3)', cor: '#2F4F4F', }, // Dark Slate Gray
  { sigla: 'ITI004', nomeCompleto: 'Gestão e Governança de Tecnologia da Informação', cor: '#6A5ACD', }, // Slate Blue
  { sigla: 'LIN600', nomeCompleto: 'Inglês VI', cor: '#483D8B', }, // Dark Slate Blue
  { sigla: 'TES001', nomeCompleto: 'Estágio Supervisionado', cor: '#008080', }, // Teal
  { sigla: 'TTG103', nomeCompleto: 'Trabalho de Graduação II', cor: '#4682B4', }, // Steel Blue
]
