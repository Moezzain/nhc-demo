import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg">{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-square relative mb-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}