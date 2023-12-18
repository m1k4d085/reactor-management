import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  ADDRESS_UPDATE_KEY,
  GenericMutationProps,
  GenericMutationUseProps,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"addresses">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"addresses"> | null, Vars>,
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
    mutationKey: [ADDRESS_UPDATE_KEY],
    mutationFn: supabase?.addresses.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ADDRESS_UPDATE_KEY, mutation];
}
export default useUpdate;
