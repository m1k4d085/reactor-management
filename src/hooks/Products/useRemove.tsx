import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  PRODUCT_REMOVE_KEY,
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
    mutationKey: [PRODUCT_REMOVE_KEY],
    mutationFn: supabase?.products.remove,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [PRODUCT_REMOVE_KEY, mutation];
}
export default useRemove;
