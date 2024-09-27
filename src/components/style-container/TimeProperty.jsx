import { useState } from "react";
import { ChromePicker } from "react-color";
import { useStore } from "../../store/chatStore";
export default function TimeProperty() {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const { setTimeTextColor, setTimeTextSize } = useStore();

  const handleShowColorPicker = () => {
    setIsColorPicker(!isColorPicker);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    setTimeTextColor(color.hex);
  };
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">시간</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            글자 크기
            <input
              type="number"
              onChange={(e) => setTimeTextSize(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px] ">
            글자 색
            <input
              type="text"
              value={color}
              onClick={handleShowColorPicker}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
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
