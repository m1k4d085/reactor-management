import { useQueryClient } from "react-query";
import useCustomers from "../../hooks/Customers/useSelect";
import useCustomerRemove from "../../hooks/Customers/useRemove";
import "./Customers.css";
import { useState } from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import ErrorBaloon from "../../components/ErrorBaloon";
import Table from "../../components/Table";
import { Tables } from "../../supabase/database.types";
import { useNavigate } from "react-router-dom";
import { getTextColor } from "../../util";
import { useTheme } from "../../hooks/useTheme";

function Customers() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();
  const [key, { data: customers }] = useCustomers({
    onError(error) {
      setError(error as Error);
    },
  });
  const [, { mutateAsync: remove }] = useCustomerRemove({
    onSuccess() {
      queryClient.invalidateQueries([key]);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold mb-5 flex gap-3 justify-center items-center">
        Clienti
        <Button onClick={() => navigate("add")}>
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </h1>
      <ErrorBaloon reset={() => setError(null)}>{error?.message}</ErrorBaloon>
      <Table<Tables<"customers">>
        data={customers}
        // onRowClick={() => navigate("add")}
        columns={[
          {
            key: "id",
            title: "UUID",
          },
          {
            key: "name",
            title: "Nome completo o Ragione sociale",
          },
          {
            key: "email",
            title: "Email",
          },
          {
            key: "fiscal_code",
            title: "Codice fiscale o PI",
          },
          {
            key: "actions",
            title: "Azioni",
            render(item) {
              return (
                <div className="flex gap-5">
                  <div
                    className="p-3"
                    onClick={() => navigate(`${item.id}/edit`)}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      size="lg"
                      className={`hover:text-light dark:hover:text-dark hover:scale-125 transition-transform ${getTextColor(
                        theme?.themeType || "primary"
                      )}`}
                    />
                  </div>
                  <div
                    className="p-3"
                    onClick={async () => remove({ id: item.id })}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      className={`hover:text-light dark:hover:text-dark hover:scale-125 transition-transform ${getTextColor(
                        theme?.themeType || "primary"
                      )}`}
                    />
                  </div>
                </div>
              );
            },
          },
        ]}
      />
    </div>
  );
}
export default Customers;
