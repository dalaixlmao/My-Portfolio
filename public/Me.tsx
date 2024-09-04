// import Image from "next/image";
// import { useEffect, useState } from "react";

export default function Me() {
  // const [fadeIn, setFadeIn] = useState(false);
  // useEffect(() => {
  //   setFadeIn(true);
  // });
  return (<div className="mt-10"
    style={{
      backgroundImage: 'url("/images/Me.svg")',
      backgroundSize: 'contain', // Adjust the size of the background
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: "no-repeat",
      width:"400px",
      height:"400px"
    }}
  >
    </div>
  );
}
