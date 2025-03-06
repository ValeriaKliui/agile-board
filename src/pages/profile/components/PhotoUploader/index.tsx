import './styles.css';

import { CheckOutlined } from '@ant-design/icons';
import { useUpload } from '@pages/profile/hooks';
import { Alert, Button, Flex, Upload, UploadFile } from 'antd';
import { Typography } from 'antd';

import { PhotoUploaderProps } from './types';

const { Title } = Typography;

export const PhotoUploader = ({
  isEditable = false,
  filesData = [],
  maxPhotoAmount = filesData.length,
  title,
  itemRender,
  handleClick,
  onUpload,
  onRemove,
}: PhotoUploaderProps) => {
  const { fileList, isErrorUploading, handleChange, handleUpload } = useUpload<UploadFile>({
    filesData,
    onUpload,
    onRemove,
  });

  const hasUploadButton = fileList.length < maxPhotoAmount;

  return (
    <Flex vertical gap="middle">
      <Title level={4}>{title}</Title>
      {isErrorUploading && <Alert type="error" message={isErrorUploading} />}
      <Upload
        customRequest={handleUpload}
        accept="image/png, image/jpeg"
        listType="picture-circle"
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
    </Flex>
  );
};
