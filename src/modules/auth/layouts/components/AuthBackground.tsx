export function AuthBackground() {
  return (
    <div className="pointer-events-none fixed inset-0">
      {/* Glows */}
      <div className="absolute -top-44 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-(--primary) opacity-25 blur-3xl" />
      <div className="absolute -bottom-52 left-1/4 h-140 w-140 rounded-full bg-(--accent) opacity-20 blur-3xl" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.08]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)]
          bg-size-[52px_52px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute inset-0 opacity-[0.10]
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]
        "
      />
    </div>
  )
}
