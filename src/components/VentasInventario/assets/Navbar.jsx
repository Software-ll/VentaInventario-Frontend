import React from 'react'

export default function Navbar() {
  return (
    <div class='py-3 bg-[#edf4f6]'>
      <div class="flex items-center mx-64 bg-white rounded-3xl " x-data="{ search: '' }">
        <div class="w-full">
          <input type="search" class="w-full px-4 text-gray-800 rounded-full focus:outline-none" placeholder="Que estas buscando?" x-model="search"/>
        </div>
        <div>
          <button type="submit" class="flex items-center bg-red-500 justify-center w-12 h-12 text-white rounded-r-3xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div >
  );
}