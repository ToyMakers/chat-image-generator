import create from "zustand";

// 초기 상태 정의
const useStore = create((set) => ({
  chats: [],
  addChat: (chat) =>
    set((state) => ({
      chats: [
        ...state.chats,
        {
          id: chat.id, // 고유한 id 생성
          user: chat.user || "",
          ProfilePicture: {
            url: chat.ProfilePicture?.url || "",
            width: chat.ProfilePicture?.width || "",
            height: chat.ProfilePicture?.height || "",
            backgroundColor: chat.ProfilePicture?.backgroundColor || "",
            borderWidth: chat.ProfilePicture?.borderWidth || "",
            borderColor: chat.ProfilePicture?.borderColor || "",
            borderStyle: chat.ProfilePicture?.borderStyle || "",
            borderRadius: chat.ProfilePicture?.borderRadius || "",
          },
          content: chat.content || "",
          time: chat.time || "",
        },
      ],
    })),

  // 특정 채팅을 업데이트하는 함수
  updateChat: (id, updatedChat) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === id
          ? { ...chat, ...updatedChat } // id가 일치하는 채팅 업데이트
          : chat
      ),
    })),

  // 특정 채팅 삭제 함수
  removeChat: (id) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.id !== id),
    })),

  // 참가자 추가/제거
  addParticipants: () => set((state) => ({ count: state.count + 1 })),
  removeParticipants: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
