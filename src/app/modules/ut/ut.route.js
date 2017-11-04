import {DetailsComponent} from './src';

export const utRoute = {
  path: 'uts',
  loadChildren:
    'src/app/modules/ut/dist/tune-up.ut.umd.js#ut#UtModule',
};

export const utDetails = {
  path: 'uts/:id',
  component: DetailsComponent,
};
