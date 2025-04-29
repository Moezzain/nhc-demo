import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#292759] h-[129px] px-30 pb-3 flex items-end ">
      <div className="pt-10 pb-2 w-full">
        <div className="border-t border-[#F1F1F1] mb-3" />
        <div className="mx-auto flex items-center justify-between">
          <div className="flex gap-4">
          <Image src="/assets/images/white-logo.svg" alt="Logo 2" width={32} height={32} />
          <Image src="/assets/images/vision2030-white.svg" alt="Logo 1" width={32} height={32} />
          </div>
          <p className="text-sm text-white font-['Abel'] text-right leading-6 text-[14px] align-middle">
            All rights reserved © 2022 - Developed and operated by National Housing
          </p>
        </div>
      </div>
    </footer>
  )
}