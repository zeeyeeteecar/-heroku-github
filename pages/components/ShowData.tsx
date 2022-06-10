import React from "react";

type Props = {
  dataList: string[];
};

export default function ShowData({ dataList }: Props) {
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
