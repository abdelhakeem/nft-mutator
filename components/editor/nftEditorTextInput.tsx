import { JsonMetadata } from "@metaplex-foundation/js";

type NftEditorTextInputProps = {
  field: string;
  type: string;
  label: string;
  metadata: JsonMetadata;
  updateMetadata: Function;
};

const NftEditorTextInput = ({
  field,
  type,
  label,
  metadata,
  updateMetadata,
}: NftEditorTextInputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="input"
        value={metadata[field] as string | number}
        onChange={(e) =>
          updateMetadata({ ...metadata, [field]: e.target.value })
        }
      />
    </div>
  );
};

export default NftEditorTextInput;
