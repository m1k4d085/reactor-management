import { useQuery } from "react-query";
import { ADDRESS_ONE_KEY, GenericSelectProps, GenericUseProps } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

type Vars = {
  id: string;
};

interface UseSelectOneProps
  extends GenericUseProps<Tables<"addresses"> | null>,
    GenericSelectProps<Tables<"addresses"> | null, Vars> {}

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
    queryKey: [ADDRESS_ONE_KEY, vars?.id],
    queryFn: async ({ queryKey }) =>
      queryKey[1]
        ? await supabase?.addresses.getOne({ id: queryKey[1] })
        : null,
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ADDRESS_ONE_KEY, query];
}
export default useSelectOne;
