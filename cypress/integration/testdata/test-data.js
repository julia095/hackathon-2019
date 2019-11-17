export const loginData = [
    {
      testName: 'throw an error with no username and password',
      userName: '',
      password: '',
      // v1: expectedResult: 'Both Username and Password must be present ',
      expectedResult: 'Please enter both username and password',
      redirect: false,
    },
    {
      testName: 'throw an error with username, but with no password',
      userName: 'user',
      password: '',
      expectedResult: 'Password must be present',
      redirect: false,
    },
    {
      testName: 'throw an error with password, but with no username',
      userName: '',
      password: 'password',
      expectedResult: 'Username must be present',
      redirect: false,
    },
    {
      testName: 'let you login with both username and password',
      userName: 'username',
      password: 'password',
      // v1: expectedResult: 'https://demo.applitools.com/hackathonApp.html',
      expectedResult: urlRedirect,
      redirect: true,
    },
  ];
  
  
  export const loginDataAI = [
    {
      testName: 'throw an error with no username and password',
      userName: '',
      password: '',
    },
    {
      testName: 'throw an error with username, but with no password',
      userName: 'user',
      password: '',
    },
    {
      testName: 'throw an error with password, but with no username',
      userName: '',
      password: 'password',
    },
    {
      testName: 'let you login with both username and password',
      userName: 'username',
      password: 'password',
    },
  ];