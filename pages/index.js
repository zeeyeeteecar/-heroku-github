import React from "react";
import axios from "axios";
import ShowData from "./components/ShowData";

export default function Index() {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    axios
      .all([
        axios.get("https://api.imgflip.com/get_memes"),
        //axios.get('https://api.github.com/users/mapbox'),
        //axios.get('https://api.github.com/users/phantomjs'),
      ])
      .then((responseArr) => {
        //this will be executed only when all requests are complete
        //console.log('Date created: ', responseArr[0].data.created_at);
        //console.log('Date created: ', responseArr[1].data.created_at);
        const fetchedData = responseArr[0].data.data.memes;
        console.log(fetchedData);
        setDataList(fetchedData);
      });
  }, []);

  return (
    <div>
      <ShowData dataList={dataList} />
    </div>
  );
}

//https://api.imgflip.com/get_memes
