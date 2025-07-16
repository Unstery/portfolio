import { RefObject } from "react";

import { usePortfolio } from "../../modules/portfolio";
import { ExperienceItem } from "./experience-item.component";

interface ExperienceProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
}

export const Experience = ({ categoriesRef }: ExperienceProps) => {
  const { findExperience } = usePortfolio();

  const experience = findExperience();

  return (
    <section
      className="w-full flex flex-col gap-3"
      ref={(element) => {
        if (element) {
          categoriesRef.current.set(experience.id, element);
        }
      }}
      id={experience.type}
    >
      <h2 className="text-primary-200 text-2xl font-bold">
        {experience.title}
      </h2>
      <div className="flex flex-col gap-4">
        {experience.entities.map((entity) => (
          <ExperienceItem key={entity.company} entity={entity} />
        ))}
      </div>
    </section>
  );
};
