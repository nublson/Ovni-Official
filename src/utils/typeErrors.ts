export const ERRORS = [
  {
    code: 'UserNotFoundException',
    message: 'User not found',
    field: 'email',
  },
  {
    code: 'CodeMismatchException',
    message: 'Your code is invalid',
    field: 'code',
  },
  {
    code: 'NotAuthorizedException',
    message: 'This password does not match',
    field: 'password',
  },
  {
    code: 'UsernameExistsException',
    message: 'This email is already being used',
    field: 'email',
  },
];
