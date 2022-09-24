const loginService = {
  logIn(payload) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  },
};

export default loginService;
