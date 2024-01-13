import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";

function FetchingItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((items) => {
        console.log("Successful fetch of items", items);
        // dispatch the received data to Redux store
        dispatch(itemAction.addInitialItems(items));
      })
      .catch((error) => {
        console.error("Failed to fetch items", error);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <div></div>;
}

export default FetchingItems;
