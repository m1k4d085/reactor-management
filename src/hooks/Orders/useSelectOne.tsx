import { useQuery } from "react-query";
import {
  GenericSelectProps,
  GenericUseProps,
  ORDER_ONE_KEY,
} from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

type Vars = {
  id: string;
};

interface UseSelectOneProps
  extends GenericUseProps<Tables<"orders"> | null>,
    GenericSelectProps<Tables<"orders"> | null, Vars> {}

function useSelectOne({
  initialData,
  onSettled,
  onSuccess,
  onError,
  vars,
  enabled,
}: UseSelectOneProps = {}): [string, typeof query] {
  const supabase = useSupabase();
  const query = useQuery({
    queryKey: [ORDER_ONE_KEY, vars?.id],
    queryFn: async ({ queryKey }) =>
      queryKey[1] ? await supabase?.orders.getOne({ id: queryKey[1] }) : null,
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ORDER_ONE_KEY, query];
}
export default useSelectOne;
