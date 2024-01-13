import { useSelector } from "react-redux";
import Item from "./Item";

function HomeItem() {
  const item = useSelector((state) => state.item);
  console.log(item);
  return <Item item={item} />;
}

export default HomeItem;
