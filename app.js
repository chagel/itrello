function _toggleElementsByClass(className) {
  els = document.getElementsByClassName(className)
  for (let i=0; i < els.length; i++) {
    els[i].style.display = 'none'
  }
}

function toggleBoards() {
  console.debug("Hide boards")
  board = document.getElementById("board")

  var gettingItem = browser.storage.sync.get('boards');
  gettingItem.then((res) => {

    boards = res.boards
    if (boards == undefined) {
      boards = 'Staging|Backlog|Doing|Testing'
    }

    let re = new RegExp(boards, 'g')
    for (let i=0; i < board.children.length; i++) {
      list = board.children[i]
      title = list.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
      if(title && !title.innerText.match(re)) {
        list.style.display = 'none'
      }
    }
  })
}

function compactCards() {
  console.debug("Compact cards")
  _toggleElementsByClass("list-card-cover")
}

function toggleBadges() {
  console.debug("Hide badges")
  _toggleElementsByClass("badges")
}

function showCardIds() {
  console.debug("Show card id")
  ids = document.getElementsByClassName("card-short-id")
  for (let i=0; i < ids.length; i++) {
    ids[i].classList.remove('hide')
    ids[i].style.fontWeight = '600'
  }
}

function toggleStickers() {
  console.debug("Toggle stickers")
  _toggleElementsByClass("list-card-stickers-area")
}

toggleBoards()
compactCards()
toggleBadges()
showCardIds()
toggleStickers()

