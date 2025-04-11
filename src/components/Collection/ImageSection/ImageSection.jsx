import Image from "next/image";

export default function ImageSection() {
  return (
    <div
      className="w-1/2 ">
      <div className="">
        <div className="" >
          <div className="border-animation">
            <div className="img-box2">
              <div className="img1">
                <Image
                  src="/why_1_1.webp"
                  alt="Webteck"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-20 ">
        <button className="btn-anim">Manish</button>

      </div>
    </div>
  );
}
