import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, MEDIA_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

export interface UseSelectProps
  extends GenericUseProps<Tables<"media">[] | null>,
    GenericSelectProps<
      Tables<"media">[] | null,
      {
        query: Partial<Tables<"media">>;
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
    queryKey: [MEDIA_KEY, vars?.query],
    queryFn: async ({ queryKey }) =>
      await supabase?.media.get(queryKey[1] as Partial<Tables<"media">>),
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [MEDIA_KEY, query];
}
export default useSelect;
