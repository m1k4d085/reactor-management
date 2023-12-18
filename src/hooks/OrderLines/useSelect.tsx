import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, ORDER_LINE_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"order_lines">[] | null>,
    GenericSelectProps<
      Tables<"order_lines">[] | null,
      {
        query: Partial<Tables<"order_lines">>;
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
    queryKey: [ORDER_LINE_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.orderLines.get(
        queryKey[1] as Partial<Tables<"order_lines">>
      ),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ORDER_LINE_KEY, query];
}
export default useSelect;
