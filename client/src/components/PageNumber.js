import React, { memo } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,

} from "react-router-dom";

const notActive =
  "w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300 rounded-md";
const active =
  "w-[46px] h-[48px] flex justify-center items-center bg-[#E13427] text-white hover:opacity-90 rounded-md";

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const navigate = useNavigate();

  const [paramsSeach] = useSearchParams()
  let entries = paramsSeach.entries()


  const append = (entries) => {
    let params = []
    paramsSeach.append('page', +text)
    for (let entry of entries) {
        params.push(entry);
    }
    let searchParamsObject = {}
    // eslint-disable-next-line array-callback-return
    params?.map(i => {
      searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] }
    })
    // params?.forEach(i => {
    //     if (Object.keys(searchParamsObject)?.some(item => item === i[0] && item !== 'page')) {
    //         searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
    //     } else {
    //         searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
    //     }
    // })
    return searchParamsObject
  }



  const handleChangePage = () => {
    if (!(text === "...")) {
      setCurrentPage(+text);
      navigate({
        pathname: "/",
        search: createSearchParams(append(entries)).toString()
      });
    }
  };
  return (
    <div
      className={+text === +currentPage ? `${active} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}` : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
