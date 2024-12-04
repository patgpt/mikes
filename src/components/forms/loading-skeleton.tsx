
export default function LoadingSkeleton() {
  return (
    <div className='card w-96 bg-base-100 p-6 shadow-xl'>
      <div className="skeleton h-8 w-32 mb-4"></div>
      <div className="space-y-4">
        <div>
          <div className="skeleton h-4 w-20 mb-2"></div>
          <div className="skeleton h-12 w-full"></div>
        </div>
        <div>
          <div className="skeleton h-4 w-20 mb-2"></div>
          <div className="skeleton h-12 w-full"></div>
        </div>
        <div>
          <div className="skeleton h-4 w-20 mb-2"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
        <div className="skeleton h-12 w-full"></div>
      </div>
    </div>
  )
}