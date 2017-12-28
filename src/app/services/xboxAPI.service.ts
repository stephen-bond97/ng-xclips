import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class XboxAPI {
    private readonly apiKey: string = "9281c90da58c2f68efdfc94cf76f7af9607962d5";
    private readonly baseURL: string = "https://xboxapi.com";
    private readonly options = { headers: { "X-Auth": this.apiKey } };

    public constructor(private http: HttpClient) {
    }

    public getXUID(gamertag: string): Observable<{ xuid: string }> {
        let path = this.baseURL + `/v2/xuid/${gamertag}`;
        return this.http.get(path, this.options) as Observable<{ xuid: string }>;
    }
}