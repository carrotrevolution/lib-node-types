import {User} from './user';

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

export interface ProfileToken {
  id: string;
  status: string;
  displayName: string;
  character: string;
}

export interface UserToken {
  user: User;
  token: FullIdToken;
  profile?: ProfileToken;
}

export interface SignUpWithEmailAndPasswordParams {
  firstName?: string;
  lastName?: string;
  preferredLang?: string;
  acceptMarketing?: boolean;
}
