import { Loader2 } from 'lucide-react';
import type { Technology } from '../types/type.tsx';
import { TechCard } from './TechCard';

interface TechGridProps {
  technologies: Technology[];
  isLoading: boolean;
  stackIds: Set<string>;
  onAddToStack: (tech: Technology) => void;
}

export const TechGrid = ({
  technologies,
  isLoading,
  stackIds,
  onAddToStack,
}: TechGridProps) => {
  return (
    <div className="space-y-8">
      {/* Header Title Section */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="bg-gradient-to-r from-[#2ebf91] to-[#8360c3] bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Loading State Spinner */}
      {isLoading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-4 text-slate-400">
          <Loader2 className="w-10 h-10 animate-spin text-[#8360c3]" />
          <p className="text-sm font-medium text-slate-500">Loading ...........</p>
        </div>
      ) : (
        /* Technology Cards Grid: 3-column layout on desktop */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              technology={tech}
              isAdded={stackIds.has(tech.id)}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>
      )}
    </div>
  );
};
