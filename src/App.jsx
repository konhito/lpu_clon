import { useEffect, useState } from "react";
import LoginPart from "./Login";

const App = () => {
  return (
    <div className="flex ">
      <ImgPart />

      <LoginPart />
    </div>
  );
};

function ImgPart() {
  const Images = [
    "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2024_8_14_13_51.png",
    "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_1_8_12_26.jpg",
    "https://files.lpu.in//umsweb//Events//umseventAssets//27273_2025_1_25_10_20.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <div className="w-[50%]">
      <img
        className="max-w-[800px] object-cover  shadow-md"
        src={Images[currentIndex]}
        alt={`Event Image`}
        height={860.425}
      />
    </div>
  );
}

export default App;
