export default function Alert({ type = 'info', message }) {
  const colors = {
    info: '#007bff',
    warning: '#ffc107',
    danger: '#dc3545'
  }
  return (
    <div style={{ backgroundColor: colors[type], color: 'white', padding: '1rem', borderRadius: '0.25rem', margin: '1rem 0' }}>
      {message}
    </div>
  )
}