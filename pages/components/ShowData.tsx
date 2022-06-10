import React from "react";
import Image from "next/image";

export interface PropsType {
  dataList: [{ id: string; name: string; url: string }];
}

export default function ShowData({ dataList }: PropsType) {
  //const ShowData: React.FC<Props> = ({ dataList }) => {
  return (
    <div>
      {dataList && dataList.map((item, index) => {
        return (
          <li key={index}>
            {index} --
            {item.id} --
            {item.name} --
            <img src={item.url} width="300px" height={300} />
          </li>
        );
      })}
    </div>
  );
}

//export default ShowData;
