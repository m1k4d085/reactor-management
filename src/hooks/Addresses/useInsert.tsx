import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  ADDRESS_INSERT_KEY,
  GenericMutationProps,
  GenericMutationUseProps,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesInsert } from "../../supabase/database.types";

type Vars = {
  entity: TablesInsert<"addresses">;
};

interface UseInsertProps
  extends GenericUseProps<Tables<"addresses"> | null, Vars>,
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
    mutationKey: [ADDRESS_INSERT_KEY],
    mutationFn: supabase?.addresses.insert,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ADDRESS_INSERT_KEY, mutation];
}
export default useInsert;
