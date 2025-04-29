'use client'

import { Input } from "@/components/ui/input"
import { Search, Loader } from "lucide-react"
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
    const [hasSearched, setHasSearched] = useState(false)

    const debouncedSearch = useDebounce(searchQuery)

    useEffect(() => {
        if (debouncedSearch) {
            handleSearch()
        }
    }, [debouncedSearch])

    const handleSearch = async () => {
        setLoading(true)
        setHasSearched(true)
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
            <div className="flex flex-col items-center">
                {/* Search input container */}
                <div className={
                    !debouncedSearch
                        ? "flex flex-col items-start justify-center min-h-[60vh] w-full max-w-xl space-y-6"
                        : "w-full max-w-xl space-y-6"
                }>
                    <h2 className="font-['Inter'] font-medium text-[18px] leading-[100%] mb-4 text-[#285F9D] self-start">
                        Search products by keyword
                    </h2>
                    <div className="relative w-full">
                        <Input
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                if (e.target.value === "") {
                                    setHasSearched(false)
                                    setProducts([])
                                }
                            }}
                            className="pl-4 pr-10 bg-[#F3F3F3] border-[#006483D1]"
                        />
                        <Search className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#BCB3B3]" />
                    </div>

                    {hasSearched && (
                        <p className="text-start text-gray-600 self-start">
                            Total results count: <span className="font-bold text-[#285F9D]">{products.length}</span>
                        </p>
                    )}
                </div>

                {/* Cards container with wider width */}
                {loading ? (
                    <div className="flex justify-center w-full max-w-xl">
                        <Loader className="h-8 w-8 animate-spin text-[#BCB3B3]" />
                    </div>
                ) : hasSearched ? (
                    products.length > 0 ? (
                        <div className="w-full max-w-5xl mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <EmptyState />
                    )
                ) : null}
            </div>
        </div>
    )
}