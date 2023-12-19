import { useState } from "react";
import { useQueryClient } from "react-query";
import { TablesInsert } from "../../supabase/database.types";
import useCustomer from "../../hooks/Customers/useSelectOne";
import useInsert from "../../hooks/Customers/useInsert";
import useUpdate from "../../hooks/Customers/useUpdate";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerParams } from "../../router";
import { ErrorMessage, Form, Formik, FormikErrors } from "formik";
import { CUSTOMER_KEY } from "../../hooks";
import ErrorBaloon from "../../components/ErrorBaloon";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

interface CustomerForm
  extends Omit<TablesInsert<"customers">, "id" | "created_at"> {}

function FormCustomer() {
  const queryClient = useQueryClient();
  const [error, setError] = useState<Error | null>(null);
  const { customerId } = useParams<CustomerParams>();
  const navigate = useNavigate();

  const [, { data: customer }] = useCustomer({
    vars: {
      id: customerId!,
    },
    onError(error) {
      setError(error as Error);
    },
  });

  const [, { mutateAsync: insert }] = useInsert({
    onSuccess() {
      queryClient.invalidateQueries([CUSTOMER_KEY]);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  const [, { mutateAsync: update }] = useUpdate({
    onSuccess() {
      queryClient.invalidateQueries([CUSTOMER_KEY]);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  function validate(values: CustomerForm) {
    const errors: FormikErrors<CustomerForm> = {};

    if (!values.name) errors.name = "Inserire un nome o una ragione sociale";
    else if (!values.email) errors.email = "Inserire una mail";
    else if (!values.fiscal_code)
      errors.fiscal_code = "Inserire una codice fiscale o una PI";

    return errors;
  }

  async function submit(values: CustomerForm) {
    try {
      if (customerId) {
        await update({ id: customerId, entity: values });
      } else {
        await insert({ entity: values });
      }
      navigate(-1);
    } catch (error) {
      setError(error as Error);
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold mb-5 flex gap-3 justify-center items-center">
        {customerId ? "Modifica" : "Nuovo"} cliente
      </h1>
      <ErrorBaloon reset={() => setError(null)}>{error?.message}</ErrorBaloon>
      <div>
        <Formik<CustomerForm>
          initialValues={
            customerId && customer
              ? customer
              : {
                  email: "",
                  fiscal_code: "",
                  name: "",
                }
          }
          validate={validate}
          onSubmit={submit}
          enableReinitialize
        >
          {({ values, handleChange }) => (
            <Form className="mt-5">
              <TextInput
                label="Nome completo / Ragione sociale"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-right text-xs"
              />
              <TextInput
                label="Email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-right text-xs"
              />
              <TextInput
                label="Codice fiscale / PI"
                type="text"
                name="fiscal_code"
                value={values.fiscal_code}
                onChange={handleChange}
              />
              <ErrorMessage
                name="fiscal_code"
                component="p"
                className="text-red-500 text-right text-xs"
              />
              <div className="flex justify-center mt-3">
                <Button type="submit">
                  {customerId ? "Modifica" : "Aggiungi"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default FormCustomer;
