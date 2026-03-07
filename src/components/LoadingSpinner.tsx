import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden'>
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    className='w-16 h-16 border-4 border-gray-800 rounded-full'
                />
                
                {/* Spinning Segment */}
                <motion.div
                    className='absolute top-0 left-0 w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full'
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 font-medium tracking-widest uppercase text-xs"
            >
                Fetching amazing content...
            </motion.p>
        </div>
    );
};

export default LoadingSpinner;
