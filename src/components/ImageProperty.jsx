import { useState } from "react";
import { useProfileStore } from "../store/profileStore.js";

function ImageProperty() {
  // Zustand에서 상태와 setter 함수 가져오기
  const setWidth = useProfileStore((state) => state.setWidth);
  const setHeight = useProfileStore((state) => state.setHeight);
  const setBackgroundColor = useProfileStore(
    (state) => state.setBackgroundColor
  );
  const setBorderThickness = useProfileStore(
    (state) => state.setBorderThickness
  );
  const setBorderColor = useProfileStore((state) => state.setBorderColor);
  const setBorderStyle = useProfileStore((state) => state.setBorderStyle);
  const setBorderRadius = useProfileStore((state) => state.setBorderRadius);

  // 로컬 상태로 입력 필드 관리
  const [width, setLocalWidth] = useState(0);
  const [height, setLocalHeight] = useState(0);
  const [backgroundColor, setLocalBackgroundColor] = useState("");
  const [borderThickness, setLocalBorderThickness] = useState(0);
  const [borderColor, setLocalBorderColor] = useState("");
  const [borderStyle, setLocalBorderStyle] = useState("");
  const [borderRadius, setLocalBorderRadius] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Zustand 상태 업데이트
    setWidth(width);
    setHeight(height);
    setBackgroundColor(backgroundColor);
    setBorderThickness(borderThickness);
    setBorderColor(borderColor);
    setBorderStyle(borderStyle);
    setBorderRadius(borderRadius);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4  bg-bg-200">
      <div>
        <label className="text-[15px] font-semibold">너비: </label>
        <input
          type="number"
          value={width}
          onChange={(e) => setLocalWidth(parseInt(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">높이: </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setLocalHeight(parseInt(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">배경색: </label>
        <input
          type="text"
          value={backgroundColor}
          onChange={(e) => setLocalBackgroundColor(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">테두리 두께: </label>
        <input
          type="number"
          value={borderThickness}
          onChange={(e) => setLocalBorderThickness(parseInt(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">테두리 색: </label>
        <input
          type="text"
          value={borderColor}
          onChange={(e) => setLocalBorderColor(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">테두리 스타일: </label>
        <input
          type="text"
          value={borderStyle}
          onChange={(e) => setLocalBorderStyle(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label className="text-[15px] font-semibold">모서리 둥글기: </label>
        <input
          type="number"
          value={borderRadius}
          onChange={(e) => setLocalBorderRadius(parseInt(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <button type="submit" className="bg-white p-2">
        적용하기
      </button>
    </form>
  );
}

export default ImageProperty;
