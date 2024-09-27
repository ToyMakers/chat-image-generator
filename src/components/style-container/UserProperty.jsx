import { useState } from "react";
import { useStore } from "../../store/chatStore";

import { ChromePicker } from "react-color";

export default function UserProperty() {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const { setSenderFontWeight, setSenderFontSize, setSenderFontColor } =
    useStore();

  const handleShowColorPicker = () => {
    setIsColorPicker(!isColorPicker);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    setSenderFontColor(color.hex);
  };
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">말한 사람</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            글자 굵기
            <input
              type="number"
              min={100}
              step={100} // 100 단위로 입력받음
              onChange={(e) => setSenderFontWeight(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px] ">
            글자 크기
            <input
              type="number"
              onChange={(e) => setSenderFontSize(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            글자 색
            <input
              type="text"
              onClick={handleShowColorPicker}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
            {isColorPicker ? (
              <ChromePicker
                className="mt-[5px]"
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            ) : (
              <></>
            )}
          </label>
        </form>
      </div>
    </>
  );
}
