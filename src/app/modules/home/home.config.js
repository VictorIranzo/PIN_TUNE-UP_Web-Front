export const homeRoute = {
    path: 'home',
    loadChildren: 'src/app/modules/home/dist/tune-up.home.umd.min.js#home#HomeModule'
};
export const homeMenuItem = {
    path: 'home',
    text: 'Inicio',
    icon: 'TODO',
    adminOnly: false
};