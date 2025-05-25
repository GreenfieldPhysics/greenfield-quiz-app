
const questions = {
  energy: {
    easy: [
      {
        type: "mcq",
        question: "Which of the following is a store of energy in Physics?",
        options: ["Friction", "Kinetic energy", "Heat loss", "Sound wave"],
        answer: "Kinetic energy"
      },
      {
        type: "short",
        question: "State the unit of energy used in Physics."
      },
      {
        type: "long",
        question: "Describe an investigation to determine the specific heat capacity of a material. Include the equipment you would use and how you would ensure your results are accurate."
      }
    ]
  }
};

export default function QuizApp() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div style="background:white;padding:20px;border-radius:10px;box-shadow:0 0 10px #ccc;max-width:700px;margin:auto;">
      <h1>Physics Quiz Generator</h1>
      <label>Topic:
        <select id="topic">
          <option value="energy">GCSE: Energy</option>
        </select>
      </label>
      <br/><br/>
      <label>Difficulty:
        <select id="difficulty">
          <option value="easy">Easy</option>
        </select>
      </label>
      <br/><br/>
      <button id="generate">Generate Quiz</button>
      <div id="quiz" style="margin-top:20px;"></div>
    </div>
  `;

  container.querySelector('#generate').onclick = () => {
    const topic = container.querySelector('#topic').value;
    const difficulty = container.querySelector('#difficulty').value;
    const output = questions[topic][difficulty];
    const quizDiv = container.querySelector('#quiz');

    quizDiv.innerHTML = output.map((q, idx) => {
      let out = `<strong>Q${idx + 1} (${q.type.toUpperCase()}):</strong> ${q.question}`;
      if (q.type === 'mcq') {
        out += '<ul>' + q.options.map(opt => `<li>${opt}</li>`).join('') + '</ul>';
      }
      return `<div style="margin-bottom:15px;">${out}</div>`;
    }).join('');
  };

  return container;
}
