import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useDate, usePortfolio } from "../modules/portfolio";
import { MarkdownRenderer } from "./common/markdown-renderer.component";

interface ProjectPageProps {
  projectId: string;
}

export const ProjectPage = ({ projectId }: ProjectPageProps) => {
  const { findProjectById } = usePortfolio();
  const project = findProjectById(projectId);

  const { formatDate } = useDate();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  const startDate = formatDate(project.startDate, options);
  const endDate = formatDate(project.endDate, options);

  return (
    <div className="px-5 mx-auto max-w-screen-lg mb-5 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row justify-evenly items-center">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
          <p>
            {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
          </p>
        </div>
      </div>
      <h2 className="text-primary-200 text-2xl font-bold text-center">
        {project.title}
      </h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.skills.map((skill) => (
          <p
            key={skill}
            className="py-1 px-3 rounded-2xl text-sm bg-primary-200 text-text-200"
          >
            {skill}
          </p>
        ))}
      </div>
      <p className="text-justify">{project.description}</p>
      {project.content && <MarkdownRenderer contentUrl={project.content} />}
    </div>
  );
};
