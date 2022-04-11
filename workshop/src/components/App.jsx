import React from "react";

import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const App = () => {
  const selectedGif = "13HgwGsXF0aiGY";
  const gifList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} />
      </div>
    </div>
  );
};

export default App;
