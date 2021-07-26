import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class XboxAPI {
	private url = 'https://xbox-clips.herokuapp.com/';

	public constructor(private http: HttpClient) { }

	public healthCheck(): Observable<void> {
		return this.request(``);
	}

	public getClips(gamertag: string): Observable<XboxClipsResponse> {
		return this.request(`clips/${gamertag}`);
	}

	private request<T>(endpoint: string): Observable<T> {
		return this.http.get(this.url + endpoint) as Observable<T>;
	}
}