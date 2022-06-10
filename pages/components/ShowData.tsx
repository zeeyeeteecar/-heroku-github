import React from "react";

export interface PropsType {
  dataList: [{ id: string; name: string; url: string }];
}

export default function ShowData({ dataList }: PropsType) {
  //const ShowData: React.FC<Props> = ({ dataList }) => {
  return (
    <div>
      {dataList &&
        dataList.map((item, index) => {
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

//export default ShowData;
