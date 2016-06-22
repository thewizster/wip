export function configure(aurelia) {
   aurelia.use
    .standardConfiguration()
    .plugin('aurelia-dialog'); 

    //.developmentLogging()

   aurelia.start().then(() => aurelia.setRoot());
}