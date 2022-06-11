import React from "react";
import Image from "next/image";
import { Container, VStack, Box, IconButton } from "@chakra-ui/react";
import SearchIcon from "@chakra-ui/icon";

// export interface PropsType {
//   dataList: [{ id: string; name: string; url: string }];
// }

export default function ShowData({ dataList, handle_click_for_pic }) {
  // export default function ShowData({ dataList }: PropsType) {
  //const ShowData: React.FC<Props> = ({ dataList }) => {
  return (
    <div>
      {dataList.map((item, index) => {
        return (
          <li key={index + 1}>
            {index + 1} -{item.id} -{item.name} -
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={(e) => handle_click_for_pic(item.url)}
            />
          </li>
        );
      })}
    </div>
  );
}

//export default ShowData;
