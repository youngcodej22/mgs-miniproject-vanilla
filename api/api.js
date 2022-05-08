const API_ENDPOINT =
  'https://youngcodej22.github.io/mgs-miniproject-api/bankList.json';

function handleErrors(response) {
  let errorData;
  if (response.status === 404) {
    errorData = { message: 'Not Found', status: 404 };
    throw errorData;
  }
  if (response.status === 500) {
    errorData = { message: 'Internal Server error', status: 500 };
    throw errorData;
  }
}

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      await handleErrors(response);
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  bankLists: async () => {
    try {
      const lists = await request(
        `${API_ENDPOINT}`
      );
      const result = lists;

      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  }
};

export { api };
