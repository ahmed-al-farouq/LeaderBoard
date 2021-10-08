import avatar1 from '../img/avatar3.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar1.png';
import avatar4 from '../img/avatar.png';

const sortScores = (result) => {
  const scores = [];
  result.map((item) => scores.push(item.score));
  return scores.sort((a, b) => b - a);
};

const getScoresWithNames = (result, sortedScores) => {
  const finalResult = [];
  sortedScores.map((score) => result.map((item) => (item.score === score
    ? finalResult.push({ user: item.user, score })
    : false)));
  return finalResult;
};

const getData = async () => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6r99l8kbAG2oZF3XXVUS/scores');
  const result = fetchData.json();
  const listContainer = document.getElementById('body');
  listContainer.style.display = 'grid';
  listContainer.style.height = '540px';
  const avatars = [avatar2, avatar3, avatar4];
  // Get data
  return result.then((data) => {
    listContainer.innerHTML = '';
    const liContainer = document.createElement('li');
    // Sort scores
    const sortedScores = sortScores(data.result);
    const finallData = getScoresWithNames(data.result, sortedScores);
    // Display result
    return finallData.length
      ? finallData.map((item, index) => {
        const li = document.createElement('li');
        if (index === 0) {
          li.innerHTML = `
          <span class="top">Top</span> Score
          <img src=${avatar1} alt=""/>
          <span class="name"> ${item.user}</span>
          <span class="score"> ${item.score}</span>
          `;
          li.className = 'top-score';
          return listContainer.append(li);
        }
        li.innerHTML = `
          <img src=${avatars[Math.round(Math.random() * 2.5)]} alt=""/>
          <span class="name"> ${item.user}</span>
          <span class="score"> ${item.score}</span>
          `;
        liContainer.className = 'other-scores';
        liContainer.append(li);
        return listContainer.append(liContainer);
      })
      : finallData;
  });
};
export default getData;