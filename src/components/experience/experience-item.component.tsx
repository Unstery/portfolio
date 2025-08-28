import { ExperienceEntity } from "../../api/models";
import { useDate } from "../../modules/portfolio";
import { SkillsList } from "../common";

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
      <div className="mt-6.25 sm:mt-0 px-4 pb-4 sm:pt-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
        <div className="-mt-6.25 sm:mt-0 flex flex-col sm:flex-row gap-1 sm:gap-3">
          <img
            src={`/experience/${entity.image}`}
            alt={entity.image}
            className="h-12.5 sm:h-25 w-fit mx-auto sm:mx-0 rounded-2xl"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold">
              {entity.title} - {entity.contract}
            </h3>
            <p className="text-primary-200 font-semibold">{entity.company}</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {entity.location}
            </p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              {dateRange}
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{entity.project}</h4>
          <p>{entity.description}</p>
        </div>
        <SkillsList skills={entity.skills} justify="start" />
      </div>
    </a>
  );
};
