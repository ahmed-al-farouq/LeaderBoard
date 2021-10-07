import './main.css';
import sendData from './js/sendData.js';
import getData from './js/getData.js';

const createDOM = () => {
  const structure = `
  <main>
    <h1 class="title">Leader Board</h1>
    <div class="scores">
      <div class="header">
        <h2>Recent Scores</h2>
        <button id="refresh">
          Refresh
        </button>
      </div>
      <ul class="body" id="body">
        <h2>Please, click on the refresh button above.</h2>
      </ul>
    </div>  
    <form action="#" method="post" class="add-score">
      <h2>Add your score</h2>
      <div>
        <input type="text" name="name" id="name" placeholder="Your Name"/>
        <input type="number" name="score" id="score" placeholder="Your Score"/>
        <input type="submit" value="Submit" id="submit"/>
      </div>
    </form>
  </main>
  <footer>
    Create By <span>&hearts;</span> Ahmed Al-Farouq
  </footer>
  `;
  document.body.innerHTML = structure;
  const refreshBtn = document.getElementById('refresh');
  refreshBtn.addEventListener('click', getData);
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    return sendData({ user, score });
  });
};

createDOM();