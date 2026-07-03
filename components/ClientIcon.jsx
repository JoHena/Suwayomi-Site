export function ClientIcon({ label, color, size = 48 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: color,
        color: '#fff',
        fontSize: size * 0.34,
        fontWeight: 700,
        letterSpacing: '0.01em',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        flexShrink: 0
      }}
    >
      {label}
    </span>
  )
}
