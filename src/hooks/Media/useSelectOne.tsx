import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, MEDIA_ONE_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

type Vars = {
  id: string;
};

interface UseSelectOneProps
  extends GenericUseProps<Tables<"media"> | null>,
    GenericSelectProps<Tables<"media"> | null, Vars> {}

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
    queryKey: [MEDIA_ONE_KEY, vars?.id],
    queryFn: async ({ queryKey }) =>
      queryKey[1] ? await supabase?.media.getOne({ id: queryKey[1] }) : null,
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [MEDIA_ONE_KEY, query];
}
export default useSelectOne;
