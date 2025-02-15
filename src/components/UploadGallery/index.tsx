import { Alert, Spin, Upload } from "antd";

import Title from "antd/es/typography/Title";
import { PhotoGalleryProps } from "@components/UploadGallery/interfaces";

export const UploadGallery = ({
  isEditable = false,
  filesData,
  // maxPhotoAmount = filesData.length,
  title,
  itemRender,
  handleClick,
  isLoading,
  errorMessage,
}: PhotoGalleryProps) => {
  // const [fileList, setFileList] = useState<UploadFile[]>(filesData);
  // useEffect(() => {
  //     setFileList(filesData)
  // }, [filesData])

  // const [imageUrl, setImageUrl] = useState(null);

  // const handleUpload = async ({ file }) => {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  //     try {
  //         const response = await fetch(CLOUDINARY_UPLOAD_URL, {
  //             method: "POST",
  //             body: formData,
  //         });

  //         if (!response.ok) throw new Error("Upload failed");

  //         const data = await response.json();
  //         setImageUrl(data.secure_url);
  //         console.log("Image uploaded successfully!");
  //     } catch (error) {
  //         console.error("Error uploading file:", error);
  //         console.log("Upload failed!");
  //     }
  // };

  //////////

  // const handleChange: UploadProps['onChange'] = ({
  //     fileList: newFileList,
  // }) => setFileList(newFileList);

  // const hasUploadButton =
  //     fileList.length < maxPhotoAmount || isEditable;

  if (isLoading) return <Spin />;

  if (errorMessage) return <Alert type="error" message={errorMessage} />;

  return (
    <>
      <Title level={4}>{title}</Title>
      <Upload
        // customRequest={handleUpload}
        listType="picture-card"
        fileList={filesData}
        onPreview={handleClick}
        // onChange={handleChange}
        disabled={!isEditable}
        itemRender={itemRender}
        showUploadList={{ previewIcon: "✓", showRemoveIcon: isEditable }}
      >
        {/* {hasUploadButton ? (
                    <Button>
                        +
                    </Button>
                ) : null} */}
      </Upload>
    </>
  );
};
