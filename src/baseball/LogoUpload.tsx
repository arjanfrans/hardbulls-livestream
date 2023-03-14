import { convertFileToBase64 } from "../service/file-to-base64";

interface Props {
  type: 'home'|'away',
  value?: string,
  handleFileUpload: (file: string | undefined) => void
}

export const LogoUpload = ({type, value, handleFileUpload}: Props) => {
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
              handleFileUpload(await convertFileToBase64(files[0]));
            }
          }}
        />
      </div>
    </div>
  );
};
