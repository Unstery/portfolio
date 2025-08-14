import { ProjectEntity } from "../../api/models";
import { useDate } from "../../modules/portfolio";

interface ProjectItemProps {
  entity: ProjectEntity;
}

export const ProjectItem = ({ entity }: ProjectItemProps) => {
  const { formatDateRange } = useDate();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  const dateRange = formatDateRange(entity.startDate, entity.endDate, options);

  return (
    <a href={`/projects/${entity.id}`}>
      <div className="p-4 flex flex-col gap-1 rounded-lg bg-background-300 dark:bg-background-600">
        <h3 className="text-xl font-bold">{entity.title}</h3>
        <p>{dateRange}</p>
        <p>{entity.description}</p>
        <div className="flex flex-wrap gap-2">
          {entity.skills.map((skill) => (
            <p
              key={skill}
              className="py-1 px-3 rounded-2xl text-sm bg-primary-200 text-text-200"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};
