import { useMemo } from "react";
import { orders } from "../mocking/orders";

export const useGetInfoOrders = () => {
  const countOrders = useMemo<number>(() => {
    return orders.length;
  }, []);
  const groupedOrdersStatus = Object.groupBy(
    orders,
    ({ status }) => status ?? "unknown"
  );
  const groupedOrdersCustomer = Object.groupBy(
    orders,
    ({ customer }) => customer ?? "unknown"
  );
  const status = [
    {
      key: "shipped",
      label: "Enviados",
    },
    {
      key: "pending",
      label: "Pendientes",
    },
    {
      key: "canceled",
      label: "Cancelados",
    },
    {
      key: "unknown",
      label: "Desconocido",
    },
  ];
  const customers = Object.keys(groupedOrdersCustomer);
  return {
    countOrders,
    groupedOrdersStatus,
    status,
    groupedOrdersCustomer,
    customers,
  };
};
