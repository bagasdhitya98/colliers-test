import AsyncStorage from "@react-native-async-storage/async-storage";

const saveData = async (key, value, expires = null) => {
  try {
    const item = {
      value,
      expires: expires ? new Date().getTime() + expires * 1000 : null,
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (error) {
    console.error("Error saving data:", error);
    return false;
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const item = JSON.parse(value);
      if (item.expires && new Date().getTime() > item.expires) {
        await AsyncStorage.removeItem(key);
        return null;
      }
      return item.value;
    }
    return null;
  } catch (error) {
    console.error("Error getting data:", error);
    return null;
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Error removing data:", error);
    return false;
  }
};

export { saveData, getData, removeData };
