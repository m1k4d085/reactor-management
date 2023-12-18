import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  ADDRESS_REMOVE_KEY,
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
    mutationKey: [ADDRESS_REMOVE_KEY],
    mutationFn: supabase?.addresses.remove,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ADDRESS_REMOVE_KEY, mutation];
}
export default useRemove;
