import React, { memo, useState } from "react";
import icons from "../ultils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/97-copy_1726530381.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/01_1726530365.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/02_1726530366.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/03_1726530368.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  return (
    <div className="w-full flex border-t border-orange-700 py-4">
      <div className="w-2/5 flex flex-wrap items-center gap-[2px] relative cursor-pointer">
        <img
          src={images[0]}
          alt="preview"
          className="w-[150px] h-[152px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[150px] h-[152px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[150px] h-[152px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[150px] h-[152px] object-cover"
        />
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-1 ">
          4 ảnh
        </span>
        <span
          className="text-white absolute right-6 bottom-1"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill size={26} color="red" />
          ) : (
            <RiHeartLine size={26} />
          )}
        </span>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4 w-full">
          <div className="text-red-600 font-medium">
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            GẦN TRƯỜNG GTVT, NGOẠI THƯƠNG, HUTECH, HỒNG BÀNG, UEF - AN NINH,
            TIỆN NGHI - TT Q.BÌNH THẠNH ĐƯỜNG UNG VĂN KHIÊM
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>

        <div className=" w-full  flex items-center justify-between gap-2 mt-2">
          <span className="font-bold w-[40%] flex-3 text-green-600  ">
            2.500.000 VNĐ
          </span>
          <span className="flex-1 ">30m²</span>
        </div>
        <div className=" w-full  flex items-center justify-between mb-2">
          <span className="w-3/5">
            Địa chỉ: Hẻm 90 Thành Thái, Phường 12, Quận 10, Hồ Chí Minh
          </span>
          <p className="text-gray-600 text-end w-2/5 font-serif ">
            99 phút trước
          </p>
        </div>
        <p className="text-gray-500 w-full text-ellipsis overflow-hidden">
          - Để đảm bảo an ninh cho Sinh Viên ở Ngõ Sen giờ hoạt động từ 6h - 24h
          (không có giờ tự do), ra vào cổng bằng khóa vân tay.- Đ/c: Ngõ Sen
          97/15, Ung Văn…
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className=" flex items-center">
            <img
              src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/03_1726530368.jpg"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full mr-3"
            />
            <p>sss</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Goi 01231231231
            </button>
            <button
              type="button"
              className="text-blue-700 px-1 rounded-md border border-blue-700"
            >
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
