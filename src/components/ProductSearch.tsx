'use client'

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/useDebounce"
import ProductCard from "./ProductCard"
import EmptyState from "./EmptyProductState"

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  
  // Use the debounce hook
  const debouncedSearch = useDebounce(searchQuery)

  // Effect to trigger search when debounced value changes
  useEffect(() => {
    if (debouncedSearch) {
      handleSearch()
    }
  }, [debouncedSearch])

  const handleSearch = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${debouncedSearch}`)
      const data = await res.json()
      setProducts(data.products)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex gap-4">
          <Input 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // Removed onKeyPress since we're using debounce
          />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="phones">Phones</SelectItem>
              <SelectItem value="laptops">Laptops</SelectItem>
            </SelectContent>
          </Select>
          <button onClick={handleSearch} className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-center text-gray-600">
          Total results count: {products.length}
        </p>

        {loading ? (
          <div>Loading...</div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}