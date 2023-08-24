import React from 'react';

const projects = [
  { id: 1, title: 'Pactage1' },
  { id: 2, title: 'package2' },
  { id: 3, title: 'package3' },

  
];

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-lg font-semibold">
            My App
          </a>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
            >
              Projects
            </button>
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
        >
          Return
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
