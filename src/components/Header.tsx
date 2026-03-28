import Link from 'next/link'
export default function Header(){
  return (
    <header className="p-6 border-b">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold"><Link href="/">Brainstorm Ideas</Link></h1>
        <nav className="space-x-4">
          <Link href="/plan">Plan</Link>
          <Link href="/about">About</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
