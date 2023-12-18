import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  ORDER_INSERT_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"orders">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"orders"> | null, Vars>,
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
    mutationKey: [ORDER_INSERT_KEY],
    mutationFn: supabase?.orders.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ORDER_INSERT_KEY, mutation];
}
export default useInsert;
