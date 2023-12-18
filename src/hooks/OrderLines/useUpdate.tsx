import { useMutation } from "react-query";
import { useSupabase } from "../useSupabase";
import {
  GenericMutationProps,
  GenericMutationUseProps,
  ORDER_LINE_UPDATE_KEY,
} from "..";
import { GenericUseProps } from "..";
import { Tables, TablesUpdate } from "../../supabase/database.types";

type Vars = {
  id: string;
  entity: TablesUpdate<"order_lines">;
};

interface UseUpdateProps
  extends GenericUseProps<Tables<"order_lines"> | null, Vars>,
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
    mutationKey: [ORDER_LINE_UPDATE_KEY],
    mutationFn: supabase?.orderLines.update,
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
  return [ORDER_LINE_UPDATE_KEY, mutation];
}
export default useUpdate;
