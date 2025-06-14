
import { SkillItem} from "./SkillItem";
import { SkillList } from "../utils/projects";

export const Skils = () => {
  return (
    <div id = "skills" className = "mb-10 mt-5 flex flex-col items-center md:p-5">
        <div className = "flex text-slate-100 mb-6 text-2xl font-medium underline">
            My Skills
        </div>
      <div className="flex justify-center gap-4 flex-wrap w-full md:w-xl   mt-5">
        {SkillList.map((eachSkill: string, idx: number) => (
          <SkillItem key={idx} skill={eachSkill} />
        ))}
      </div>
    </div>
  );
};
