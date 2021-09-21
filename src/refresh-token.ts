export interface FullIdToken {
  idToken: string;
  expiresAt: number;
  refreshToken?: string;
  category: string;
}

export interface RefreshToken {
  refreshToken: string;
  userId: string;
  profileId?: string;
}
