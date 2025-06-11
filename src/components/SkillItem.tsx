

export type SkilType = {
  skill: string;
};

export const SkillItem = ({ skill }: SkilType) => {
  return (
    <div className="p-3 text-black font-medium bg-white border rounded-md cursor-pointer hover:bg-slate-300">
      {skill}
    </div>
  );
};
