import { useQuery } from "react-query";
import { GenericSelectProps, GenericUseProps, ORDER_LINE_ONE_KEY } from "..";
import { Tables } from "../../supabase/database.types";
import { useSupabase } from "../useSupabase";

type Vars = {
  id: string;
};

interface UseSelectOneProps
  extends GenericUseProps<Tables<"order_lines"> | null>,
    GenericSelectProps<Tables<"order_lines"> | null, Vars> {}

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
    queryKey: [ORDER_LINE_ONE_KEY, vars?.id],
    queryFn: async ({ queryKey }) =>
      queryKey[1]
        ? await supabase?.orderLines.getOne({ id: queryKey[1] })
        : null,
    initialData,
    onSuccess,
    onError,
    onSettled,
    enabled,
  });
  return [ORDER_LINE_ONE_KEY, query];
}
export default useSelectOne;
