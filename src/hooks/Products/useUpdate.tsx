import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  PRODUCT_UPDATE_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"products">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"products"> | null, Vars>,
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
    mutationKey: [PRODUCT_UPDATE_KEY],
    mutationFn: supabase?.products.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [PRODUCT_UPDATE_KEY, mutation];
}
export default useUpdate;
