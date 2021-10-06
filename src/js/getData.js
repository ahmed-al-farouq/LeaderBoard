const getData = async () => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6r99l8kbAG2oZF3XXVUS/scores');
  const result = fetchData.json();
  const listContainer = document.getElementById('body');
  return result.then((data) => {
    console.log(data.result.sort((a, b) => b - a));
    listContainer.innerHTML = '';
    return data.result.length
      ? data.result.map((item) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.user}: ${item.score}`;
        return listContainer.append(li);
      })
      : data.result;
  });
};
export default getData;