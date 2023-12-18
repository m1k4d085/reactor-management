import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  CUSTOMER_REMOVE_KEY,
  GenericMutationProps,
  GenericMutationUseProps,
} from "..";
import { GenericUseProps } from "..";

type Vars = {
  id: string;
};

interface UseRemoveProps
  extends GenericUseProps<void, Vars>,
    GenericMutationUseProps<Vars>,
    GenericMutationProps<Vars> {}

function useRemove({
  onSuccess,
  onError,
  onSettled,
  onMutate,
}: UseRemoveProps = {}): [string, typeof mutation] {
  const supabase = useSupabase();
  const mutation = useMutation({
    mutationKey: [CUSTOMER_REMOVE_KEY],
    mutationFn: supabase?.customers.remove,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [CUSTOMER_REMOVE_KEY, mutation];
}
export default useRemove;
