import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="shadow-[0px_4px_13px_0px_#00000040] overflow-hidden w-[301px] h-[312px] gap-1 py-2 justify-between rounded-[10px]">
      <div className="aspect-video relative p-1">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={285}
          height={150}
          className="w-[285px] h-[150px] object-cover"
        />
      </div>
      <CardContent className="px-3 space-y-2">
        <h3 className="font-['Inter'] text-[18px] leading-[100%] text-[#285F9D] font-[400]">
          {product.title}
        </h3>
        <p className="font-['Inter'] font-normal text-[14px] leading-[100%] text-[#7F7F7F] line-clamp-2 font-[400] mb-6">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-['Inter'] font-normal text-[16px] leading-[100%]">
            Price: <span className="text-[#285F9D]">${product.price}</span>
          </p>
          <Link 
            href={`/products/${product.id}`}
            className="no-underline"
          >
            <Button 
              className="w-[85px] h-[40px] bg-[#285F9D] text-white rounded-[5px] hover:bg-[#285F9D]/90 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = `/products/${product.id}`
              }}
            >
              More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}