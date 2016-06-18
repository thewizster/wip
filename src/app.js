export class App {
    configureRouter(config, router) {
        config.title = 'WIP';
        config.map([
            { route: ['', 'orders'], name: 'orders', moduleId: './orders', nav: true, title: 'Orders' },
            { route: ['people'], name: 'people', moduleId: './people', nav: true, title: 'People'},
            { route: 'users', name: 'users', moduleId: './users', nav: true, title: 'Github Users'}
        ]);
        
        this.router = router;
    }
}