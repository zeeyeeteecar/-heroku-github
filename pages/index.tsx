import React from "react";
import axios from "axios";
import { Container, VStack, Box, Center, SimpleGrid } from "@chakra-ui/react";

import ShowData from "./components/ShowData";

// interface Props {
//   dataList: [{ id: string; name: string; url: string }];
// }

export default function Index() {
  // const [dataList, setDataList] = React.useState<
  //   [{ id: string; name: string; url: string }]
  // >([{ id: null, name: null, url: null }]);

  const [dataList, setDataList] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState("");
  const url_Api = "https://api.imgflip.com/get_memes";

  React.useEffect(() => {
    axios
      .all([
        axios.get(url_Api),
        //axios.get('https://api.github.com/users/mapbox'),
        //axios.get('https://api.github.com/users/phantomjs'),
      ])
      .then((responseArr) => {
        //this will be executed only when all requests are complete
        //console.log('Date created: ', responseArr[0].data.created_at);
        //console.log('Date created: ', responseArr[1].data.created_at);
        const fetchedData = responseArr[0].data.data.memes;
        //console.log(fetchedData);
        setDataList(fetchedData);
      });
  }, []);

  function handle_click_for_pic(e) {
    console.log(e);
    setImgUrl(e);
  }

  return (
    <VStack borderWidth={5}>
      <Center borderWidth={5} width={1000} h="90vh">
        <SimpleGrid columns={2} spacing={5} padding="5px">
          <Box height="80vh" overflowY="scroll" padding="5px" margin={5}>
            {" "}
            {
              <ShowData
                dataList={dataList}
                handle_click_for_pic={handle_click_for_pic}
              />
            }
          </Box>
          <Box height="80vh" padding="5px" margin={5}>
            <img src={imgUrl} width="300px" height={300} />
          </Box>
        </SimpleGrid>
      </Center>
    </VStack>
  );
}

//https://api.imgflip.com/get_memes
