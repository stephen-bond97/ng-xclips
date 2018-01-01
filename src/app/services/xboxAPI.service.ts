import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class XboxAPI {
    private readonly apiKey: string = "56aecbd991ac8a0eeb3003353fbe93f61646cdee";
    private readonly baseURL: string = "https://xboxapi.com";
    private readonly options = { headers: { "X-Auth": this.apiKey } };

    public constructor(private http: HttpClient) {
    }

    public getXUID(gamertag: string): Observable<XAPI.XUIDResponse> {
        let path = this.baseURL + `/v2/xuid/${gamertag}`;
        return this.http.get(path, this.options) as Observable<XAPI.XUIDResponse>;
    }

    public getClips(xuid: string): Observable<XAPI.GameClip[]> {
        let path = this.baseURL + `/v2/${xuid}/game-clips`;
        return this.http.get(path, this.options) as Observable<XAPI.GameClip[]>;
    }
}