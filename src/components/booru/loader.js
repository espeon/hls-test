import React, { useRef, useState, useEffect, useCallback } from "react";

export default function Loader(props) {
  const { getItems } = props; /* 1 */
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 0
  );
  const initLoaded = useRef(false);
  const [more, setMore] = useState(true);

  const load = useCallback(async () => {
    setPage(page + 1);
    console.log("Set page to", page);
    const data = await getItems({
      page: page
    });
    console.log(data.length);
    setMore(data.length !== 0);
    setItems((prevItems) => [...prevItems, ...data]);
  });
  useEffect(() => {
    if (initLoaded.current) {
      return;
    }
    load(); /* 5 */
    initLoaded.current = true;
  }, [load]);

  return {
    items,
    more,
    load
  };
}
