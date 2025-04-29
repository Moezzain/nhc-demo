import StarRating from "@/components/StarRating"
import Image from "next/image"

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    return res.json()
  }
  
  export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: productId } = await params;
    const product = await getProduct(productId)
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-['Inter'] font-medium text-[30px] leading-[100%] text-[#285F9D] text-center mb-8">
            {product.title}
          </h1>
  
          <div className="flex justify-center mb-8">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={350}
              height={250}
              className="rounded-[10px]"
            />
          </div>
  
          <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-8 max-w-2xl mx-auto">
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black">
                Price: <span className="text-[#285F9D]">${product.price}</span>
              </p>
            </div>
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black">
                Discount Percentage: <span className="text-[#285F9D]">{product.discountPercentage}%</span>
              </p>
            </div>
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black inline-flex items-center gap-2">
                Rating: <StarRating rating={product.rating} />
              </p>
            </div>
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black">
                Stock: <span className="text-[#285F9D]">{product.stock}</span>
              </p>
            </div>
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black">
                Brand: <span className="text-[#285F9D]">{product.brand}</span>
              </p>
            </div>
            <div className='pl-16'>
              <p className="font-['Inter'] font-medium text-[16px] leading-[100%] text-black">
                Category: <span className="text-[#285F9D]">{product.category}</span>
              </p>
            </div>
          </div>
  
          <div className="mb-8">
            <h2 className="font-['Inter'] font-normal text-[18px] leading-[100%] text-black mb-4">
              Description
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] leading-[23px] text-[#7F7F7F] mb-8">
              {product.description}
            </p>
            <h2 className="font-['Inter'] font-normal text-[18px] leading-[100%] text-black mb-4">
            Product Images
            </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {product.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square relative">
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  width={218}
                  height={200}
                  className="rounded-lg w-[218px] h-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
  } 