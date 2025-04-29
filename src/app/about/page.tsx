import Image from 'next/image'

export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-8 mb-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex justify-center mb-8">
            <Image src="/assets/images/logo.svg" alt="Logo" width={241.87} height={250} />
          </div>
          
          <h1 className="font-['Abel'] font-normal text-[16px] leading-[31px] align-middle mb-4 text-[#285F9D]">
          About NHC National Housing Company
          </h1>
          <p className="font-['Abel'] font-normal text-[16px] leading-[31px] align-middle mb-8">
          NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH to be the investment arm of the initiatives and programs of the Ministry of Municipal and Rural Affairs and Housing in the real estate, residential and commercial sectors. Then the Company came under state ownership in May of the year 2020, after which it entered a new stage in its journey and became an effective enabler of solutions for the Saudi real estate market. To become a leader in the real estate development sector and enable the public and private sectors to develop strategic partnerships with them. NHC is also keen to provide quality projects across urban communities with modern designs and various housing solutions at reasonable prices that keep pace with the aspirations of the future generation and achieve quality of life, in partnership with experienced and efficient real estate developers.
          </p>
  
          <h2 className="font-['Abel'] font-normal text-[16px] leading-[31px] align-middle mb-4 text-[#285F9D]">
          National Housing Strategy
          </h2>
          <p className="font-['Abel'] font-normal text-[16px] leading-[31px] align-middle">
          The NHC Strategy aims for the Company to be an enabler of the real estate supply system by empowering the private sector to develop the real estate market and improve the professionalism of the services provided in it, thus offering broader horizons for the Company in enhancing the sustainability of its business and the work of the real estate supply system.          </p>
        </div>
      </div>
    )
  }