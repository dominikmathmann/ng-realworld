import {Component} from 'angular2/core'

import {HelloService} from '../../services/HelloService'
@Component({
    templateUrl: 'app/components/helloworld/helloworld.html',
    providers: [HelloService]
})
export class HelloWorld{
    
    constructor(private helloService: HelloService){
        this.helloService.getHello().subscribe(result => this.hello=result);
    }
    
    hello:string;
}

