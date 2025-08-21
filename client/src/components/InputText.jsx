import { useState, useEffect } from "react";
import axios from "axios";

function InputText() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getSearch() {
    const response = await axios.get(`http://localhost:4001/trips?keywords=${searchValue}`);
    //console.log(response.data);
    setSearchResult(response.data.data);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSearch();
    }, 500); // รอ 500ms หลังจากผู้ใช้หยุดพิมพ์

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  return (
    <div className="flex flex-col gap-2 w-1/2 mx-auto">
      <input type="text" placeholder="ค้นหาที่เที่ยว" className="border border-gray-300 rounded-md p-2" 
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      />

      <div className="flex flex-col gap-1">
        {searchResult.map((item) => (
          <div key={item.eid}>
            <h1 className="text-lg font-bold text-left">{item.title}</h1>
            <p className="text-sm text-gray-500">{item.description}</p>
            <img src={item.photos[0]} alt={item.title} className="w-full h-auto" />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default InputText;