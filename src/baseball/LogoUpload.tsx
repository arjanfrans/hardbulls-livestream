import { convertFileToBase64 } from "../service/file-to-base64";
import { resizeImage } from "../service/image-resize";

interface Props {
  type: 'home'|'away',
  value?: string,
  handleFileUpload: (file: string | undefined) => void
}

export const LogoUpload = ({type, value, handleFileUpload}: Props) => {
  const convertAndResizeImage = async (file: File) => {
    return await resizeImage(100, await convertFileToBase64(file));
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <label>{type} logo</label>
      </div>
      <div>
        <input
          type="file"
          name={`${type}Logo`}
          onChange={async (event) => {
            const files = event.target.files;

            if (files && files[0]) {
              handleFileUpload(await convertAndResizeImage(files[0]));
            }
          }}
        />
      </div>
    </div>
  );
};
