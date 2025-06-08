
interface NavButtonProps {
  text: string;
  isActiveTab?: boolean;
}


export const NavButton = ({ text }: NavButtonProps) => {
  const id = text.toLowerCase().replace(/\s+/g, "-");

  return (
    <span className="text-slate-200 font-medium border px-2 py-1 rounded-md underline-white">
      <a href={`#${id}`} className = "flex ">
        {text}
      </a>
    </span>
  );
};
