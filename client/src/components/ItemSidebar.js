import React, { memo } from "react";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/Common/formatVietnameseToString";

const { BsChevronRight } = icons;

const ItemSidebar = ({ title, content }) => {
  return (
    <div className="p-4 rounded-md bg-white w-full border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-col gap-2">
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <Link
                to={`${formatVietnameseToString(item.value)}`}
                key={item.code}
                className="flex gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed"
              >
                <BsChevronRight size={10} color="#ccc" />
                <p>{item.value}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default memo(ItemSidebar);
