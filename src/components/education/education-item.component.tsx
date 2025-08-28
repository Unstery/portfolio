import { EducationEntity } from "../../api/models";
import { useDate } from "../../modules/portfolio";

interface EducationItemProps {
  entity: EducationEntity;
}

export const EducationItem = ({ entity }: EducationItemProps) => {
  const { formatDateRange } = useDate();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  const dateRange = formatDateRange(entity.startDate, entity.endDate, options);

  return (
    <div className="mt-6.25 sm:mt-0 px-4 pb-4 sm:pt-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
      <div className="-mt-6.25 sm:mt-0 flex flex-col sm:flex-row gap-1 sm:gap-3">
        <img
          src={`/education/${entity.image}`}
          alt={entity.image}
          className="h-12.5 sm:h-25 w-12.5 sm:w-25 mx-auto sm:mx-0 object-contain rounded-2xl bg-white"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold">{entity.degree}</h3>
          <p className="text-primary-200 font-semibold">{entity.school}</p>
          <p>{entity.speciality}</p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {dateRange}
          </p>
        </div>
      </div>
    </div>
  );
};
