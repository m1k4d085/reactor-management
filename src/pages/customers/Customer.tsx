import { useState } from "react";
import { useQueryClient } from "react-query";
import { Tables, TablesInsert } from "../../supabase/database.types";
import useAddresses from "../../hooks/Addresses/useSelect";
import useAddressInsert from "../../hooks/Addresses/useInsert";
import useAddressUpdate from "../../hooks/Addresses/useUpdate";
import useAddressRemove from "../../hooks/Addresses/useRemove";
import useCustomer from "../../hooks/Customers/useSelectOne";
import useRemove from "../../hooks/Customers/useRemove";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerParams } from "../../router";
import { ErrorMessage, Form, Formik, FormikErrors } from "formik";
import { CUSTOMER_KEY } from "../../hooks";
import ErrorBaloon from "../../components/ErrorBaloon";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { useTheme } from "../../hooks/useTheme";
import { getBgColor, getRingColor } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface AddressForm
  extends Omit<TablesInsert<"addresses">, "id" | "created_at"> {}

function Customer() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const [error, setError] = useState<Error | null>(null);
  const [modal, setModal] = useState(false);
  const [selectedAddress, setSelectedAddress] =
    useState<Tables<"addresses"> | null>(null);
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

  const [, { mutateAsync: remove }] = useRemove({
    onSuccess() {
      queryClient.invalidateQueries([CUSTOMER_KEY]);
      navigate(-1);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  const [key, { data: addresses }] = useAddresses({
    vars: {
      query: {
        customer_id: customerId!,
      },
    },
    onError(error) {
      setError(error as Error);
    },
  });

  const [, { mutateAsync: addressInsert }] = useAddressInsert({
    onSuccess() {
      queryClient.invalidateQueries([key]);
    },
    onError(error) {
      setError(error as Error);
    },
  });
  const [, { mutateAsync: addressUpdate }] = useAddressUpdate({
    onSuccess() {
      queryClient.invalidateQueries([key]);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  const [, { mutateAsync: addressRemove }] = useAddressRemove({
    onSuccess() {
      queryClient.invalidateQueries([key]);
    },
    onError(error) {
      setError(error as Error);
    },
  });

  function validate(values: AddressForm) {
    const errors: FormikErrors<AddressForm> = {};

    if (!values.name) errors.name = "Inserire un'etichetta";
    else if (!values.line) errors.line = "Inserire un indirizzo valido";
    else if (!values.city) errors.city = "Inserire una città valida";

    return errors;
  }

  async function submit(values: AddressForm) {
    try {
      if (selectedAddress) {
        await addressUpdate({ id: selectedAddress.id, entity: values });
      } else {
        await addressInsert({ entity: values });
      }
      setSelectedAddress(null);
      setModal(false);
    } catch (error) {
      setError(error as Error);
    }
  }

  return (
    <div className="p-5">
      {modal && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-dark dark:bg-light bg-opacity-50 flex justify-center items-center"
          onClick={() => setModal(false)}
        >
          <div
            className="p-20 rounded bg-light dark:bg-dark"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <h3 className="text-2xl font-bold mb-3">
              {selectedAddress ? "Modifica" : "Aggiungi"} indirizzo
            </h3>
            <Formik<AddressForm>
              initialValues={
                selectedAddress
                  ? selectedAddress
                  : {
                      name: "",
                      line: "",
                      city: "",
                      postal_code: "",
                      customer_id: customerId!,
                    }
              }
              validate={validate}
              onSubmit={submit}
              enableReinitialize
            >
              {({ values, handleChange }) => (
                <Form className="mt-5">
                  <TextInput
                    label="Etichetta"
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
                    label="Indirizzo"
                    type="text"
                    name="line"
                    value={values.line}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="line"
                    component="p"
                    className="text-red-500 text-right text-xs"
                  />
                  <TextInput
                    label="Citta"
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="city"
                    component="p"
                    className="text-red-500 text-right text-xs"
                  />
                  <TextInput
                    label="CAP"
                    type="text"
                    name="postal_code"
                    value={values.postal_code || ""}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="postal_code"
                    component="p"
                    className="text-red-500 text-right text-xs"
                  />
                  <div className="flex justify-center mt-3">
                    <Button type="submit">
                      {selectedAddress ? "Modifica" : "Aggiungi"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      <h1 className="text-5xl font-bold mb-5 flex gap-3 justify-center items-center">
        {customerId ? "Modifica" : "Nuovo"} cliente
      </h1>
      <ErrorBaloon reset={() => setError(null)}>{error?.message}</ErrorBaloon>
      <div className="w-full h-full flex justify-center items-center">
        {customer && (
          <div
            className={`p-20 rounded ${getRingColor(
              theme?.themeType || "primary"
            )}`}
          >
            <div className="flex gap-3 mb-4 justify-between">
              <span className="font-bold">UUID</span>
              <span>{customer.id}</span>
            </div>
            <div className="flex gap-3 mb-4 justify-between">
              <span className="font-bold">Nome completo / Ragione sociale</span>
              <span>{customer.name}</span>
            </div>
            <div className="flex gap-3 mb-4 justify-between">
              <span className="font-bold">Email</span>
              <span>{customer.email}</span>
            </div>
            <div className="flex gap-3 mb-4 justify-between">
              <span className="font-bold">Codice fiscale</span>
              <span>{customer.fiscal_code}</span>
            </div>
            <div className="flex gap-3 mb-4 justify-end">
              <Button onClick={() => navigate("edit")}>
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button onClick={() => remove({ id: customer.id })}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
            <div
              className={`p-10 rounded ${getBgColor(
                theme?.themeType || "primary"
              )}`}
            >
              <h3 className="text-2xl font-bold mb-3">
                Indirizzi{" "}
                <Button
                  styleType="outline"
                  onClick={() => {
                    setSelectedAddress(null);
                    setModal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faAdd} />
                </Button>
              </h3>
              {addresses && addresses.length > 0 ? (
                addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border border-light dark:border-dark p-3 rounded mb-3"
                  >
                    <div className="flex gap-3 mb-4 justify-between">
                      <span className="font-bold">Etichetta</span>
                      <span>{address.name}</span>
                    </div>
                    <div className="flex gap-3 mb-4 justify-between">
                      <span className="font-bold">Indirizzo</span>
                      <span>
                        {address.line},{address.city} {address.postal_code}
                      </span>
                    </div>
                    <div className="flex gap-3 mb-4 justify-end">
                      <Button
                        styleType="outline"
                        onClick={() => {
                          setSelectedAddress(address);
                          setModal(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                      <Button
                        styleType="outline"
                        onClick={() => addressRemove({ id: address.id })}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <span>Nessun indirizzo registrato</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Customer;
