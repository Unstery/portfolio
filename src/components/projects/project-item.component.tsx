/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactMarkdown from 'react-markdown';

import { ProjectEntity } from '../../api/models';
import { useDate } from '../../modules/portfolio';

interface ProjectItemProps {
  entity: ProjectEntity
}

const getProjectDate = (
  startDateString: Date,
  endDateString: Date,
  formatDate: (date: Date, options: Intl.DateTimeFormatOptions) => string,
) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const startFormattedDate = formatDate(startDate, options);
  const endFormattedate = formatDate(endDate, options);

  return `${startFormattedDate}/${endFormattedate}`;
};

export const ProjectItem = ({ entity }: ProjectItemProps) => {
  const { formatDate } = useDate();

  const date = getProjectDate(entity.startDate, entity.endDate, formatDate);

  const [content, setContent] = useState<string>();

  useEffect(() => {
    fetch(entity.content)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        console.log(text);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col gap-1 rounded-lg bg-background-300 dark:bg-background-600">
      <h3 className="text-xl font-bold">{entity.title}</h3>
      <p>{date}</p>
      <p>{entity.description}</p>
      <div className="flex flex-wrap gap-2">
        {entity.skills.map((skill) => (
          <p key={skill} className="py-1 px-3 rounded-2xl text-sm bg-primary-200 text-text-200">{skill}</p>
        ))}
      </div>
      {entity.content && <ReactMarkdown children={content} />}
    </div>
  );
};
