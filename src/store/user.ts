import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: '748577',
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
