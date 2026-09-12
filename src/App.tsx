import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { Technology } from './types/type.tsx';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechGrid } from './components/TechGrid';
import { StackSidebar } from './components/StackSidebar';
import { Footer } from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/technologies.json');
        if (!response.ok) {
          throw new Error('Failed to fetch technologies data');
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error loading technologies:', error);
        toast.error('Failed to load technologies dataset.');
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    fetchTechnologies();
  }, []);

  const stackIds = new Set(stack.map((item) => item.id));

  const handleAddToStack = (tech: Technology) => {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
        theme: 'light',
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'bottom-right',
      theme: 'light',
    });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack`, {
        position: 'bottom-right',
        theme: 'light',
      });
    }
  };

  const handleClearStack = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Cleared all items from your stack', {
      position: 'bottom-right',
      theme: 'light',
    });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar onScrollToSection={handleScrollToSection} />

      <Hero
        onExploreClick={() => handleScrollToSection('technologies')}
        onLearnMoreClick={() => handleScrollToSection('technologies')}
      />

      <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full space-y-16">

        <section id="technologies" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">
              <TechGrid
                technologies={technologies}
                isLoading={isLoading}
                stackIds={stackIds}
                onAddToStack={handleAddToStack}
              />
            </div>

            <StackSidebar
              stack={stack}
              onRemoveFromStack={handleRemoveFromStack}
              onClearStack={handleClearStack}
            />

          </div>
        </section>

      </main>

      <Footer />

      <ToastContainer autoClose={3000} hideProgressBar={false} closeOnClick />
    </div>
  );
}

export default App;
