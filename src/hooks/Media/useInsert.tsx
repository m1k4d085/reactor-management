import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  MEDIA_INSERT_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"media">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"media"> | null, Vars>,
    GenericMutationUseProps<Vars>,
    GenericMutationProps<Vars> {}

function useInsert({
  onSuccess,
  onError,
  onSettled,
  onMutate,
}: UseInsertProps = {}): [string, typeof mutation] {
  const supabase = useSupabase();
  const mutation = useMutation({
    mutationKey: [MEDIA_INSERT_KEY],
    mutationFn: supabase?.media.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [MEDIA_INSERT_KEY, mutation];
}
export default useInsert;
