'use strict'

const draw = document.querySelector('#draw')
const ctx = draw.getContext('2d')

// draw box width & height
draw.width = window.innerWidth
draw.height = window.innerHeight

// start position
let x1 = 0
let y1 = 0

// end position
let x2 = 0
let y2 = 0

let isMouseActive = false

draw.addEventListener('mousedown', start)
draw.addEventListener('mousemove', move)
draw.addEventListener('mouseup', stop)

function start (e) {
  isMouseActive = !isMouseActive

  x1 = e.offsetX
  y1 = e.offsetY

  ctx.lineWidth = Math.floor(Math.random() * 20) + 1
  ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
}

function move (e) {
  if (!isMouseActive) {
    return
  }

  x2 = e.offsetX
  y2 = e.offsetY

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()

  x1 = x2
  y1 = y2
}

function stop (e) {
  isMouseActive = !isMouseActive
}