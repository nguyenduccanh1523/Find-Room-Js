import React, { memo } from "react";
import icons from "../ultils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/97-copy_1726530381.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/01_1726530365.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/02_1726530366.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/09/17/03_1726530368.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = () => {
  return (
    <div className="w-full flex border-t border-orange-700 py-4">
      <div className="w-2/5 flex flex-wrap items-center gap-[2px]">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
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
        <div className="my-2 flex items-center justify-between gap-2">
          <span className="font-bold flex-3 text-green-600  whitespace-nowrap overflow-hidden text-ellipsis">
            2.500.000 VNĐ
          </span>
          <span className="flex-1 ml-5">30m²</span>
          <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis">
            Quận Bình Thạnh, Hồ Chí Minh
          </span>
        </div>
        <p className="text-gray-600 text-end w-full mb-3 font-serif">99 phút trước</p>
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
