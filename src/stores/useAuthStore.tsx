import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface AuthState {
  token: string;
  addToken: (val: any) => void;
  logout: (val: any) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      token: '',
      addToken: (val: any) => set({token: val}),
      logout: () => set({token: ''}),
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
