import React from 'react'
import Button from '../components/Button';
function NotFound() {
    return (
      <div className="pt-24">
        <div className="min-h-[60vh] flex flex-col justify-center items-center container mx-auto px-4 py-12 text-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <Link to="/">
            <Button primary>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

export default NotFound