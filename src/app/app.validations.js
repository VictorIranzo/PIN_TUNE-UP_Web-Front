// JUST AN EXAMPLE
export const validations = {
  foo: {
    email: [
      {
        isEmail: {
          message: 'must be a valid email'
        }
      },
      {
        contains: {
          message: 'must contain .es',
          arguments: ['.es']
        }
      },
      {
        startsWithHello: {
          message: 'email must start with "hello"'
        }
      }
    ],
    password: [
      {
        passwordDifferentFromEmail: {
          message: 'password must be different from email',
          arguments: [['email']]
        }
      }
    ]
  }
};
