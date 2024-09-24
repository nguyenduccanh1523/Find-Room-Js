import React, { memo, useState } from "react";
import icons from "../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/Common/formatVietnameseToString";
const indexs = [0, 1, 2, 3];

const {
  GrStar,
  RiHeartFill,
  RiHeartLine,
  BsBookmarkStarFill,
  TbReportMoney,
  RiCrop2Line,
  HiOutlineLocationMarker,
} = icons;

const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const navigate = useNavigate();

  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(<GrStar className="star-item" size={18} color="yellow" />);
    return stars;
  };

  return (
    <div className="w-full flex border-t border-orange-700 py-4">
      <Link
        to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
        className="w-2/5 flex flex-wrap items-center gap-[2px] relative cursor-pointer"
      >
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[150px] h-[152px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-1 ">
          {`${images.length} ảnh`}
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
      </Link>
      <div className="w-3/5">
        <div className="flex justify-between gap-4 w-full">
          <div className="text-red-600 font-medium">
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>

        <div className=" w-full  flex items-center justify-between gap-2 mt-2">
          <span className="font-bold w-[40%] flex flex-3 text-green-600 text-ellipsis overflow-hidden whitespace-nowrap">
            <TbReportMoney size={20} color="green" className="mt-[2px]" />
            {attributes?.price}
          </span>
          <span className="flex-3 flex ">
            <RiCrop2Line size={20} color="black" className="mt-[2px] mr-1" />
            {attributes?.acreage}
          </span>
        </div>
        <div className=" w-full  flex items-center justify-between my-2 ">
          <span className="w-4/5 text-ellipsis overflow-hidden whitespace-nowrap flex">
            <HiOutlineLocationMarker
              size={20}
              color="black"
              className="mt-[2px] mr-1"
            />
            {`${address.split(",")[address.split(",").length - 2]},${
              address.split(",")[address.split(",").length - 1]
            }`}
          </span>
          <p className="text-gray-600 text-end w-2/5 font-serif ">
            {attributes?.published}
          </p>
        </div>
        <p className="text-gray-500 w-full text-ellipsis overflow-hidden h-[70px]">
          {description}
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className=" flex items-center">
            <img
              src="https://phongtro123.com/images/default-user.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full mr-3"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              {`Gọi ${user?.phone}`}
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
