import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Order } from "../api/order/Order";

type Props = { id: string };

export const OrderTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    Order,
    AxiosError,
    [string, string]
  >(["get-/api/orders", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/orders"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/orders"}/${id}`} className="entity-id">
      {data?.id && data?.id.length ? data.id : data?.id}
    </Link>
  );
};
