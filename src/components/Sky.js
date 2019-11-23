import React, { useRef, useEffect } from "react"

export default function Sky() {
  const refContainer = useRef(null)

  useEffect(() => {
    if (!refContainer.current) return

    const maxOpacity = 0.7
    const canvas = refContainer.current
    const ctx = canvas.getContext("2d")
    let x
    let y
    let number
    let currentOpacity

    canvas.width = window.innerWidth
    canvas.height = 800

    const state = new Array(canvas.width)

    for (x = 0; x < canvas.width; x++) {
      state[x] = new Array(canvas.height)

      for (y = 0; y < canvas.height; y += 1) {
        if (Math.random() * 10 < 9.2) {
          state[x][y] = false
        } else {
          number = Math.floor(Math.random() * 100) + 150
          currentOpacity = ((canvas.height - y) / canvas.height) * maxOpacity
          state[x][y] = `rgba(${number},${number},255,${currentOpacity})`
        }
      }
    }

    function redraw() {
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fillRect(x, y, canvas.width, canvas.height)

      for (x = 0; x < canvas.width; x += 1) {
        for (y = 0; y < canvas.height; y += 1) {
          if (state[x][y]) {
            ctx.fillStyle = state[x][y]
            ctx.fillRect(x, y, 1, 1)
          }
        }
      }
    }

    window.requestAnimationFrame(redraw)

    canvas.style.position = "fixed"
    canvas.style.top = 0
    canvas.style.left = 0
  }, [])

  return <canvas ref={refContainer}></canvas>
}
