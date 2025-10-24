import { useState, useEffect } from "react";
import axios from "axios";
import ViewTravel from "./ViewTravel";

function InputText() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getSearch() {
    try {
      const response = await axios.get(
        `/api/trips?keywords=${searchValue}`
      );
      //console.log(response.data);
      setSearchResult(response.data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResult([]);
    }
  }

  // Function to handle category clicks - append category to existing search value
  function handleCategoryClick(tag) {
    const keywords = searchValue.split(" ").filter(Boolean); // แยกเป็น array และลบช่องว่าง
    if (!keywords.includes(tag)) {
      setSearchValue((prev) => (prev ? prev + " " + tag : tag));
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSearch();
    }, 500); // รอ 500ms หลังจากผู้ใช้หยุดพิมพ์

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  return (
    <div className="flex flex-col gap-2 w-full mx-auto mt-10">
      <div className="flex flex-col gap-2 w-1/2 mx-auto">
        <h1 className="text-2xl text-sky-500 font-bold text-center">
          เที่ยวไหนดี
        </h1>
        <p className="text-left text-gray-500">ค้นหาที่เที่ยว</p>
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          className=" p-2 text-center border-b-2 border-gray-200 focus:outline-none "
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <ViewTravel
        searchResult={searchResult}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
}

export default InputText;
