import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  ORDER_LINE_INSERT_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"order_lines">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"order_lines"> | null, Vars>,
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
    mutationKey: [ORDER_LINE_INSERT_KEY],
    mutationFn: supabase?.orderLines.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ORDER_LINE_INSERT_KEY, mutation];
}
export default useInsert;
