// 채팅 스타일 컴포넌트
export default function ChatProperty() {
  return (
    <>
      <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
        <h1 className="text-[15px] font-semibold mb-[20px]">말풍선</h1>
        <form className="flex flex-col w-[300px] text-[13px]  ">
          <label className="flex flex-col my-[10px]">
            배경 색
            <input
              type="text"
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px] ">
            가장자리 여백
            <input
              type="number"
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px] font-normal"
            />
          </label>
          <label className="flex flex-col my-[10px]">
            간격
            <input
              type="number"
              className="mt-[5px] pl-[10px] rounded-[5px] h-[35px]  font-normal"
            />
          </label>
        </form>
      </div>
    </>
  );
}
