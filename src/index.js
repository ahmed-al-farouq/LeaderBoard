import './main.css';

const createDOM = () => {
  const structure = `
  <main>
    <h1 class="title">Leader Board</h1>
    <div class="scores">
      <div class="header">
        <h2>Recent Scores</h2>
        <button>
          Refresh
        </button>
      </div>
      <ul class="body">
        <li>name: 100</li>
        <li>name: 20</li>
        <li>name: 30</li>
        <li>name: 50</li>
        <li>name: 40</li>
        <li>name: 60</li>
        <li>name: 90</li>
      </ul>
    </div>  
    <form action="#" method="post" class="add-score">
      <h2>Add your score</h2>
      <div>
        <input type="text" name="name" id="name" placeholder="Your Name"/>
        <input type="text" name="score" id="score" placeholder="Your Score"/>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  </main>
  `;
  document.body.innerHTML = structure;
  return true;
};

createDOM();