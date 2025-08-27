interface SkillsListProps {
  skills: string[];
  justify?: "start" | "center" | "end";
}

export const SkillsList = ({ skills, justify = "center" }: SkillsListProps) => {
  return (
    <div className={`flex flex-wrap justify-${justify} gap-2`}>
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
