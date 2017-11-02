const min = ENVIRONMENT === 'production' ? '.min' : '';

export const homeRoute = {
  path: 'ut',
  loadChildren:
    `src/app/modules/ut/dist/tune-up.ut.umd${min}.js#ut#UtModule`
};
