export interface Upload {
  id: string;
  category: string;
  mimeType: string;
  fileName: string;
  storageBucket: string;
  storagePath: string;
  downloadURL: string;
  metadata?: unknown;
}

export interface UploadParams {
  ref: string;
  lang: string;
  category: string;
}
