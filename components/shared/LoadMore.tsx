'use clients'

import Image from "next/image";

function LoadMore() {
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div>
          <Image
            src="/assets/icons/loader.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;