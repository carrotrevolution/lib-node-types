export interface UserAgentLocation {
  countryCode?: string;
  city?: string;
}

export interface AppUserAgent {
  id: string;
  userId: string;
  deviceId: string;
  env?: string;
  agent?: unknown;
  agentString?: string;
  osInfo?: unknown;
  packageInfo?: unknown;
  location?: UserAgentLocation;
  createdAt?: Date;
  updatedAt?: Date;
}
