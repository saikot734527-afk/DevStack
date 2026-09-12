import { X, Layers3 } from 'lucide-react';
import type { Technology } from '../types/type.tsx';

interface StackSidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onClearStack: () => void;
}

export const StackSidebar = ({
  stack,
  onRemoveFromStack,
  onClearStack,
}: StackSidebarProps) => {
  const stackCount = stack.length;

  return (
    <aside className="lg:col-span-1 space-y-6">
      <div className="bg-white border border-slate-100 rounded-2xl p-6 sticky top-24 shadow-sm space-y-6">
        
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Your Stack</h2>
          <p className="text-xs text-slate-400 mt-1">
            {stackCount} {stackCount === 1 ? 'Technology' : 'Technology'} Selected
          </p>
        </div>

        {stackCount === 0 ? (
          <div className="py-12 px-4 text-center space-y-3 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <Layers3 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-slate-600">Your Stack is empty</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Click "Add to Stack" on any technology card.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-all duration-200"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                    <span className="text-[10px] text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="p-1 rounded-md text-slate-300 hover:text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
                  title={`Remove ${item.name} from stack`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {stackCount > 0 && (
          <div className="pt-2">
            <button
              onClick={onClearStack}
              className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 font-medium text-xs transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}

      </div>
    </aside>
  );
};
