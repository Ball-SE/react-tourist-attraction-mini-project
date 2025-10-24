import { Link } from "react-router-dom";
import ImageTravel from "./ImageTravel";

function ViewTravel({ searchResult, onCategoryClick }) {
  return (
    <div className="flex flex-col gap-1 w-2/3 mx-auto">
      {searchResult && searchResult.length > 0 ? searchResult.map((item,index) => (
        <div key={item.eid} className="flex flex-row gap-4 relative w-[1300px] h-auto p-4">
          {/* รูปภาพหัวข้อ */}
          <img
            src={item.photos[0]}
            alt={item.title}
            className="w-[300px] h-[250px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-2 w-1/2">
            {/* ชื่อ */}
            <Link
              className="text-lg font-bold text-left"
              to={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </Link>
            {/* คำอธิบาย */}
            <p className="text-sm text-gray-500">
              {item.description.length > 100
                ? item.description.substring(0, 100) + " ... "
                : item.description}
            </p>
            {/* อ่านต่อ */}
            <Link
              className="text-blue-500 underline rounded-md text-left"
              to={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              อ่านต่อ
            </Link>
            {/* หมวดหมู่ */}
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-500">หมวด</span>
              {item.tags && item.tags.length > 0 ? item.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="flex items-center">
                  <button 
                    className="text-gray-500 underline rounded-md text-left hover:text-blue-500 transition-colors"
                    onClick={() => onCategoryClick(tag)}
                  >
                    {tag}
                  </button>
                  {item.tags.length > 1 && tagIndex === item.tags.length - 2 && (
                    <span className="text-gray-500 mx-1">และ</span>
                  )}
                </div>
              )) : (
                <span className="text-gray-400">ไม่มีหมวดหมู่</span>
              )}
            </div>
            {/* รูปภาพที่เหลือ */}
            <ImageTravel photos={item.photos} item={item} />
            {/* ปุ่มคัดลอกลิงค์  */}
            <button className=" absolute right-100 bottom-0" onClick={() => navigator.clipboard.writeText(item.url)}>
            <img src="./src/assets/images/link.png" alt="link" className="w-15 h-15" />
            </button>
          </div>
        </div>
      )) : (
        <div className="text-center text-gray-500 py-8">
          {searchResult && searchResult.length === 0 ? "ไม่พบผลการค้นหา" : "กำลังโหลด..."}
        </div>
      )}
    </div>
  );
}

export default ViewTravel;
