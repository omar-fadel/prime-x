import { Icons, Typography } from "animation-ship-components";
import { IconName } from "animation-ship-components/dist/components/Atoms/Icons";

interface IconTextProps {
  iconName: IconName;
  text: string;
}
const IconText: React.FC<IconTextProps> = ({ iconName, text }) => {
  return (
    <div>
      <div className="border-[0.15rem] p-[0.75rem] border-secondary-main rounded-2xl">
        <Icons width={"2.5rem"} height={"2.5rem"} iconName={iconName} />
      </div>
      <Typography align="center" variant="body1" color="secondary">
        {text}
      </Typography>
    </div>
  );
};

export default IconText;
