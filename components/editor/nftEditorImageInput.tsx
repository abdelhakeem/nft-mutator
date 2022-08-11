import {
  JsonMetadata,
  toMetaplexFileFromBrowser,
} from "@metaplex-foundation/js";
import { ChangeEventHandler, useRef } from "react";
import useMetaplex from "../../hooks/useMetaplex";

type NftEditorImageInputProps = {
  field: string;
  label: string;
  metadata: JsonMetadata;
  updateMetadata: Function;
};

const NftEditorImageInput = ({
  field,
  label,
  metadata,
  updateMetadata,
}: NftEditorImageInputProps) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const metaplex = useMetaplex();

  const handleUploadClick = () => {
    fileUploadRef.current!.click();
  };

  const handleUploadChange: ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (metaplex && e.target.files?.length) {
      const metaplexFile = await toMetaplexFileFromBrowser(e.target.files[0]);
      updateMetadata({ ...metadata, [field]: "Uploading..." });
      const uri = await metaplex.storage().upload(metaplexFile);
      updateMetadata({ ...metadata, [field]: uri });
    }
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex flex-row gap-2 items-center justify-between">
        <input
          type="text"
          className="input flex-1"
          value={metadata[field] as string}
          onChange={(e) =>
            updateMetadata({ ...metadata, [field]: e.target.value })
          }
        />
        <input
          type="file"
          className="hidden"
          accept="image/*"
          ref={fileUploadRef}
          onChange={handleUploadChange}
        />
        <button type="button" className="btn" onClick={handleUploadClick}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default NftEditorImageInput;
