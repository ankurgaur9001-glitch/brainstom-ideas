export default function TrendsList({items}:{items:string[]}){
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((t,i)=> <li key={i}>{t}</li>)}
    </ul>
  )
}
