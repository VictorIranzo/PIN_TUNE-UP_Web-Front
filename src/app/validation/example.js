export const customValidators = {
  startsWithHello: function (value) {
    return value.indexOf('hello') === 0;
  },
  passwordDifferentFromEmail: function (value, email) {
    return value !== email;
  }
};
export const myValidations = {
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

/*
  <form>
    <input type="text" rule="foo.email" [(ngModel)]="person.profile.email" mame="email">
  </form>
*/
