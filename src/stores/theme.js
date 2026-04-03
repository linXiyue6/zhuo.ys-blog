import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      document.body.className = this.isDark ? 'dark' : ''
    }
  }
})