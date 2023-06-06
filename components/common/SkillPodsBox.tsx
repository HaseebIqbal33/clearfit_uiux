interface SProps {
  text?: string;
}

const SkillPodsBox = ({ text = "" }: SProps) => {
  return (
    <div className="flex gap-2 flex-row items-end">
      <img src="./circle.png" alt="" />
      <span>SkillPods {text}</span>
    </div>
  );
};

export default SkillPodsBox;
