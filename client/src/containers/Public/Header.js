import React, { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { path } from "../../ultils/constant";
import { Link, useNavigate } from "react-router-dom";

const { CiCirclePlus, FiUserPlus, CiLogin } = icons;

const Header = () => {
  const navigate = useNavigate();

  const goLogin = useCallback((flag) => {
    navigate(path.login, { state: { flag } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-1100 flex justify-between items-center px-10 py-2">
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>
      <div className="flex items-center gap-1">
        <span className="text-sm">Bản Đôn xin chào ! </span>
        <Button
          text="Đăng nhập"
          textColor="text-white"
          bgColor="bg-secondary"
          onClick={() => goLogin(false)}
          IcAfter={CiLogin}
        />
        <Button
          text="Đăng ký"
          textColor="text-white"
          bgColor="bg-secondary"
          onClick={() => goLogin(true)}
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
