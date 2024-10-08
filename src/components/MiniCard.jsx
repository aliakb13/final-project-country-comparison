import ReadMoreReact from "read-more-react";
import constUrl from "../constants";

export default function MiniCard({ data }) {
  const prefix = constUrl.nyt.prefix;
  const image = data.multimedia[0];
  return (
    <div className="flex flex-col gap-3 shadow-md bg-[#1E1E2F] text-white p-5">
      <ReadMoreReact
        text={data.snippet}
        min={40}
        ideal={80}
        max={120}
        readMoreText={"..."}
      />
      <img src={`${prefix}${image.url}`} alt="" />
      <a href={data.web_url} className="poppins-regular text-md">
        READ MORE...
      </a>
    </div>
  );
}
