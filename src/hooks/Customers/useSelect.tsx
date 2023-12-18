import { useQuery } from "react-query";
import { CUSTOMER_KEY, GenericSelectProps, GenericUseProps } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"customers">[] | null>,
    GenericSelectProps<
      Tables<"customers">[] | null,
      {
        query: Partial<Tables<"customers">>;
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
    queryKey: [CUSTOMER_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.customers.get(
        queryKey[1] as Partial<Tables<"customers">>
      ),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [CUSTOMER_KEY, query];
}
export default useSelect;
