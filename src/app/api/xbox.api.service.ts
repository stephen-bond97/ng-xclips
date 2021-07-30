import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

	public getProfile(gamertag: string): Observable<ProfileSetting[]> {
		return this.request(`profile/${gamertag}`);
	}

	public getActivity(gamertag: string): Observable<AchievementInfo[]> {
		return this.request(`activity/${gamertag}`).pipe(map((x: any) => x.activityItems));
	}

	private request<T>(endpoint: string): Observable<T> {
		return this.http.get(this.url + endpoint) as Observable<T>;
	}
}