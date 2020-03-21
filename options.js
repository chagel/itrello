function saveOptions(e) {
  browser.storage.sync.set({
    boards: document.querySelector("#boards").value
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get('boards');
  gettingItem.then((res) => {
    document.querySelector("#boards").value = res.boards || 'Staging|Backlog|Doing|Testing';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
