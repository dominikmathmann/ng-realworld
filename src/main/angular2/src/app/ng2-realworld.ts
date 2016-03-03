import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HelloWorld} from './components/helloworld/helloworld'

@Component({
    selector: 'app',
    providers: [],
    templateUrl: 'app/template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        new Route({ path: '/hello', component: HelloWorld, name: 'HelloWorld', useAsDefault: true}),
])
export class App {

    constructor() { }

}
