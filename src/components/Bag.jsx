import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

function Bag() {
  const { items } = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  console.log(items);
  console.log(bag);

  const bagItem = items.filter((item) => bag.includes(item.id));
  console.log(bagItem);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItem.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
}

export default Bag;
