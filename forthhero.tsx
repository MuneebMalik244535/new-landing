import React from 'react'

export default function ForthHero() {
  return (
    <div className="min-h-screen bg-black text-white p-2 flex flex-col justify-center items-center">
      <div className="w-full -mt-80 max-w-[1000px] grid gap-6 md:grid-cols-4 text-center">
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/path/to/pizza-image.jpg" alt="Pizza" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Pizza</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/path/to/another-image.jpg" alt="Another" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Another Dish</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/path/to/yet-another-image.jpg" alt="Yet Another" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Yet Another</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/path/to/final-image.jpg" alt="Final" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Final Dish</div>
        </div>
      </div>
    </div>
  )
}
