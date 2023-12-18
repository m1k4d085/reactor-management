import { useQuery } from "react-query";
import { ADDRESS_KEY, GenericSelectProps, GenericUseProps } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"addresses">[] | null>,
    GenericSelectProps<
      Tables<"addresses">[] | null,
      {
        query: Partial<Tables<"addresses">>;
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
    queryKey: [ADDRESS_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.addresses.get(
        queryKey[1] as Partial<Tables<"addresses">>
      ),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ADDRESS_KEY, query];
}
export default useSelect;
