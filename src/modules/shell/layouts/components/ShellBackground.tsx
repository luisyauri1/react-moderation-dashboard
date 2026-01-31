export function ShellBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-visible">
      <div className="absolute -top-52 left-1/2 h-[820px] w-[980px] -translate-x-1/2 rounded-full bg-(--primary) blur-3xl opacity-16" />

      <div className="absolute -bottom-72 right-[-320px] h-[900px] w-[900px] rounded-full bg-(--accent) blur-3xl opacity-14" />

      <div className="absolute top-24 left-[-360px] h-[880px] w-[880px] rounded-full bg-(--primary-soft) blur-3xl opacity-12" />

      <div className="absolute -bottom-64 left-[-300px] h-[760px] w-[760px] rounded-full bg-(--bg-elevated) blur-3xl opacity-22" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1100px 620px at 50% 20%, transparent 0%, var(--bg-root) 70%)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-(--bg-root) opacity-50" />

      <div className="absolute inset-0 opacity-22">
        <div
          className="h-full w-full [background-size:26px_26px]"
          style={{
            backgroundImage:
              'linear-gradient(to_right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to_bottom, var(--border-subtle) 1px, transparent 1px)',
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-12">
        <div
          className="h-full w-full [background-size:20px_20px]"
          style={{
            backgroundImage:
              'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
          }}
        />
      </div>
    </div>
  )
}
