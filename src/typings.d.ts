/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare namespace XAPI {
  interface XUIDResponse {
    xuid: string;
  }

  interface GameClip {
    gameClipId: string;
    state: string;
    datePublished: string;
    dateRecorded: string;
    lastModified: string;
    userCaption: string;
    type: string;
    durationInSeconds: number;
    scid: string;
    titleId: number;
    rating: number;
    ratingCount: number;
    views: number;
    titleData: string;
    systemProperties: string;
    savedByUser: boolean;
    achievementId: string;
    greatestMomentId: string;
    thumbnails: Thumbnail[];
    gameClipUris: GameClipUris[];
    xuid: number;
    clipName: string;
    titleName: string;
    gameClipLocale: string;
    clipContentAttributes: string;
    deviceType: string;
    commentCount: number;
    likeCount: number;
    shareCount: number;
    partialViews: number;
  }
  
  interface GameClipUris {
    uri: string;
    fileSize: number;
    uriType: string;
    expiration: string;
  }
  
  interface Thumbnail {
    uri: string;
    fileSize: number;
    thumbnailType: string;
  }
}