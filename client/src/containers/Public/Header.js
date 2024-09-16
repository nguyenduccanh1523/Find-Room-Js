import React, { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { path } from "../../ultils/constant";
import { useNavigate } from "react-router-dom";

const { CiCirclePlus, FiUserPlus, CiLogin } = icons;

const Header = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goLogin = useCallback(() => {
    navigate(path.login);
  });

  return (
    <div className="w-1100 flex justify-between items-center px-10 py-2">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[50px] object-contain"
      />
      <div className="flex items-center gap-1">
        <span className="text-sm">Bản Đôn xin chào ! </span>
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-secondary"
          onClick={goLogin}
          IcAfter={CiLogin}
        />
        <Button
          text="Đăng ký"
          textColor="text-white"
          bgColor="bg-secondary"
          onClick={goLogin}
          IcAfter={FiUserPlus}
        />
        <Button
          text="Đăng tin mới"
          textColor="text-white"
          bgColor="bg-danger"
          IcAfter={CiCirclePlus}
        />
      </div>
    </div>
  );
};

export default Header;
