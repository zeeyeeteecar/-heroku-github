import React from "react";

export default function ShowData(prop) {
  return (
    <div>
      {prop.dataList.map((item, index) => {
        return (
          <li key={index}>
            {index} :=--
            {item.id} --
            {item.name} --
            {item.url}
          </li>
        );
      })}
    </div>
  );
}
