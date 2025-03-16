import { useState } from "react";
import { useGetInfoOrders } from "../hooks/useGetInfoOrders";
import Table from "./TableView";
import StatusSelect from "./StatusSelect";

const SecondStepQuestions = () => {
  const { groupedOrdersStatus, status, customers, groupedOrdersCustomer } =
    useGetInfoOrders();
  const [statusSel, setStatusSel] = useState("shipped");
  console.log(statusSel);
  return (
    <div className="flex w-1/2 p-10 flex-col gap-10 justify-items-start">
      <h1 className=" text-center text-2xl text-blue-600">
        <b>Preguntas segunda parte</b>
      </h1>
      <div className=" flex flex-col gap-5">
        <span className="flex flex-col gap-5">
          <b>a. CANTIDAD de pedidos por estado/status.</b>
          <Table
            headers={["Estatus", "Cantidad"]}
            rows={status.map((st) => [
              st.label,
              `${groupedOrdersStatus[st.key]?.length}`,
            ])}
          />
        </span>
        <span className="flex flex-col gap-5">
          <b>
            b. Agrupar por cliente y contar cuántos pedidos ha hecho cada uno.
          </b>
          <Table
            headers={["Cliente", "Pedidos"]}
            rows={customers.map((customer) => [
              customer,
              `${groupedOrdersCustomer[customer]?.length}`,
            ])}
          />
        </span>
        <span className="flex flex-col gap-5">
          <b>
            c. Calcular promedio de items comprados por cliente. Por ejemplo:
            Luis pide en promedio 2 items en cada compra.
          </b>
          <Table
            headers={["Cliente", "Productos pediddos en promedio"]}
            rows={customers.map((customer) => [
              customer,
              `${
                groupedOrdersCustomer[customer]
                  ? (
                      groupedOrdersCustomer[customer]?.reduce(
                        (total, order) => total + order.items.length,
                        0
                      ) / groupedOrdersCustomer[customer].length
                    ).toFixed(2)
                  : 0
              }`,
            ])}
          />
        </span>
        <span className="flex flex-col gap-5">
          <b>
            d. Calcular el total de ingresos por estado del pedido (shipped,
            pending, canceled).
          </b>
          <Table
            headers={["Estatus", "Ingresos"]}
            rows={status.map((st) => [
              st.label,
              `$${groupedOrdersStatus[st.key]
                ?.reduce((total, order) => total + order.total, 0)
                .toFixed(2)}`,
            ])}
          />
        </span>
        <span className="flex flex-col gap-5">
          <b>
            e. Filtrar pedidos por un estado/status específico recibido como
            parámetro.
          </b>
          <StatusSelect onSelectStatus={(value) => setStatusSel(value)} />
          <Table
            headers={["Estatus", "Cantidad"]}
            rows={[
              [
                status.find((st) => st.key === statusSel)?.label || "",
                `${groupedOrdersStatus[statusSel]?.length}`,
              ],
            ]}
          />
        </span>
      </div>
    </div>
  );
};
export default SecondStepQuestions;
