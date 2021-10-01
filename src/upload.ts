/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Upload {
  id: string;
  category: string;
  mimeType: string;
  fileName: string;
  storageBucket: string;
  storagePath: string;
  downloadURL: string;
  metadata?: any;
}

export interface UploadInput {
  ref: string;
  lang: string;
  category: string;
}

export type SignedURLAction = 'read' | 'write' | 'delete' | 'resumable';

export interface SignedURL {
  action: SignedURLAction;
  expiresAt: Date;
  fileName: string;
  storagePath: string;
  downloadURL: string;
}
