export default function Element({ setPage, children, name }) {
  return (
    <a
      href=""
      onClick={(e) => {
        if (setPage) {
          e.preventDefault();
          setPage(name);
        }
      }}
      className="cursor-pointer"
    >
      <div
        className={`flex items-center gap-3 p-2 rounded-3xl hover:bg-gray-700 hover:bg-opacity-30  w-fit ${
          { name } ? "pr-6" : ""
        }`}
      >
        <div id="icon" className="text-3xl">
          {children}
        </div>
        {name ? (
          <div
            id="content"
            className=" first-letter:uppercase text-md font-medium"
          >
            {name}
          </div>
        ) : (
          ""
        )}
      </div>
    </a>
  );
}
