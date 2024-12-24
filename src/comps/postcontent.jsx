export default function PostContent({ Imgsrc, children }) {
  return (
    <div id="test" className="pr-3 flex flex-col gap-3">
      {children}
      {Imgsrc && <img src={Imgsrc} alt="random img" className="rounded-xl" />}
    </div>
  );
}
