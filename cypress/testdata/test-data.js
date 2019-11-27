import {urlRedirectV1, urlRedirectV2} from '../support/config'
export const loginDataV1 = [
    {
      testName: 'throw an error with no username and password',
      userName: '',
      password: '',
      expectedResult: 'Both Username and Password must be present ',
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
      expectedResult: urlRedirectV1,
      redirect: true,
    },
  ];

  export const loginDataV2 = [
    {
      testName: 'throw an error with no username and password',
      userName: '',
      password: '',
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
      expectedResult: urlRedirectV2,
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