import Image from "next/image"

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    return res.json()
  }
  
  export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold">${product.price}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-xl font-bold">{product.rating}/5</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Stock</p>
              <p className="text-xl font-bold">{product.stock}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Brand</p>
              <p className="text-xl font-bold">{product.brand}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Category</p>
              <p className="text-xl font-bold">{product.category}</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-600">Discount</p>
              <p className="text-xl font-bold">{product.discountPercentage}%</p>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 mb-8">{product.description}</p>
  
          <h2 className="text-2xl font-bold mb-4">Product Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square relative">
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } 