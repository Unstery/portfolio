import { RefObject, useEffect } from "react";

import { usePortfolio } from "../../modules/portfolio";
import { CategoryEnum } from "../../api/enum/category.enum";
import { NavMobile } from "./nav-mobile.componnent";
import { Options } from "./options/options.component";

interface NavbarProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
  activeCategory: string | undefined;
  setActiveCategory: (activeCategory: string) => void;
}

export const Navbar = ({
  categoriesRef,
  activeCategory,
  setActiveCategory,
}: NavbarProps) => {
  const { findCategories } = usePortfolio();

  const categories = findCategories();
  const profileCategory = categories.find(
    (category) => category.type === CategoryEnum.PROFILE
  )!;
  const otherCategories = categories.filter(
    (category) => category.type !== CategoryEnum.PROFILE
  );

  const scrollToCategory = (categoryId: string) => {
    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;
    const targetPosition =
      categoriesRef.current.get(categoryId)!.offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const handleScroll =
    (categoryId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (window.location.pathname !== "/") {
        return;
      }

      const { href } = e.currentTarget;
      const targetId = href.replace(/.*#/, "");

      e.preventDefault();
      setActiveCategory(targetId);
      window.history.replaceState(null, "", `/#${targetId}`);
      scrollToCategory(categoryId);
    };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const category = categories.find((category) => category.type === hash);
      if (category) {
        setTimeout(() => scrollToCategory(category.id), 100);
      }
    }
  }, [categories]);

  return (
    <div className="navbar sticky top-0 w-full flex items-center px-8 py-5 bg-background-200 dark:bg-background-700">
      <div className="hidden flex-1 md:flex flex-row items-center gap-4 text-sm sm:text-sm md:text-sm lg:text-base overflow-auto ">
        {otherCategories.map((category) => (
          <a
            href={`/#${category.type}`}
            key={category.id}
            onClick={handleScroll(category.id)}
            className={`${category.type === activeCategory ? "text-primary-200" : null}`}
          >
            {category.title}
          </a>
        ))}
      </div>
      <div className="md:hidden flex-1">
        <NavMobile
          categories={categories}
          activeCategory={activeCategory}
          handleScroll={handleScroll}
        />
      </div>
      <a
        href={`/#${profileCategory.type}`}
        key={profileCategory.id}
        onClick={handleScroll(profileCategory.id)}
        className={`flex justify-center mx-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold ${profileCategory.type === activeCategory ? "text-primary-200" : null}`}
      >
        {`${profileCategory.firstName} ${profileCategory.lastName}`}
      </a>
      <div className="flex-1">
        <div className="hidden md:flex justify-end">
          <Options />
        </div>
      </div>
    </div>
  );
};
