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
    <div className="p-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={`/education/${entity.image}`}
          alt={entity.image}
          className="h-28 w-28 object-contain rounded-2xl"
        />
        <div>
          <h3 className="text-xl font-bold">{entity.degree}</h3>
          <p className="text-primary-200 font-semibold">{entity.school}</p>
          <p>{entity.speciality}</p>
          <p>{dateRange}</p>
        </div>
      </div>
    </div>
  );
};
