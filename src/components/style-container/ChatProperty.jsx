import { useState } from "react";
import { ChromePicker } from "react-color";
import { useStyleStore } from "../../store/styleStore";

// 채팅 스타일 컴포넌트
export default function ChatProperty() {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
  const {
    setChatTextColor,
    setChatBorderRadius,
    setChatFontWeight,
    setChatFontSize,
    setChatPadding,
    setChatWidth,
  } = useStyleStore();

  const handleShowColorPicker = () => {
    setIsColorPicker(!isColorPicker);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    setChatTextColor(color.hex);
  };
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">말풍선</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            글자 색
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
            모서리 둥글기
            <input
              type="number"
              onChange={(e) => setChatBorderRadius(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            글자 굵기
            <input
              type="number"
              min={100}
              step={100} // 100 단위로 입력받음
              onChange={(e) => setChatFontWeight(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            글자 크기
            <input
              type="number"
              onChange={(e) => setChatFontSize(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            가장자리 여백
            <input
              type="number"
              onChange={(e) => setChatPadding(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            너비
            <input
              type="number"
              onChange={(e) => setChatWidth(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
        </form>
      </div>
    </>
  );
}
