const sendData = async (data = {}) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6r99l8kbAG2oZF3XXVUS/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  userInput.value = '';
  scoreInput.value = '';
};

export default sendData;