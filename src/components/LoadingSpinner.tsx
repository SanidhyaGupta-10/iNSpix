import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden'>
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-[#a078ff]/5 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    className='w-16 h-16 border-2 border-white/5 rounded-full'
                />
                
                {/* Spinning Segment */}
                <motion.div
                    className='absolute top-0 left-0 w-16 h-16 border-2 border-t-[#a078ff] border-r-transparent border-b-transparent border-l-transparent rounded-full'
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-[#958ea0] font-black tracking-[0.3em] uppercase text-[10px]"
            >
                Synchronizing Archive...
            </motion.p>
        </div>
    );
};

export default LoadingSpinner;
