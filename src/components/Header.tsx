'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header style={{ background: "#D9D9D91F" }} className="border-b">
      <nav className=" mx-5 gap-20 px-4 h-20 flex items-center justify-start">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Logo" width={60} height={60} />
        </Link>
        <div className="flex gap-14">
          <Link
            href="/products"
            style={{
              color: pathname.includes('/products') ? '#285F9D' : 'black'
            }}
            className="hover:text-gray-400 text-[16px] font-['Abel']"
          >
            Products
          </Link>
          <Link
            href="/about"
            style={{
              color: pathname.includes('/about') ? '#285F9D' : 'black'
            }}
            className="hover:text-gray-400 text-[16px] font-['Abel']"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}