import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <span className="inline-flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star 
            key={index} 
            className="fill-yellow-400 text-yellow-400" 
            width={21.63} 
            height={20.59} 
          />
        } else if (index === fullStars && hasHalfStar) {
          return <StarHalf 
            key={index} 
            className="fill-yellow-400 text-yellow-400" 
            width={21.63} 
            height={20.59} 
          />
        }
        return <Star 
          key={index} 
          className="fill-[#A6A6A8] text-[#A6A6A8]" 
          width={21.63} 
          height={20.59} 
        />
      })}
    </span>
  )
}