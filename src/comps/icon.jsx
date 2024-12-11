export default function Icon({ number, children }) {
  return (
    <div className="flex content-center items-center gap-0 hover:text-blue-500 group">
      <div className="text-gray-400  h-8 w-8 flex justify-center items-center rounded-full cursor-pointer group-hover:bg-blue-500 group-hover:text-blue-500 transition-all group-hover:bg-opacity-15"
      >
        {children}
      </div>
      <h1 className="text-sm ">{number}</h1>
    </div>
  );
}
