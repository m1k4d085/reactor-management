import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  CUSTOMER_INSERT_KEY,
  GenericMutationProps,
  GenericMutationUseProps,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"customers">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"customers"> | null, Vars>,
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
    mutationKey: [CUSTOMER_INSERT_KEY],
    mutationFn: supabase?.customers.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [CUSTOMER_INSERT_KEY, mutation];
}
export default useInsert;
