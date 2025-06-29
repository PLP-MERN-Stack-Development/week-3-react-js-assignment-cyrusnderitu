import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <footer className="bg-gray-400 text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2023 MyApp. All rights reserved.</p>
          <ul className="list-inline mt-2">
            <li className="list-inline-item"><a href="/privacy" className="text-white">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="/terms" className="text-white">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer