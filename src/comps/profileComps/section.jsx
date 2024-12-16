export default function Section({ name, setSection, section }) {
  return (
    <div
      onClick={() => setSection(name)}
      className="hover:bg-[#2c2b2b65] h-[100%] cursor-pointer flex flex-col flex-1 text-center content-center items-center"
    >
      <p className="text-gray-400">{name}</p>
      {section === name && (
        <div className=" h-1 w-[15%] mt-1 rounded-3xl mb-1 bg-[#1d9bf0]"></div>
      )}
    </div>
  );
}
