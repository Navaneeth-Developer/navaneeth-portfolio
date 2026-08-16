
import React from 'react'
import GlassCard from './GlassCard'
import { TechnologiesCardProps } from '../interfaces/technologiesCard'

const TechnologiesCard = ({ technologies }: TechnologiesCardProps) => {
  return (
     <GlassCard className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6 tracking-wide">Technologies</h2>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech,i) => (
              <span 
                key={i} 
                className="px-4 py-2 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 text-sm font-medium text-white/80 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
  )
}

export default TechnologiesCard