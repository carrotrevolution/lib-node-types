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

export interface UploadParams {
  ref: string;
  lang: string;
  category: string;
}
