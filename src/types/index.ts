export type Category = 
  | 'All' 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'Language' 
  | 'Styling' 
  | 'DevOps' 
  | 'Tools';

export type Difficulty = 'Beginner-Friendly' | 'Intermediate' | 'Advanced';

export interface Technology {
  id: string;
  name: string;
  category: Category;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
}

export interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

export interface StackSidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onClearStack: () => void;
}
