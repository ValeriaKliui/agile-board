import type { UploadRequestOption } from "rc-upload/lib/interface";

const {
  VITE_CLOUDINARY_UPLOAD_PRESET,
  VITE_CLOUDINARY_UPLOAD_URL,
  VITE_AVATARS_PATH,
} = import.meta.env;

export const handleUploadToStorage = async ({
  file,
  onSuccess,
}: UploadRequestOption) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", VITE_AVATARS_PATH);

  try {
    const response = await fetch(VITE_CLOUDINARY_UPLOAD_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Upload failed");

    const data = await response.json();
    const imageUrl = data.secure_url;
    onSuccess?.({});
    return imageUrl;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
