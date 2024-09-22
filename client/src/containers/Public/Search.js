import React from "react";
import { SearchItem } from "../../components";
import icons from "../../ultils/icons";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  RiDeleteBack2Line,
  FiSearch
} = icons;

const Search = () => {
  return (
    <div className="p-[10px] w-4/5 bg-[#febb02] rounded-lg flex-col lg:flex-row flex gap-2 items-center justify-around">
      <SearchItem
        IconBefore={<MdOutlineHouseSiding />}
        fontWeight
        IconAfter={<RiDeleteBack2Line className="font-medium text-black" />}
        text="Phòng trọ, nhà trọ"
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<BsChevronRight />}
        text="Toàn quốc"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<BsChevronRight />}
        text="Chọn giá"
      />
      <SearchItem
        IconBefore={<RiCrop2Line />}
        IconAfter={<BsChevronRight />}
        text="Chọn diện tích"
      />
      <button
        type="button"
        //onClick={handleSearch}
        className="outline-none py-2 px-4 w-full bg-secondary text-[13.3px] flex items-center justify-center gap-2 text-white font-medium rounded-lg"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
