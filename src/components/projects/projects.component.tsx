import { RefObject } from "react";

import { usePortfolio } from "../../modules/portfolio";
import { ProjectItem } from "./project-item.component";

interface ProjectsProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
}

export const Projects = ({ categoriesRef }: ProjectsProps) => {
  const { findProjects } = usePortfolio();

  const projects = findProjects();

  return (
    <div
      className="w-full flex flex-col gap-3"
      ref={(element) => {
        if (element) {
          categoriesRef.current.set(projects.id, element);
        }
      }}
      id={projects.type}
    >
      <h2 className="text-primary-200 text-2xl font-bold">{projects.title}</h2>
      <div className="flex flex-col gap-4">
        {projects.entities.map((entity) => (
          <ProjectItem key={entity.title} entity={entity} />
        ))}
      </div>
    </div>
  );
};
