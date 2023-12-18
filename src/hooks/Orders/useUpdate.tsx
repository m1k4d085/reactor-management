import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  ORDER_UPDATE_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"orders">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"orders"> | null, Vars>,
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
    mutationKey: [ORDER_UPDATE_KEY],
    mutationFn: supabase?.orders.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ORDER_UPDATE_KEY, mutation];
}
export default useUpdate;
