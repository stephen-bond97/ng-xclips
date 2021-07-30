interface XboxClipsResponse {
    gameClips: GameClip[];
    pagingInfo: PagingInfo;
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
    gameClipUris: ResourceUris[];
    xuid: string;
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
    
  interface ResourceUris {
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
  
  interface PagingInfo {
    continuationToken: string;
  }

  interface ProfileSetting {
    id: string;
    value: string;
  }

  interface AchievementInfo {
    achievementScid: string;
    achievementId: string;
    achievementType: string;
    achievementIcon: string;
    gamerscore: number;
    achievementName: string;
    achievementDescription: string;
    isSecret: boolean;
    hasAppAward: boolean;
    hasArtAward: boolean;
    contentImageUri: string;
    contentTitle: string;
    platform: string;
    titleId: string;
    activity: Activity;
    userImageUriMd: string;
    userImageUriXs: string;
    description: string;
    date: string;
    hasUgc: boolean;
    activityItemType: string;
    contentType: string;
    shortDescription: string;
    itemText: string;
    itemImage: string;
    shareRoot: string;
    feedItemId: string;
    itemRoot: string;
    hasLiked: boolean;
    authorInfo: AuthorInfo;
    gamertag: string;
    realName: string;
    displayName: string;
    userImageUri: string;
    userXuid: string;
  }
  
  interface AuthorInfo {
    name: string;
    secondName: string;
    imageUrl: string;
    authorType: string;
    id: string;
  }
  
  interface Activity {
    numShares: number;
    numLikes: number;
    numComments: number;
    ugcCaption?: any;
    authorType: string;
    locator: string;
    achievementScid: string;
    achievementId: string;
    activityItemType: string;
    achievementType: string;
    userXuid: string;
    achievementIcon: string;
    date: string;
    gamerscore: number;
    contentType: string;
    achievementName: string;
    titleId: string;
    achievementDescription: string;
    platform: string;
    isSecret: boolean;
    sandboxid: string;
    sharedSourceUser: number;
    userKey?: any;
    rarityCategory: string;
    scid: string;
    rarityPercentage: number;
  }