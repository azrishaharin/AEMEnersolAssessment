import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataDashboardService {
  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(`http://test-demo.aem-enersol.com/api/dashboard`)
      .pipe(map(result => result));
  }
}
