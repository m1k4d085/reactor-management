import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks/useTheme";
import { getBgColor, getTextColor } from "../util";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { DragEvent, useState } from "react";

interface FileDragDropProps {
  size?: number;
  upload: (file: File) => Promise<void>;
  onError?: (error: unknown) => void;
}

function FileDragDrop({ size, upload, onError }: FileDragDropProps) {
  const theme = useTheme();
  const [onDrag, setOnDrag] = useState(false);

  async function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    try {
      for (const droppedFile of droppedFiles) {
        if (!droppedFile.name.match(/\.(jpg|jpeg|gif|png|webp|svg)$/i)) {
          throw new Error("Hai droppato file non permessi");
        }
      }
      for (const droppedFile of droppedFiles) {
        await upload(droppedFile);
      }
    } catch (error) {
      onError?.(error);
    } finally {
      setOnDrag(false);
    }
  }

  return (
    <div
      className={`rounded p-2 flex flex-col justify-center items-center ${
        onDrag
          ? "border border-dark dark:border-light"
          : getBgColor(theme?.themeType || "primary")
      }`}
      style={{
        height: size,
        width: size,
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setOnDrag(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setOnDrag(false);
      }}
      onDrop={onDrop}
    >
      <span
        className={`${
          onDrag
            ? getTextColor(theme?.themeType || "primary")
            : "text-light dark:text-dark"
        }`}
      >
        Trascina i tuoi file qui per caricarli
      </span>
      <FontAwesomeIcon
        icon={faAdd}
        className={`text-5xl ${
          onDrag
            ? getTextColor(theme?.themeType || "primary")
            : "text-light dark:text-dark"
        }`}
      />
    </div>
  );
}
export default FileDragDrop;
