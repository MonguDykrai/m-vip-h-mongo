const html = document.documentElement || document.querySelector('html')

let width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth
console.log(width)

if (width <= 540) {
  html.style.fontSize = width / 10 + 'px'
} else {
  html.style.fontSize = '54px'
}


window.onresize = function () {
  width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  console.log(width)

  if (width <= 540) {
    html.style.fontSize = width / 10 + 'px'
  } else {
    html.style.fontSize = '54px'
  }
}