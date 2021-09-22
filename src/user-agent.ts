/* eslint-disable @typescript-eslint/no-explicit-any */

export interface UserAgentLocation {
  countryCode?: string;
  city?: string;
}

export interface AppUserAgent {
  id: string;
  userId: string;
  deviceId: string;
  env?: string;
  agent?: any;
  agentString?: string;
  osInfo?: any;
  packageInfo?: any;
  location?: UserAgentLocation;
  createdAt?: Date;
  updatedAt?: Date;
}
