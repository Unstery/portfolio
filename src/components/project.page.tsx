import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useDate, usePortfolio } from "../modules/portfolio";
import { MarkdownRenderer, SkillsList } from "./common";

interface ProjectPageProps {
  projectId: string;
}

export const ProjectPage = ({ projectId }: ProjectPageProps) => {
  const { findProjectById } = usePortfolio();
  const project = findProjectById(projectId);

  const { formatDateRange } = useDate();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  const dateRange = formatDateRange(
    project.startDate,
    project.endDate,
    options
  );

  return (
    <div className="px-4 mx-auto max-w-screen-lg mb-5 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row justify-evenly items-center">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
          <p>{dateRange}</p>
        </div>
      </div>
      <h2 className="text-primary-200 text-2xl font-bold text-center">
        {project.title}
      </h2>
      <SkillsList skills={project.skills} />
      <p className="text-justify">{project.description}</p>
      <div className="space-y-5">
        {project.contents.map((content, index) => (
          <MarkdownRenderer key={index} content={content} />
        ))}
      </div>
    </div>
  );
};
