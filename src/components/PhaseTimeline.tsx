export default function PhaseTimeline(){
  const phases = ['Research','MVP','Product-Market Fit','Growth','Scale']
  return (
    <ol className="space-y-4">
      {phases.map((p,i)=> (
        <li key={i} className="p-4 border rounded"> <strong>{p}</strong></li>
      ))}
    </ol>
  )
}
