export const customValidators = {
  startsWithHello: function(value) {
    return value.indexOf('hello') === 0;
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
    ]
  }
};

/*
  <form>
    <input type="text" rule="foo.email" [(ngModel)]="person.profile.email" mame="email">
  </form>
*/
