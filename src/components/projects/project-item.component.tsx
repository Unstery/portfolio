import { ProjectEntity } from "../../api/models";
import { useDate } from "../../modules/portfolio";
import { SkillsList } from "../common";

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
      <div className="p-4 flex flex-col gap-1 rounded-2xl bg-background-300 dark:bg-background-600">
        <h3 className="text-xl font-bold">{entity.title}</h3>
        <p>{dateRange}</p>
        <p>{entity.description}</p>
        <SkillsList skills={entity.skills} />
      </div>
    </a>
  );
};
