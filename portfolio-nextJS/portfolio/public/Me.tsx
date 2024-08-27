import Image from "next/image";
import { useEffect, useState } from "react";

export default function Me() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  });
  return (
    // <Image
    //   src={"/Me.svg"}
    //   alt="Picture of the author"
    //   width={500}
    //   height={500}
    //   layout="responsive"
    //   className={`duration-1000 ease-in-out ${
    //     fadeIn ? "opacity-100" : "opacity-0"
    //   }`}
    // />

    <div style={{ position: 'relative', width: '100%', height: '450px' }}>
      <Image
        src="/Me.svg"
        alt="Description of image"
        layout="fill" // Makes the image cover the container
      />
    </div>
  );
}
