
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
  },
  forces: {
    easy: [
      {
        type: "mcq",
        question: "What is the SI unit of force?",
        options: ["Watt", "Pascal", "Newton", "Joule"],
        answer: "Newton"
      },
      {
        type: "short",
        question: "State Newton's First Law of Motion."
      },
      {
        type: "long",
        question: "You are provided with a trolley, a ramp, and a light gate. Explain how you would investigate the relationship between force and acceleration. Include a method, what you would measure, and how you would analyse your data."
      }
    ]
  },
  electricity: {
    easy: [
      {
        type: "mcq",
        question: "Which material is a good conductor of electricity?",
        options: ["Plastic", "Copper", "Glass", "Wood"],
        answer: "Copper"
      },
      {
        type: "short",
        question: "State Ohm's Law."
      },
      {
        type: "long",
        question: "Describe how you would investigate the I-V characteristics of a filament lamp, including the apparatus and method."
      }
    ]
  },
  waves: {
    easy: [
      {
        type: "mcq",
        question: "What is the unit of frequency?",
        options: ["Hz", "s", "m/s", "J"],
        answer: "Hz"
      },
      {
        type: "short",
        question: "Define wavelength."
      },
      {
        type: "long",
        question: "Explain how you would measure the speed of sound in air using a pair of microphones and an oscilloscope."
      }
    ]
  },
  alevel_mechanics: {
    easy: [
      {
        type: "mcq",
        question: "What is the definition of momentum?",
        options: ["Force × Distance", "Mass × Velocity", "Mass ÷ Acceleration", "Velocity × Time"],
        answer: "Mass × Velocity"
      },
      {
        type: "short",
        question: "State the principle of conservation of momentum."
      },
      {
        type: "long",
        question: "A trolleys experiment is used to verify Newton's Second Law. Describe the setup and data analysis you would use."
      }
    ]
  },
  ib_fields: {
    easy: [
      {
        type: "mcq",
        question: "Which of the following describes an electric field?",
        options: ["A region where a magnetic force is felt", "A region where a charge experiences a force", "A region where gravity acts", "A vacuum"],
        answer: "A region where a charge experiences a force"
      },
      {
        type: "short",
        question: "State Coulomb's Law."
      },
      {
        type: "long",
        question: "Describe how you would map the electric field lines between two charged parallel plates."
      }
    ]
  },
  ib_physics: {
    easy: [
      {
        type: "mcq",
        question: "Which topic in IB Physics involves Galilean and special relativity?",
        options: ["Thermodynamics", "Rigid body mechanics", "Relativity", "Nuclear decay"],
        answer: "Relativity"
      },
      {
        type: "short",
        question: "Define the Doppler effect as studied in IB Physics."
      },
      {
        type: "long",
        question: "Discuss the difference between fission and fusion with reference to stellar processes."
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
          <option value="forces">GCSE: Forces</option>
          <option value="electricity">GCSE: Electricity</option>
          <option value="waves">GCSE: Waves</option>
          <option value="alevel_mechanics">A-Level: Mechanics</option>
          <option value="ib_fields">IB: Fields</option>
          <option value="ib_physics">IB: Core Topics</option>
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
