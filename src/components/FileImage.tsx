import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SupabaseFile } from "../contexts/Supabase";
import { useTheme } from "../hooks/useTheme";
import { getBgColor } from "../util";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface FileImageProps {
  file: SupabaseFile;
  width?: number;
  remove?: (filename: string) => void;
}

function FileImage({ file, width = 208, remove }: FileImageProps) {
  const theme = useTheme();
  return (
    <div
      className={`rounded p-2 relative ${getBgColor(
        theme?.themeType || "primary"
      )}`}
      style={{
        flexBasis: width,
      }}
    >
      {remove && (
        <span
          className="absolute bg-red-500 rounded-full px-2 py-1 top-1 right-1 transition-transform hover:scale-125"
          onClick={() => remove(file.name)}
        >
          <FontAwesomeIcon icon={faTrash} className="text-light" />
        </span>
      )}
      <img src={file.url} width={width - 8} />
    </div>
  );
}
export default FileImage;
