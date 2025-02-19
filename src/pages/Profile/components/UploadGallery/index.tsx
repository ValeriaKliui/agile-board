import { Alert, Button, Upload, UploadFile } from 'antd';

import Title from 'antd/es/typography/Title';
import { PhotoGalleryProps } from '@components/UploadGallery/types';
import './styles.css';
import { CheckOutlined } from '@ant-design/icons';
import { useUpload } from '@hooks';

export const UploadGallery = ({
  isEditable = false,
  filesData = [],
  maxPhotoAmount = filesData.length,
  title,
  itemRender,
  handleClick,
  onUpload,
  onRemove,
}: PhotoGalleryProps) => {
  const { fileList, isErrorUploading, handleChange, handleUpload } = useUpload<UploadFile>({
    filesData,
    onUpload,
    onRemove,
  });

  const hasUploadButton = fileList.length < maxPhotoAmount;

  return (
    <div>
      <Title level={4}>{title}</Title>
      {isErrorUploading && <Alert type="error" message={isErrorUploading} />}
      <Upload
        customRequest={handleUpload}
        listType="picture-card"
        fileList={fileList}
        onPreview={handleClick}
        onChange={handleChange}
        disabled={!isEditable}
        itemRender={itemRender}
        showUploadList={{
          previewIcon: <CheckOutlined style={{ color: 'white' }} />,
          showRemoveIcon: isEditable,
        }}
      >
        {hasUploadButton ? <Button>+</Button> : null}
      </Upload>
    </div>
  );
};
