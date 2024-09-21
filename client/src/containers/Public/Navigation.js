import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
  { name: "Nhà cho thuê", path: "nha-cho-the" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
  { name: "Tìm người ở ghép", path: "tim-nguoi-o-ghep" },
];

const notActive = 'hover:bg-danger px-4 h-full flex items-center bg-secondary'
const active = 'hover:bg-danger px-4 h-full flex items-center  bg-danger'
const Navigation = () => {
  return (
    <div className="w-screen flex justify-center items-center h-[40px] bg-secondary text-white">
      <div className="w-1100 flex items-center h-full text-sm font-medium">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div key={index} className='h-full flex justify-center items-center'>
                <NavLink to={item.path} className={({ isActive }) => isActive ? active : notActive}>
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
