function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var qwe = document.querySelectorAll(`ul.ranked-list li`)
  for (var i = 0; i < qwe.length; i++) {
    var initval = parseInt(qwe[i].innerHTML);
    qwe[i].innerHTML = initval + parseInt(n);
  }
}


function deepestChild() {
  var string = 'div'
  var childnode = document.querySelector(string)
  while (!childnode.hasChildNodes()) {
    string += ' div'
    childnode = document.querySelector(string)
  }
  return document.querySelector(string)
}
