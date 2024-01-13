import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

function Bag() {
  const items = useSelector((store) => store.bagItems);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item) => (
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
