import { create } from "zustand";

export const useStore = create((set) => ({
  chatList: [],
  userList: [],
  userId: 0,
  chatId: 0,

  //유저 추가
  setUserList: (username, profileImg) =>
    set((state) => {
      const newUserId = state.userId + 1;
      return {
        userList: [
          ...state.userList,
          {
            userId: newUserId,
            username: username,
            profileImg: profileImg,
          },
        ],
      };
    }),
  //메시지 추가
  setChatList: (user, content, time) =>
    set((state) => {
      const newChatId = state.chatId + 1;
      return {
        chatList: [
          ...state.chatList,
          {
            chatId: newChatId,
            user: "",
            content: "",
            time: "",
          },
        ],
        chatId: newChatId,
      };
    }),

  // 메시지 삭제
  deleteChatById: (chatId) =>
    set((state) => ({
      chatList: state.chatList.filter((chat) => chat.chatId !== chatId),
    })),
  // 메시지 수정
  updateChatById: (chatId, updatedUser, updatedContent, updatedTime) =>
    set((state) => ({
      chatList: state.chatList.map((chat) =>
        chat.chatId === chatId
          ? {
              chatId,
              user: updatedUser,
              content: updatedContent,
              time: updatedTime,
            }
          : chat
      ),
    })),
  //선택한 메시지에 user 추가
  addUserToChatById: (chatId, newUser) =>
    set((state) => ({
      chatList: state.chatList.map((chat) =>
        chat.chatId === chatId
          ? {
              ...chat,
              user: newUser, // user를 새로운 유저로 업데이트
            }
          : chat
      ),
    })),
}));
