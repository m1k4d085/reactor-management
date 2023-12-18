import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  MEDIA_UPDATE_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"media">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"media"> | null, Vars>,
    GenericMutationUseProps<Vars>,
    GenericMutationProps<Vars> {}

function useUpdate({
  onSuccess,
  onError,
  onSettled,
  onMutate,
}: UseUpdateProps = {}): [string, typeof mutation] {
  const supabase = useSupabase();
  const mutation = useMutation({
    mutationKey: [MEDIA_UPDATE_KEY],
    mutationFn: supabase?.media.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [MEDIA_UPDATE_KEY, mutation];
}
export default useUpdate;
