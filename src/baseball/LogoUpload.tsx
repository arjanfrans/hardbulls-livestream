import { convertFileToBase64 } from "../service/file-to-base64";
import { resizeImage } from "../service/image-resize";

interface Props {
  type: 'home'|'away',
  value?: string,
  handleFileUpload: (file: string | undefined) => void
}

const LOGO_CACHE: {[key: string]: Blob} = {};

export const LogoUpload = ({type, value, handleFileUpload}: Props) => {
  const convertAndResizeImage = async (file: File|Blob) => {
    return await resizeImage(100, await convertFileToBase64(file));
  }

  const logos = [
   'logo_bb.png',
   'logo_dd.png',
   'logo_di.png',
   'logo_fc.png',
   'logo_gh.png',
   'logo_hb.png',
   'logo_kv.png',
   'logo_st.png',
   'logo_vm.png',
   'logo_vw.png',
  ]

  const handleSelect = async (value: string ) => {
    let content = LOGO_CACHE[value];

    if (!content) {
      const response = await fetch(`${window.location.origin}/teams/${value}`)

      content = await response.blob()

      LOGO_CACHE[value] = content;
    }

    handleFileUpload(await convertAndResizeImage(content));
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
      <div>
        <select onChange={(event) => handleSelect(event.target.value)}>
          <option></option>
          {logos.map(logo => (
            <option key={logo} value={logo}>{logo}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
