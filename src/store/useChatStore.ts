import { create } from 'zustand';

type ChatState = {
  messages: string[];
  user: any | null;
  setUser: (user: any) => void;
  addMessage: (msg: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  user: null,
  setUser: (user) => set({ user }),
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
}));
