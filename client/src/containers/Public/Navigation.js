import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { formatVietnameseToString } from "../../ultils/Common/formatVietnameseToString";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const notActive = "hover:bg-danger px-4 h-full flex items-center bg-secondary";
const active = "hover:bg-danger px-4 h-full flex items-center  bg-danger";
const Navigation = () => {
  const dispatch = useDispatch();
  const { categories  } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  return (
    <div className="w-full flex justify-center items-center h-[40px] bg-secondary text-white">
      <div className="w-4/5 flex items-center h-full text-sm font-medium">
        <div className="h-full flex justify-center items-center">
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Trang chủ
          </NavLink>
        </div>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
