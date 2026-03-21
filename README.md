# ⏱️ Cronômetro

Um cronômetro digital de alta precisão desenvolvido com JavaScript puro (Vanilla JS), focado em performance, design responsivo e experiência do usuário.

## 🚀 Demonstração
(https://eduardoadf-dev.github.io/Cron-metro/)

## ✨ Funcionalidades
- **Precisão Real:** Diferente de contadores comuns, este projeto utiliza a diferença de `Date.now()` para garantir que o tempo não sofra atrasos do navegador.
- **Sistema de Marcas:** Permite registrar voltas ou momentos específicos sem pausar a contagem.
- **Estado Dinâmico:** Botões que habilitam/desabilitam conforme o fluxo (ex: não é possível marcar tempo com o cronômetro parado).
- **Design Responsivo:** Totalmente adaptado para dispositivos móveis e desktop.
- **Persistência Visual:** Formatação tabular-nums no CSS para evitar que os números "balancem" durante a contagem.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura semântica.
* **CSS3:** Layout moderno com Flexbox, Gradientes e Animações de entrada (`keyframes`).
* **JavaScript (ES6+):** Lógica de tempo, manipulação de DOM e gerenciamento de intervalos.
* **Font Awesome:** Ícones vetoriais para a interface.

## 🧠 Desafios Técnicos Superados
Neste projeto, foquei em resolver o problema do *drift* (atraso) do `setInterval`. Em vez de simplesmente incrementar uma variável, a lógica calcula a diferença entre o momento atual e o momento de início:

```javascript
startTime = Date.now() - elapsedTime;
// Garante que o cronômetro seja preciso independente da carga do processador.
