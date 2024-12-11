export default function Card({ title, desc, btn, sub }) {
  let classes;
  sub
    ? (classes =
        "m-4 leading-8 font-semibold text-[15px] bg-[#1d9bf0] rounded-2xl pl-4 pr-4 hover:bg-[#3e96d1] ")
    : (classes =
        "pr-4 pl-4 pt-1 pb-1 leading-8 font-semibold text-[13px] text-[#1d9bf0] hover:bg-[#0c0b0b] w-[100%] text-left ");
  return (
    <div className="text-[20px] border border-gray-600  rounded-xl mr-4 w-[100%] overflow-hidden">
      <h1 className="pr-4 pl-4 pb-2 pt-2 first-letter:uppercase font-bold ">
        {title}
      </h1>
      <div className="">
        <div className={` text-[15px] ${sub == 1 ? "pr-4 pl-4" : ""} `}>
          {desc}
        </div>

        {/* <button className={`${sub===1?"leading-8 font-semibold text-[15px] bg-[#1d9bf0] rounded-2xl pl-4 pr-4 hover:bg-[#3e96d1] "
        :" text-[13px] text-[#3e96d1] hover:bg-[#0c0b0b] w-[100%] text-left" }`}>
    {btn}
    </button> */}
        <button className={classes}> {btn} </button>
      </div>
    </div>
  );
}
