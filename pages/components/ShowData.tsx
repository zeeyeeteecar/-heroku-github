import React from "react";

// interface Props  {
//   dataList: [{id: string; name: string; url: string}];
// };

export default function ShowData({ dataList }) {
  return (
    <div>
      {dataList.map((item, index) => {
        return (
          <li key={index}>
            {index} --
            {item.id} --
            {item.name} --
            {item.url}
          </li>
        );
      })}
    </div>
  );
}
