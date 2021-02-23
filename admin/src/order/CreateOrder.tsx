import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Order } from "../api/order/Order";
import { OrderCreateInput } from "../api/order/OrderCreateInput";

const INITIAL_VALUES = {} as OrderCreateInput;

export const CreateOrder = (): React.ReactElement => {
  useBreadcrumbs("/orders/new", "Create Order");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Order,
    AxiosError,
    OrderCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/orders", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/orders"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: OrderCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Order"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        ></Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
