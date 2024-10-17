import { useState } from "react";
import { ChromePicker } from "react-color";
import { useStyleStore } from "../../store/styleStore";

export default function ProfileProperty() {
  const {
    setProfileWidth,
    setProfileHeight,
    setProfileBackgroundColor,
    setProfileBorderThickness,
    setProfileBorderColor,
    setProfileBorderStyle,
    setProfileBorderRadius,
  } = useStyleStore();
  const [isColorPickerBackground, setIsColorPickerBackground] = useState(false);
  const [isColorPickerBorder, setIsColorPickerBorder] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [borderColor, setBorderColor] = useState("#000");

  const handleShowColorPickerBackground = () => {
    setIsColorPickerBackground(!isColorPickerBackground);
  };
  const handleShowColorPickerBorder = () => {
    setIsColorPickerBorder(!isColorPickerBorder);
  };

  const handleChangeCompleteBackground = (color) => {
    setBackgroundColor(color.hex);
    setProfileBackgroundColor(color.hex);
  };
  const handleChangeCompleteBorder = (color) => {
    setBorderColor(color.hex);
    setProfileBorderColor(color.hex);
  };
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">프로필 사진</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            넓이
            <input
              type="number"
              onChange={(e) => setProfileWidth(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px] ">
            높이
            <input
              type="number"
              onChange={(e) => setProfileHeight(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            배경색
            <input
              type="text"
              value={backgroundColor}
              onClick={handleShowColorPickerBackground}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
            {isColorPickerBackground ? (
              <ChromePicker
                className="mt-[5px]"
                color={backgroundColor}
                onChangeComplete={handleChangeCompleteBackground}
              />
            ) : (
              <></>
            )}
          </label>
          <label className="flex flex-col my-[10px]">
            테두리 두께
            <input
              type="number"
              onChange={(e) => setProfileBorderThickness(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            테두리 색
            <input
              type="text"
              value={borderColor}
              onClick={handleShowColorPickerBorder}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
            {isColorPickerBorder ? (
              <ChromePicker
                className="mt-[5px]"
                color={borderColor}
                onChangeComplete={handleChangeCompleteBorder}
              />
            ) : (
              <></>
            )}
          </label>
          <label className="flex flex-col my-[10px]">
            테두리 스타일
            <select
              name="border style"
              className="mt-[5px] pl-[10px] h-[35px] "
              onChange={(e) => setProfileBorderStyle(e.target.value)}
            >
              <option value="none">none</option>
              <option value="solid">solid</option>
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
              <option value="groove">groove</option>
              <option value="ridge">ridge</option>
              <option value="inset">inset</option>
              <option value="outset">outset</option>
            </select>
          </label>
          <label className="flex flex-col my-[10px]">
            모서리 둥글기
            <input
              type="number"
              onChange={(e) => setProfileBorderRadius(e.target.value)}
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
        </form>
      </div>
    </>
  );
}
