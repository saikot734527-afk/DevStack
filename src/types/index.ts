export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
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
