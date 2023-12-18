import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, ORDER_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"orders">[] | null>,
    GenericSelectProps<
      Tables<"orders">[] | null,
      {
        query: Partial<Tables<"orders">>;
      }
    > {}

function useSelect({
  initialData,
  onSettled,
  onSuccess,
  onError,
  vars,
  enabled,
}: UseSelectProps = {}): [string, typeof query] {
  const supabase = useSupabase();
  const query = useQuery({
    queryKey: [ORDER_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.orders.get(queryKey[1] as Partial<Tables<"orders">>),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ORDER_KEY, query];
}
export default useSelect;
