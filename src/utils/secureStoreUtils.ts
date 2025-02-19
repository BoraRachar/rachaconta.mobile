import * as SecureStore from 'expo-secure-store'

export const SecureStoreUtils = {
  getItem: async (key: string): Promise<string | null> => {
    try {
      return await SecureStore.getItemAsync(key)
    } catch (error) {
      console.error(`Erro ao recuperar o ${key} no SecureStore:`, error)
      return null
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      await SecureStore.setItemAsync(key, value)
    } catch (error) {
      console.error(`Erro ao salvar o ${key} no SecureStore:`, error)
    }
  },
  deleteItem: async (key: string) => {
    try {
      await SecureStore.deleteItemAsync(key)
    } catch (error) {
      console.error(`Erro ao deletar o ${key} no SecureStore:`, error)
    }
  },
}
