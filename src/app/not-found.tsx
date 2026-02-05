
'use client' 
import Link from 'next/link'

export default function NotFound() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
       {" The page you're looking for doesn't exist or has been moved."}
      </p>
      <button>
        <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90"
      >
        Go back to the Home Page
      </Link>
      </button>
    </div>
  )
}