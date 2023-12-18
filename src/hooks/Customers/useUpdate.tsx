import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  CUSTOMER_UPDATE_KEY,
  GenericMutationProps,
  GenericMutationUseProps,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"customers">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"customers"> | null, Vars>,
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
    mutationKey: [CUSTOMER_UPDATE_KEY],
    mutationFn: supabase?.customers.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [CUSTOMER_UPDATE_KEY, mutation];
}
export default useUpdate;
