import TrendsList from '@/components/TrendsList'
export default function Page(){
  const trends = ['AI-first experiences','Edge computing','Sustainability','Composable architectures','Privacy-preserving data']
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-4">Future Tech & Innovation</h1>
          <p className="text-lg mb-6">Practical guidance and a phased plan for new businesses building on emerging technologies.</p>
          <div className="flex gap-3">
            <a className="px-5 py-3 bg-blue-600 text-white rounded" href="/plan">See the plan</a>
            <a className="px-5 py-3 border rounded" href="/research">View research</a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Trends</h2>
        <TrendsList items={trends} />
      </section>
    </main>
  )
}
