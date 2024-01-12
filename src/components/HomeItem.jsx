import Item from "./Item";

function HomeItem() {
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

  return <Item item={item} />;
}

export default HomeItem;
