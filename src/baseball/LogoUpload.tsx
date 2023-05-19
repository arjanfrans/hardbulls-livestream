import { convertFileToBase64 } from "../service/file-to-base64";
import { resizeImage } from "../service/image-resize";
import { getResizedImage } from "../service/assets";
import { Image } from "./model/Image";
import { CONFIG } from "../config";

interface Props {
  type: "home" | "away",
  value?: string,
  handleFileUpload: (image: Image) => void
}

export const LogoUpload = ({ type, value, handleFileUpload }: Props) => {
  const convertAndResizeImage = async (file: File | Blob) => {
    return await resizeImage(100, await convertFileToBase64(file));
  };

  const handleSelect = async (value: string) => {
    handleFileUpload({
      name: value,
      data: await getResizedImage(`teams/${value}`)
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              handleFileUpload({
                data: await convertAndResizeImage(files[0])
              });
            }
          }}
        />
      </div>
      <div>
        <select onChange={(event) => handleSelect(event.target.value)}>
          <option></option>
          {CONFIG.logos.map(logo => (
            <option key={logo} value={logo}>{logo}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
