🎨 Galeria Teal Aquarela - Mini Loja Fullstack
📖 Sobre o Projeto
Este projeto foi desenvolvido como parte do meu aprendizado em Desenvolvimento Web Fullstack. A ideia foi criar uma aplicação de vitrine virtual interativa para um ateliê de arte, focando na experiência do usuário (UX) e no consumo de dados externos.

A aplicação possui duas interfaces principais:

Vitrine (Loja): Onde os clientes podem visualizar as obras, ver detalhes em janelas modais e interagir com a galeria.

Painel Administrativo: Uma área restrita para o lojista cadastrar novos produtos no estoque em tempo real.

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.

PrimeReact: Biblioteca de componentes de UI de alto nível para botões, cards e modais.

PrimeFlex: Sistema de CSS baseado em utilitários para garantir que o site seja responsivo (funciona em celular e PC).

Axios: Para realizar requisições HTTP e consumir a API de produtos.

Fake Store API: Utilizada como base de dados inicial para popular a loja.

🚀 Funcionalidades
[x] Consumo de API: Busca automática de produtos ao carregar a página.

[x] Sistema de Detalhes: Uso de Dialog (modais) para exibir informações completas de cada obra sem mudar de página.

[x] Cadastro em Tempo Real: Formulário que utiliza o estado do React (useState) para adicionar novos itens instantaneamente à vitrine.

[x] Design Responsivo: Layout que se adapta a diferentes tamanhos de tela usando o sistema de grid do PrimeFlex.

[x] Navegação de Estados: Alternância entre visão do cliente e visão do administrador.

📂 Estrutura de Arquivos
Plaintext

src/
 ├── components/
 │    ├── ProductCard.js  # Card individual e Modal de detalhes
 │    ├── ProductForm.js  # Formulário de cadastro de novos itens
 │    └── ProductList.js  # Lógica de busca na API e mapeamento da lista
 └── App.js               # Gestão de estados globais, navegação e estilo teal
🔧 Como rodar o projeto
Para clonar e rodar esta aplicação em sua máquina, você precisará do Git e Node.js instalados.

Bash

# Clone este repositório
$ git clone https://github.com/seu-usuario/mini-loja-virtual

# Acesse a pasta do projeto
$ cd mini-loja-virtual

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
💡 Aprendizados
Durante o desenvolvimento deste projeto, pude aprofundar meus conhecimentos em:

Hooks do React: Especialmente useState para dados dinâmicos e useEffect para controle de ciclos de vida.

Props: Passagem de funções e dados entre componentes pais e filhos.

Tratamento de Dados: Como transformar dados brutos de uma API para que se encaixem no tema e na necessidade do meu negócio (Nicho de Arte).

🎨 Inspiração do Tema
Escolhi o tema de Aquarela e a cor Teal para transmitir uma sensação de calma, criatividade e sofisticação, fugindo dos layouts de e-commerce tradicionais.