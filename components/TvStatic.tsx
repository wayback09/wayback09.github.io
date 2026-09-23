"use client"

import { useEffect, useRef } from "react"

const TvStatic = ({
  opacity = 0.07,
  fps = 12,
}: {
  opacity?: number
  fps?: number
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const W = 160
    const H = 90
    let raf = 0
    let last = 0
    const interval = 1000 / fps

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw)
      if (time - last < interval) return
      last = time

      const frame = ctx.createImageData(W, H)
      const data = frame.data
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = 255
      }
      ctx.putImageData(frame, 0, 0)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [fps])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
    >
      <canvas
        ref={canvasRef}
        width={160}
        height={90}
        style={{ opacity }}
        className="tv-static-canvas h-full w-full object-cover"
      />
      <div className="tv-scanlines absolute inset-0" />
      <div className="tv-vignette absolute inset-0" />
    </div>
  )
}

export default TvStatic
