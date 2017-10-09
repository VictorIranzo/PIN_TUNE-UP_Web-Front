/**
 * Those are the validations for the entities of the module.
 * If there are many maybe write them in different files and merge them.
 */

// main object
export const validations = {
  // entity
  foo: {
    // field, array of validations
    email: [
      // every validation is an object
      {
        // rule, it is the name of a function (custom or form validator.js)
        isEmail: {
          // message if incorrect
          message: 'Must be a valid email'
        }
      },
      {
        contains: {
          message: 'Must contain .es',
          // hardcoded arguments
          arguments: ['.es']
        }
      },
      {
        // custom validation function, we dont need arguments
        startsWithHello: {
          message: 'Email must start with "hello"'
        }
      }
      // maybe better:
      /**
       {
         startsWith: {
           message: 'Email must start with "hello"',
           arguments: ['hello']
         }
       }
       */
    ],
    // another field
    password: [
      {
        passwordDifferentFromEmail: {
          message: 'Password must be different from email',
          arguments: [['email']] // argument inside an array means: take it from the model
          // it takes the one whose name in the form matches this.
        }
      }
    ]
  }
};
