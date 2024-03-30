"use client";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { devtools, persist, StateStorage } from "zustand/middleware";

import { del, get, set } from "idb-keyval";
import { create } from "zustand";

interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: string;
}

interface State {
  user: IUser;
  token: string | null;
  setUser: (_: IUser) => void;
  setToken: (_: string | null) => void;
}

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

const onExit = async () => {
  deleteCookie("@token-client");
  indexedDB.deleteDatabase("store-client");
};

const persistStorage = (): StateStorage => ({
  getItem: async (name: string): Promise<string | null> => {
    const stateString = await storage.getItem(name);
    return stateString ? JSON.parse(stateString) : null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await storage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await storage.removeItem(name);
  },
});

export const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        user: {} as IUser,
        token: getCookie("@token-client") || null,
        setUser: (userData: IUser) => set({ user: userData }),
        setToken: (token: string | null) => {
          if (token) {
            setCookie("@token-client", token); 
            set({ token: token });
          } else {
            deleteCookie("@token-client");
            set({ token: null });
          }
        },
      }),
      {
        name: "store-client",
        getStorage: persistStorage,
      }
    )
  )
);

export { onExit };
