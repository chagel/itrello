const TITLE = "Enable iTrello to personalize Trello ";

function redraw(tab) {
  browser.tabs.executeScript({file: "app.js"})
}

function initializePageAction(tab) {
  if ((tab.url).match(/trello\.com/g)) {
    browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
    browser.pageAction.setTitle({tabId: tab.id, title: TITLE});
    browser.pageAction.show(tab.id);
  }
}

var gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

browser.pageAction.onClicked.addListener(redraw);
