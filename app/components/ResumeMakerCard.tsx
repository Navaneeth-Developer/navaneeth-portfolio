import GlassCard from './GlassCard'

const ResumeMakerCard = () => {
  return (
      <GlassCard className="flex flex-col h-full hover:bg-white/10 transition-all duration-300">
          
          <div className="flex-grow">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 text-xl">
              📄
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-wide">Resume Maker</h2>
            <p className="text-white/60 leading-relaxed pr-4">
              An intuitive platform to easily craft and export professional resumes. Currently in development and launching soon!
            </p>
          </div>

          {/* Button updated to reflect "in progress" status */}
          <button 
            disabled 
            className="mt-8 self-start px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide opacity-50 cursor-not-allowed"
          >
            Coming Soon
          </button>
        </GlassCard>
  )
}

export default ResumeMakerCard