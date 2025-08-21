import { Link } from "react-router-dom";

function ViewTravel({ searchResult, onCategoryClick }) {
  return (
    <div className="flex flex-col gap-1 w-2/3 mx-auto">
      {searchResult.map((item,index) => (
        <div key={item.eid} className="flex flex-row gap-4 relative w-[1300px] h-auto p-4">
          <img
            src={item.photos[0]}
            alt={item.title}
            className="w-[300px] h-[250px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-2 w-1/2">
            <Link
              className="text-lg font-bold text-left"
              to={item.url}
              target="_blank"
            >
              {item.title}
            </Link>
            <p className="text-sm text-gray-500">
              {item.description.length > 100
                ? item.description.substring(0, 100) + " ... "
                : item.description}
            </p>
            <Link
              className="text-blue-500 underline rounded-md text-left"
              to={item.url}
              target="_blank"
            >
              อ่านต่อ
            </Link>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-500">หมวด</span>
              {item.tags.map((tag, tagIndex) => (
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
              ))}
            </div>
            <div className="flex flex-row gap-6 mt-2">
              <img
                src={item.photos[1]}
                alt={item.title}
                className="w-[100px] h-[100px] rounded-2xl object-cover"
              />
              <img
                src={item.photos[2]}
                alt={item.title}
                className="w-[100px] h-[100px] rounded-2xl object-cover"
              />
              <img
                src={item.photos[3]}
                alt={item.title}
                className="w-[100px] h-[100px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewTravel;
