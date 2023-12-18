import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, PRODUCT_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"products">[] | null>,
    GenericSelectProps<
      Tables<"products">[] | null,
      {
        query: Partial<Tables<"products">>;
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
    queryKey: [PRODUCT_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.products.get(queryKey[1] as Partial<Tables<"products">>),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [PRODUCT_KEY, query];
}
export default useSelect;
