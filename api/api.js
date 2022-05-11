// const API_ENDPOINT =
//   'https://youngcodej22.github.io/mgs-miniproject-api/bankList.json';

const API_ENDPOINT =
  '/api/accounts.json';

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
      // console.log(lists);
      const result = lists['bankList'];
      // console.log(result);
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
  },
  subAccounts: async () => {
    try {
      const lists = await request(
        `${API_ENDPOINT}`
      );
      const result = lists['subAccounts'];
      // console.log(result);
      
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
  },
  mainAccounts: async () => {
    try {
      const lists = await request(
        `${API_ENDPOINT}`
      );
      const result = lists['mainAccounts'];
      
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
  },
};

async function printDatas (selector) {
  const bankLists = await api.bankLists();
  const subAccounts = await api.subAccounts();
  const mainAccounts = await api.mainAccounts();

  // console.log(bankLists.data);
  // console.log(subAccounts.data);
  console.log(mainAccounts.data);

  const els = document.querySelectorAll(selector);
  const datas = mainAccounts.data;
  
  els.forEach(el => {
    console.log('el', el);
    if(el.dataset.title === '생활비') {
      createEl(datas, el);
    } else if(el.dataset.title === "의민이 용돈") {
      createEl(datas, el);
    } else {
      createEl(datas, el);
    }
  })
}

function createEl(datas, el) {
  const strong = document.createElement('strong');
  strong.className = 'account__total-number heading-primary';
  const span = document.createElement('span');
  
  for(let i=0; i<datas.length; i++) {
    strong.textContent = datas[i].deposit
    span.textContent = '원';
    el.appendChild(strong);
    el.appendChild(span);
  }
}

// 1,240,000
printDatas('.account__total-box', );