import { AVATARS_PATH, UPLOAD_PRESET, UPLOAD_URL } from '@constants/index';
import type { UploadRequestOption } from 'rc-upload/lib/interface';

export const handleUploadToStorage = async ({ file, onSuccess }: UploadRequestOption) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('folder', AVATARS_PATH);

  try {
    const response = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Upload failed');

    const data = await response.json();
    const imageUrl = data.secure_url;
    onSuccess?.({});
    return imageUrl;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
