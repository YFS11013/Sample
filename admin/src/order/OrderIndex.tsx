import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { OrderList } from "./OrderList";
import { CreateOrder } from "./CreateOrder";
import { Order } from "./Order";

export const OrderIndex = (): React.ReactElement => {
  useBreadcrumbs("/orders/", "Orders");

  return (
    <Switch>
      <PrivateRoute exact path={"/orders/"} component={OrderList} />
      <PrivateRoute path={"/orders/new"} component={CreateOrder} />
      <PrivateRoute path={"/orders/:id"} component={Order} />
    </Switch>
  );
};
