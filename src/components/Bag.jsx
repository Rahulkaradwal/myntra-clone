import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

function Bag() {
  const item = {
    id: "004",
    image: "images/4.jpg",
    company: "ADIDAS",
    item_name: "Indian Cricket ODI Jersey",
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 5.0,
      count: 10,
    },
  };

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem item={item} />
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
}

export default Bag;
