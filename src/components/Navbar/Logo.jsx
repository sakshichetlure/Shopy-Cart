import React from "react";
import ShopyCartLogo from "../../assets/image.png";

function Logo() {
  return (
    <div className="size-20 flex justify-center items-center bg-zinc-50 rounded-full overflow-hidden">
      <img src={ShopyCartLogo} alt="Shopy Cart Logo" className="w-full h-full"/>

    </div>
  );
}

export default Logo;
