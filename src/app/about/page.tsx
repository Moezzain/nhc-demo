import Image from 'next/image'

export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="Logo" width={200} height={60} />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
  
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }