import { useSelector } from "react-redux";
import Item from "./Item";

function HomeItem() {
  const { items } = useSelector((state) => state.items);
  return (
    <>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </>
  );
}

export default HomeItem;
