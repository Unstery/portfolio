import { RefObject } from "react";

import { usePortfolio } from "../../modules/portfolio";
import { EducationItem } from "./education-item.component";

interface EducationProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
}

export const Education = ({ categoriesRef }: EducationProps) => {
  const { findEducation } = usePortfolio();

  const education = findEducation();

  return (
    <section
      className="w-full flex flex-col gap-3"
      ref={(element) => {
        if (element) {
          categoriesRef.current.set(education.id, element);
        }
      }}
      id={education.type}
    >
      <h2 className="text-primary-200 text-2xl font-bold">{education.title}</h2>
      <div className="flex flex-col gap-4">
        {education.entities.map((entity) => (
          <EducationItem key={entity.degree} entity={entity} />
        ))}
      </div>
    </section>
  );
};
