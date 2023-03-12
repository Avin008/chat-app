import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  authStatus: boolean;
  token: null | string;
  useAuth: (token: string) => void;
  removeAuth: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      authStatus: false,
      token: null,
      useAuth: (token) =>
        set({ authStatus: true, token: token }),
      removeAuth: () =>
        set({ authStatus: false, token: null }),
    }),
    { name: "auth-storage" }
  )
);

export { useAuthStore };
