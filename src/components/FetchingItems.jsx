import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";
import { fetchAction } from "../store/fetchSlice";

function FetchingItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((items) => {
        dispatch(fetchAction.markFetchingDone());
        dispatch(fetchAction.markFetchingFinished());
        dispatch(itemAction.addInitialItems(items));
      })
      .catch((error) => {
        console.error("Failed to fetch items", error);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}

export default FetchingItems;
