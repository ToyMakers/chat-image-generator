function AddParticipantsModal() {
  return (
    <div className=" w-[300px] h-[280px] bg-white border-[2px] border-gray-100 border-opacity-50 overflow-hidden flex-col px-[20px] pt-[30px] items-center rounded-[30px]">
      <h1 className="font-bold text-[16px]">참여자 추가하기</h1>
      <form className="flex flex-col mt-[10px] text-[14px]">
        <label className="flex flex-col">
          이름
          <input
            type="text"
            max={5} //5글자 제한
            placeholder="5자 이내로 이름을 입력해주세요"
            className="w-[200px] py-[5px] pl-[5px] mt-[5px] border-[1px] rounded-[5px]"
          />
        </label>
        <label className="flex flex-col mt-[10px]">
          프로필 사진
          <input type="file" className="mt-[5px] " />
        </label>
        <button className="w-[100px] mt-[25px] rounded-[10px] px-[5px] py-[5px] bg-red-200 text-white">
          추가하기
        </button>
      </form>
    </div>
  );
}
export default AddParticipantsModal;
