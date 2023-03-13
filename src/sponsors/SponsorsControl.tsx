import { convertFilesToBase64 } from "../service/file-to-base64";

interface Props {
  handleFileUpload: (files: string[]) => void
}

export const SponsorsControl = ({handleFileUpload}: Props) => {
  return (
    <input
      type="file"
      name="sponsors"
      multiple
      onChange={async (event) => event.target.files && handleFileUpload(await convertFilesToBase64(event.target.files))}
    />
  );
};
