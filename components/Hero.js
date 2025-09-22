export default function Hero({ title, subtitle }) {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#32329f', color: 'white', borderRadius: '0.5rem', marginBottom: '2rem' }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}