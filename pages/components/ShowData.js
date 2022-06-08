import React from "react";

export default function ShowData({ dataList }) {
  return (
    <div>
      {dataList.map((item, index) => {
        return (
          <li key={index}>
            {item.id} -- {item.name}
          </li>
        );
      })}
    </div>
  );
}
