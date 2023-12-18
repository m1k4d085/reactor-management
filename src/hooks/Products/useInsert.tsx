import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  PRODUCT_INSERT_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"products">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"products"> | null, Vars>,
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
    mutationKey: [PRODUCT_INSERT_KEY],
    mutationFn: supabase?.products.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [PRODUCT_INSERT_KEY, mutation];
}
export default useInsert;
