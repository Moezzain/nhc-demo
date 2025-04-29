import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </Link>
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-gray-600">Products</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
        </div>
      </nav>
    </header>
  )
}