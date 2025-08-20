import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileContract,
  faBuilding,
  faLocationDot,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import { useDate, usePortfolio } from "../modules/portfolio";
import { SkillsList } from "./common";

interface ExperiencePageProps {
  experienceId: string;
}

export const ExperiencePage = ({ experienceId }: ExperiencePageProps) => {
  const { t } = useTranslation();

  const { findExperienceById } = usePortfolio();
  const experience = findExperienceById(experienceId);

  const { calculateMonthDiff } = useDate();
  const experienceDuration = calculateMonthDiff(
    experience.startDate,
    experience.endDate
  );

  return (
    <div className="px-5 mx-auto max-w-screen-lg mb-5 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row justify-evenly items-center">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faFileContract} className="w-4 h-4" />
          <p>{experience.contract}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faBuilding} className="w-4 h-4" />
          <p>{experience.company}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
          <p>{experience.location}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
          <p>{t("month", { count: experienceDuration })}</p>
        </div>
      </div>
      <h2 className="text-primary-200 text-2xl font-bold text-center">
        {experience.title}
      </h2>
      <h3 className="text-xl font-bold text-center">{experience.project}</h3>
      <div className="flex justify-center">
        <SkillsList skills={experience.skills} />
      </div>
      <p className="text-justify">{experience.detail}</p>
      <div>
        <p className="font-bold">{t("tasks")}</p>
        <ul className="list-disc list-inside">
          {experience.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-1">
        <p className="font-bold">{t("teams")}</p>
        <p>{experience.team}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1">
        <p className="font-bold">{t("methods")}</p>
        <p>{experience.method}</p>
      </div>
    </div>
  );
};
