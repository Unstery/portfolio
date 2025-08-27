import { useEffect, RefObject } from "react";

import { Education } from "./education";
import { Experience } from "./experience";
import { Profile } from "./profile";
import { Projects } from "./projects";

interface PortfolioPageProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
  setActiveCategory: (activeCategory: string | undefined) => void;
}

export const PortfolioPage = ({
  categoriesRef,
  setActiveCategory,
}: PortfolioPageProps) => {
  useEffect(() => {
    const activeCategories = new Map<string, boolean>();
    categoriesRef.current.forEach((categoryRef) => {
      activeCategories.set(categoryRef.id, false);
    });

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      activeCategories.set(entry.target.id, entry.isIntersecting);

      const activeCategory = Array.from(activeCategories.entries())
        .reverse()
        .find(([, value]) => !!value)?.[0];

      setActiveCategory(activeCategory);
      window.history.replaceState(null, "", `/#${activeCategory}`);
    });

    categoriesRef.current.forEach((categoryRef) => {
      observer.observe(categoryRef);
    });
  }, [setActiveCategory]);

  return (
    <div className="px-4 mx-auto mb-5 flex flex-col gap-5 justify-center items-center">
      <Profile categoriesRef={categoriesRef} />
      <div className="mx-auto max-w-screen-lg flex flex-col gap-5 justify-center items-center">
        <Experience categoriesRef={categoriesRef} />
        <Projects categoriesRef={categoriesRef} />
        <Education categoriesRef={categoriesRef} />
      </div>
    </div>
  );
};
