import { useParams } from "react-router-dom";
import loader from "./loader";
import React from "react";

export default function List() {
  let { id } = useParams();
  const { items, more, load } = loader({
    getItems: ({ page }) => {
      let tempData = [];
      console.log(page);
      return fetch(
        `https://sc.natalie.sh/raw?code=Z2VsYm9vcnUuY29t&url=${encodeURIComponent(
          "https://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=20&json=1&pid=" +
            page +
            "&tags="
        )}${id} -1boy -2boys -3boys -4boys -5boys -6boys+ -male_focus -male_hand -3d`
      )
        .then((response) => response.json())
        .then((json) => {
          json.forEach((s) => {
            tempData.push(s);
          });
          return tempData;
        });
    }
  });

  return (
    <div>
      {items.map((item) => (
        <a
          key={item.hash}
          href={`https://gelbooru.com/index.php?page=post&s=view&id=${item.id}`}
        >
          <img
            src={`https://sc.natalie.sh/raw?code=${btoa(
              item.file_url
                .replace("http://", "")
                .replace("https://", "")
                .split(/[/?#]/)[0]
            )}&url=${item.file_url}`}
            alt={item.tags}
          />
        </a>
      ))}
      {more && <h2 onClick={() => load()}>Load More</h2>}
      {!more && "Ops!"}
    </div>
  );
}
