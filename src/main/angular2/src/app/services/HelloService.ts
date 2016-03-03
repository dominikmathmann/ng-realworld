import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HelloService {
    
    constructor(private http: Http){}
    
    getHello(): Observable<string>{
        return this.http.get('webresources/hello')
            .map(result => result.text())
    }
}