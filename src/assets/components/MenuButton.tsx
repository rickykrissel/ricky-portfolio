import { Webpage } from "../../data/WebpageInterface";

interface Props {
  webpage: Webpage;
}
const MenuButton = ({ webpage }: Props) => {
  return (
    <a href={webpage.pglink} target={webpage.pgtarget}>
      {webpage.pgtitle}
    </a>
  );
};

export default MenuButton;
