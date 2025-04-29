import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex gap-4">
          <Image src="/logo1.png" alt="Logo 1" width={80} height={30} />
          <Image src="/logo2.png" alt="Logo 2" width={80} height={30} />
        </div>
        <p className="text-sm text-gray-600">
          All rights reserved © 2022 - Developed and operated by National Housing
        </p>
      </div>
    </footer>
  )
}