export default function Icon({ number,color,children }) {
  return (
    <div className="flex content-center items-center gap-0 hover:text-blue-500 group">
      <div className={`text-gray-400  h-8 w-8 flex justify-center items-center rounded-full cursor-pointer group-hover:text-blue-500 transition-all group-hover:bg-opacity-15`}
       onMouseEnter={(e) => {e.currentTarget.style.backgroundColor=color;e.currentTarget.style.background.opacity="0.1";e.currentTarget.style.transitionDuration="0.3s";e.currentTarget.style.color="while";}}
       onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";e.currentTarget.style.opacity =1}}
     >
        {children}
      </div>
      <h1 className="text-sm ">{number}</h1>
    </div>
  );
}