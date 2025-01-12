import useAuthStore from '../store/useAuthStore';

export const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Array.prototype.map
        .call(atob(base64), (char) => {
          const code = char.charCodeAt(0).toString(16).padStart(2, '0');
          return `%${code}`;
        })
        .join(''),
    );
    const decodedData = JSON.parse(jsonPayload);

    // userId를 zustand로 저장
    const { setUserId } = useAuthStore.getState();
    if (decodedData.userId) {
      setUserId(decodedData.userId);
    }

    return decodedData;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
