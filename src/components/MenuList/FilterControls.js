import React from 'react'
import { Switch } from '@headlessui/react'

const FilterControls = ({ categories, selectedCategory, setSelectedCategory, vegMode, setVegMode }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6">
      <div className="flex flex-wrap space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border-b-2 ${
              selectedCategory === category
                ? 'border-yellow-500 text-black font-bold'
                : 'border-transparent text-gray-500'
            }`}
          >
            {category} 
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <span className="text-gray-700 mr-2">VEG MODE</span>
        <Switch
          checked={vegMode}
          onChange={setVegMode}
          className={`group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ${
            vegMode ? 'bg-green-500' : 'bg-gray-200'
          }`}
        >
          <span className="sr-only">Use Veg Mode</span>
          <span
            className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              vegMode ? 'translate-x-5' : 'translate-x-0'
            }`}
          >
            {/* Cross Icon when not selected */}
            <span
              aria-hidden="true"
              className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
                vegMode ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <svg fill="none" viewBox="0 0 12 12" className="h-4 w-3 text-gray-400">
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* Check Icon when selected */}
            <span
              aria-hidden="true"
              className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-100 ease-out ${
                vegMode ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <svg fill="currentColor" viewBox="0 0 12 12" className="h-3 w-3 text-green-600">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </Switch>
      </div>
    </div>
  )
}

export default FilterControls
