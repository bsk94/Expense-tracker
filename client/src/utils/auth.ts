export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

export const isTokenValid = (): boolean => {
  const token = localStorage.getItem('token');
  return (token && token?.length > 14) || false;
};

export const removeTokens = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};
