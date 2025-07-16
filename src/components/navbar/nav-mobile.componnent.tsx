import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

import { CategoryType } from "../../api/types/categories.type";
import { Options } from "./options/options.component";
import { useClickAway } from "../../modules/portfolio";

interface NavMobileProps {
  categories: CategoryType[];
  activeCategory: string | undefined;
  handleScroll: (
    categoryId: string
  ) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const NavMobile = ({
  categories,
  activeCategory,
  handleScroll,
}: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const handleNavClick =
    (categoryId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      handleScroll(categoryId)(e);
      setIsOpen(false);
    };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex justify-center items-center bg-background-300 dark:bg-background-600 p-[10px] rounded-2xl cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="w-screen max-w-full h-screen absolute top-0 left-0 bg-background-900/60" />
      )}
      <div
        ref={ref}
        className={`px-8 py-5 h-full w-full sm:w-72 fixed top-0 left-0 bg-background-200 dark:bg-background-700 flex flex-col gap-4 justify-between transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex justify-center items-center bg-background-300 dark:bg-background-600 p-[10px] rounded-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
        </button>
        <div className="h-full flex flex-col gap-2 justify-center sm:justify-start">
          {categories.map((category) => (
            <a
              href={`#${category.type}`}
              key={category.id}
              onClick={handleNavClick(category.id)}
              className={`${category.type === activeCategory ? "text-primary-200" : null} w-full h-10 px-4 py-2 flex justify-center sm:justify-start hover:rounded-2xl hover:bg-background-300 hover:dark:bg-background-600`}
            >
              {category.title}
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <Options />
        </div>
      </div>
    </div>
  );
};
