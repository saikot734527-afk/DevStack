import { useState, useMemo } from 'react';
import { Loader2 } from 'lucide-react';
import type { Technology } from '../types';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps'];

  const filteredTechnologies = useMemo(() => {
    if (selectedCategory === 'All') return technologies;
    return technologies.filter((tech) => tech.category === selectedCategory);
  }, [technologies, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Header Title Section */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State Spinner */}
      {isLoading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-4 text-slate-400">
          <Loader2 className="w-10 h-10 animate-spin text-pink-500" />
          <p className="text-sm font-medium text-slate-500">Loading technologies dataset...</p>
        </div>
      ) : (
        /* Technology Cards Grid: 3-column layout on desktop */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech) => (
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
