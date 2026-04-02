# ⏱️ Cronômetro

Aplicação web de cronômetro profissional com suporte a **marcação de tempos**, histórico de voltas e interface totalmente responsiva.

---

## 🚀 Demonstração
Link do projeto: https://eduardoadf-dev.github.io/Cron-metro/

## 📋 Sobre o projeto

Um **Cronômetro** digital que exibe tempo em horas, minutos, segundos e centésimos de segundo. O usuário pode iniciar, pausar, resetar e marcar tempos durante a contagem, com um histórico organizado exibido na tela.

---

## ✨ Funcionalidades

- ▶️ Iniciar, pausar e continuar a contagem do tempo
- 🚩 Marcar tempos durante a contagem (somente com o cronômetro rodando)
- 🔄 Resetar o cronômetro e limpar todo o histórico
- 🗑️ Limpar apenas o histórico de marcações sem parar o cronômetro
- 📜 Lista de marcações com scroll e animação de entrada
- 📱 Layout responsivo adaptado para dispositivos móveis

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| HTML5 | Estrutura da página |
| CSS3 | Estilização, animações e responsividade |
| JavaScript | Lógica do cronômetro e interações |
| Font Awesome 6 | Ícones dos botões |

---

## 📁 Estrutura do projeto

```
cronometro-pro/
├── index.html
├── style.css
└── script.js
```

---

## 🎮 Como usar

| Botão | Ação |
|-------|------|
| ▶️ Play / ⏸️ Pause | Inicia ou pausa o cronômetro |
| 🚩 Flag | Marca o tempo atual (disponível apenas com o cronômetro rodando) |
| 🔄 Reset | Zera o cronômetro e apaga todas as marcações |
| 🗑️ Lixeira | Limpa apenas o histórico de marcações |

> ⚠️ O botão de marcar tempo fica **desativado** enquanto o cronômetro estiver pausado ou zerado.

---

## ⚙️ Detalhes técnicos

- O tempo é calculado com base em `Date.now()`, garantindo **precisão mesmo em abas em segundo plano**
- A exibição usa `tabular-nums` para evitar que os números "balancem" durante a contagem
- As marcações são inseridas no topo da lista com animação `slideIn`
- A barra de scroll do histórico é estilizada com CSS personalizado (`::-webkit-scrollbar`)
  
  
---

## 📱 Responsividade

A aplicação é adaptada para telas menores que **450px**, com ajustes no tamanho do círculo do timer, botões maiores para facilitar o toque e layout fluido.

---

```javascript
startTime = Date.now() - elapsedTime;
// Garante que o cronômetro seja preciso independente da carga do processador.

