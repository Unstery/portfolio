import { ExperienceEntity } from "../../api/models";
import { useDate } from "../../modules/portfolio";

interface ExperienceItemProps {
  entity: ExperienceEntity;
}

export const ExperienceItem = ({ entity }: ExperienceItemProps) => {
  const { formatDateRange } = useDate();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const dateRange = formatDateRange(entity.startDate, entity.endDate, options);

  return (
    <a href={`/experiences/${entity.id}`}>
      <div className="p-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
        <div className="flex flex-row gap-3 items-center">
          <img
            src={`/experience/${entity.image}`}
            alt={entity.image}
            className="h-28 rounded-2xl"
          />
          <div>
            <h3 className="text-xl font-bold">
              {entity.title} - {entity.contract}
            </h3>
            <p className="text-primary-200 font-semibold">{entity.company}</p>
            <p>{entity.location}</p>
            <p>{dateRange}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{entity.project}</h4>
          <p>{entity.description}</p>
        </div>
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
