/**
 * Custom validatos or validation functions, they are
 * always objects that contain one or more function
 * that return true or false.
 */
export const validators = {
  startsWithHello: function(value) {
    return value.indexOf('hello') === 0;
  },
  passwordDifferentFromEmail: function(value, email) {
    return value !== email;
  }
};
