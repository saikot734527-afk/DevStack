import { Star, Check } from 'lucide-react';
import type { TechnologyCardProps } from '../types';

export const TechCard = ({
  technology,
  isAdded,
  onAddToStack,
}: TechnologyCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = technology;

  // Badge pill colors according to screenshot
  const getBadgeStyle = (badgeName: string) => {
    switch (badgeName) {
      case 'Popular':
      case 'Essential':
      case 'Containers':
      case 'Top SQL':
      case 'Full-Stack':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Versatile':
      case 'Modern':
      case 'Robust':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Fast':
      case 'Cache':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      default:
        return 'bg-purple-50 text-purple-600 border-purple-100';
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4">
      
      {/* Top Header: Icon on Left, Badge on Right */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyle(badge)}`}>
            {badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>

        {/* Description */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[54px]">
          {description}
        </p>
      </div>

      {/* Meta Specs Row: Category, Difficulty, Rating */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-50">
          <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium">
            {category}
          </span>

          <span className="text-slate-500">
            {difficulty}
          </span>

          <div className="flex items-center space-x-1 font-semibold text-slate-700">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Full-width Dark "Add to Stack" Button */}
        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-slate-950 hover:bg-slate-800 text-white shadow-sm cursor-pointer'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Added to Stack</span>
            </>
          ) : (
            <span>Add to Stack</span>
          )}
        </button>
      </div>

    </div>
  );
};
