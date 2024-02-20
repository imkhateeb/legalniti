import SearchTerm from "./search-box";
import DropDown from "./drop-down";
import Navigations from "./navigations";
import Contents from "./contents";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="flex flex-col w-[80%] pt-8 pb-2 gap-5">
        <div className="flex justify-between">
          <div />
          <SearchTerm />
        </div>
        <div className="flex justify-between">
          <DropDown />
          <div />
        </div>
      </div>

      <div className="border-[0.2px] border-gray-400 w-[80%] my-2" />

      <div className="w-[78%] my-2">
        <Navigations />
      </div>

      <div className="w-[80%] my-5 border-[2px] border-[#8D04C1] shadow-lg rounded-3xl">
        <Contents />
      </div>

    </div>
  )
}
