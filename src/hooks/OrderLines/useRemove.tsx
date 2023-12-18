import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  ORDER_LINE_REMOVE_KEY,
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
    mutationKey: [ORDER_LINE_REMOVE_KEY],
    mutationFn: supabase?.orderLines.remove,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ORDER_LINE_REMOVE_KEY, mutation];
}
export default useRemove;
