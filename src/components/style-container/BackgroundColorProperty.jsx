import { useState } from "react";
import { ChromePicker } from "react-color";
import { useStyleStore } from "../../store/styleStore";

export default function BackgroundProperty() {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const { setBackgroundColor, setBackgroundPadding, setBackgroundMargin } =
    useStyleStore();

  const handleShowColorPicker = () => {
    setIsColorPicker(!isColorPicker);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    setBackgroundColor(color.hex);
  };
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">배경</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            배경 색
            <input
              type="text"
              value={color}
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
          <label className="flex flex-col my-[10px] ">
            가장자리 여백
            <input
              type="number"
              onChange={(e) => setBackgroundPadding(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            간격
            <input
              type="number"
              onChange={(e) => setBackgroundMargin(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
        </form>
      </div>
    </>
  );
}
