const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilo orientado a objetos",
        "Um software de edição de texto",
        "Um sistema operacional",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função principal do JavaScript em uma página da web?",
      respostas: [
        "Estilizar a página",
        "Adicionar interatividade",
        "Fazer backup de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar = ;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um método de ordenação",
        "Um bloco de código reutilizável",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===", 
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'console.log()'?",
      respostas: [
        "Registrar mensagens de erro",
        "Imprimir valores no console",
        "Executar cálculos matemáticos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "-",
        "&",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Uma instrução para sair do programa",
        "Um tipo de variável",
        "Uma estrutura para repetir um bloco de código",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adicionar estilos CSS",
        "Adicionar funcionalidades de interação a um elemento HTML",
        "Criar uma nova variável",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // loop ou repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    
    for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }
       
       
       quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }