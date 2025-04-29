import Image from 'next/image'

export default function EmptyState() {
    return (
      <div className="text-center py-12 flex flex-col items-center justify-center w-full">
        <Image src="/assets/images/icons/empty-state-icon.svg" alt="No results" width={156} height={161} className="mb-[55px]" />
        <h3 className="font-['Inter'] font-normal text-[16px] leading-[27px] mb-2 text-center text-[#7F7F7F]">No results for your search!</h3>
        <p className="font-['Inter'] font-normal text-[16px] leading-[27px] text-[#7F7F7F] text-center">Try another keyword</p>
      </div>
    )
  }