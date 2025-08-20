interface SkillsListProps {
  skills: string[];
}

export const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <p
          key={skill}
          className="py-1 px-3 rounded-2xl text-sm bg-primary-200/80 text-text-200"
        >
          {skill}
        </p>
      ))}
    </div>
  );
};
