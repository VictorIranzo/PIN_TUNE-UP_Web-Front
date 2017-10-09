// JUST AN EXAMPLE

export const validators = {
  startsWithHello: function(value) {
    return value.indexOf('hello') === 0;
  },
  passwordDifferentFromEmail: function(value, email) {
    return value !== email;
  }
};
