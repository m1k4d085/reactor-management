import { useEffect, useState } from "react";
import ErrorBaloon from "../../components/ErrorBaloon";
import "./Media.css";
import { useSupabase } from "../../hooks/useSupabase";
import { SupabaseFile } from "../../contexts/Supabase";
import FileImage from "../../components/FileImage";
import FileDragDrop from "../../components/FileDragDrop";

function Media() {
  const supabase = useSupabase();
  const [error, setError] = useState<Error | null>(null);
  const [files, setFiles] = useState<SupabaseFile[]>();

  useEffect(() => {
    async function initFiles() {
      try {
        setFiles(await supabase?.listFiles());
      } catch (error) {
        setError(error as Error);
      }
    }
    initFiles();
  }, [supabase]);

  async function removeFile(filename: string) {
    try {
      await supabase?.removeFile(filename);
      setFiles(await supabase?.listFiles());
    } catch (error) {
      setError(error as Error);
    }
  }

  async function uploadFile(file: File) {
    try {
      await supabase?.uploadFile(file);
      setFiles(await supabase?.listFiles());
    } catch (error) {
      setError(error as Error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold mb-5 flex gap-3 justify-center items-center">
        Media
      </h1>
      <ErrorBaloon reset={() => setError(null)}>{error?.message}</ErrorBaloon>
      <div className="flex justify-center">
        <FileDragDrop
          size={200}
          onError={(error) => setError(error as Error)}
          upload={uploadFile}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        {files?.map((file, index) => (
          <FileImage key={index} file={file} remove={removeFile} />
        ))}
      </div>
    </div>
  );
}
export default Media;
