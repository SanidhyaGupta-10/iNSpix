import React from 'react'

const SkeletonCard = ({ height = '300px' }: { height?: string }) => {
  return (
    <div 
        className="break-inside-avoid mb-6 rounded-3xl bg-white/5 border border-white/5 overflow-hidden relative group animate-pulse"
        style={{ height }}
    >
        {/* Shimmer effect Overlay */}
        <div className="absolute inset-0 skeleton-shimmer"></div>
        
        {/* Top Action Placeholder */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5"></div>
        
        {/* Bottom Info Placeholder */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
            <div className="h-4 w-3/4 bg-white/10 rounded-lg"></div>
            <div className="h-3 w-1/2 bg-white/5 rounded-lg"></div>
        </div>
    </div>
  )
}

export default SkeletonCard
