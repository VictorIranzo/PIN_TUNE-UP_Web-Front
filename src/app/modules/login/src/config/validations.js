export const validations = {
  login: {
    email: [
      {
        isEmail: {
          message: 'Debe ser un email válido',
        },
      },
      {
        required: {
          message: 'El email es requerido',
        },
      },
    ],
    password: [
      {
        required: {
          message: 'La contraseña es requerida',
        },
      },
    ],
  },
};
