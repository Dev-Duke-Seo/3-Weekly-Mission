const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getUser = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};

export const getFolder = async () => {
  const response = await fetch(`${API_BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};

export const getSampleFolder = async () => {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};
