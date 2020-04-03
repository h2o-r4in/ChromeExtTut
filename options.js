  let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.style.backgroundColor = item;

      button.addEventListener('click', function() {
        button.style.backgroundColor = "#000000";

        chrome.storage.sync.set({color: item}, function() {
          console.log('color is ' + item);
        })
      });


      button.addEventListener('mouseover', function() {
        button.style.backgroundColor = "#000000";
      });


      button.addEventListener('mouseout', function() {
        button.style.backgroundColor = item;
      });

      page.appendChild(button);
    }
  }
  constructOptions(kButtonColors);