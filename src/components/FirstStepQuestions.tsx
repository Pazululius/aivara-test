import { useGetInfoOrders } from "../hooks/useGetInfoOrders";

const FirstStepQuestions = () => {
  const { countOrders, groupedOrdersStatus } = useGetInfoOrders();
  return (
    <div className="flex p-10 flex-col gap-10 justify-items-start w-1/2">
      <h1 className=" text-center text-2xl text-blue-600">
        <b>Preguntas primera parte</b>
      </h1>
      <div className=" flex flex-col gap-5">
        <span>
          <b>a. ¿Qué métricas podríamos obtener de esa información?</b>
          <p>
            Con la información proporcionada podriamos obtener multiples
            metricos, entre ellos:{" "}
          </p>
          <li>¿Cuantas ordenes existen y con que estatus?</li>
          <li>¿Cuales son los usuarios que más piden?</li>
          <li>¿El usuario que mas pide y que es lo que pide?</li>
          <li>Suma total de todos los pedidos</li>
          <li>Promedio del total de los pedidos</li>
          <li>Cantidad de artículos vendidos en total</li>
          <li>Pedido con mayor/menor total</li>
          <li>
            ¿Si tuviese mas información sobre los items, podriamos ver nuestro
            producto estrella?
          </li>
          <li>
            ¿Podriamos obtener la cantidad de usuarios activos (con respecto a
            las ordenes que realizan)?
          </li>
          <p>Pero así mismo existen inconsistencias en la información como: </p>
          <li>No todos los pedidos tienen estatus</li>
          <li>
            No hay relación en cuanto a pedido por id de cliente (pudiese darse
            el caso de dos usuarios con el mismo nombre [independientemente de
            que en este ejemplo haya varios])
          </li>
        </span>
        <span>
          <b>b. ¿Cuántos elementos tiene el json?</b>
          <p>
            El json cuenta con: {countOrders} elementos, de los cuales{" "}
            {groupedOrdersStatus.unknown?.length} no tienen estatus
          </p>
        </span>
        <span>
          <b>
            c. ¿Si el json tuviera millones de elementos como cargarías lo
            datos? ¿Como contarías la cantidad de elementos?
          </b>
          <p>
            Si el JSON contuviese millones de registros, existen 3 posbiles
            soluciones, que se me ocurren:
          </p>
          <li>
            Solución por parte del backend: implementar consultas paginadas para
            mostrar cierta cantidad de ordenes por pagina, suponiendo que las
            mostramos en una lista, sumando a ello busqueda por ID y por cliente
            y para contarlos, existen metodos en base de datos que realizan la
            accion con el propio motor de la base de datos sin tener que forzar
            al compilador a hacerlo.
          </li>
          <li>
            Solución en frontend mediante streaming: Lo que se propone con el
            streaming para menejo de grandes cantidades de información es leer
            data seccion por seccion (chunks) en vez de leer todo el archivo en
            una sola ejecucion, esto ademas de consumir grandes cantidades de
            memoria ya sea en el cliente o en servidor (SSR o CSR) alentara
            todos los procesos consecuentes, entonces al realizarlo de esta
            manera mediante streaming solo nos preocupamos el chuck actual, para
            contar los elementos en un archivo así usando streaming se puede
            itererar en el streaming sumando un contador
          </li>
          <li>
            La menos viable (que me ha tocado hacer en varias ocasiones por
            petición de cliente): Utilizar componentes que hagan lazyload para
            así mitigar la carga de datos en memoria, sumando a esto funciones
            recursivas para que el procesamiento de información y el performance
            no se vean afectados.
          </li>
        </span>
      </div>
    </div>
  );
};
export default FirstStepQuestions;
