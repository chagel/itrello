console.debug("Hide boards")

board = document.getElementById("board")

var gettingItem = browser.storage.sync.get('boards');
gettingItem.then((res) => {
  let re = new RegExp(res.boards, 'g')
  for (let i=0; i < board.children.length; i++) {
    list = board.children[i]
    title = list.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
    if(title && !title.innerText.match(re)) {
      list.style.display = 'none'
    }
  }
})


console.debug("Compact cards")
cards = document.getElementsByClassName("list-card-cover")
for (let i=0; i < cards.length; i++) {
  cards[i].style.display = 'none'
}

console.debug("Hide badges")
badges = document.getElementsByClassName("badges")
for (let i=0; i < badges.length; i++) {
  badges[i].style.display = 'none'
}

console.debug("Show card id")
ids = document.getElementsByClassName("card-short-id")
for (let i=0; i < ids.length; i++) {
  ids[i].classList.remove('hide')
  ids[i].style.fontWeight = '600'
}

