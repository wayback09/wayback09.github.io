const CrtOverlay = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
    <div className="tv-scanlines absolute inset-0" />
    <div className="tv-vignette absolute inset-0" />
  </div>
)

export default CrtOverlay
