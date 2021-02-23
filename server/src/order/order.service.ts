import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  FindOneOrderArgs,
  FindManyOrderArgs,
  OrderCreateArgs,
  OrderUpdateArgs,
  OrderDeleteArgs,
  Subset,
} from "@prisma/client";

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  findMany<T extends FindManyOrderArgs>(args: Subset<T, FindManyOrderArgs>) {
    return this.prisma.order.findMany(args);
  }
  findOne<T extends FindOneOrderArgs>(args: Subset<T, FindOneOrderArgs>) {
    return this.prisma.order.findOne(args);
  }
  create<T extends OrderCreateArgs>(args: Subset<T, OrderCreateArgs>) {
    return this.prisma.order.create<T>(args);
  }
  update<T extends OrderUpdateArgs>(args: Subset<T, OrderUpdateArgs>) {
    return this.prisma.order.update<T>(args);
  }
  delete<T extends OrderDeleteArgs>(args: Subset<T, OrderDeleteArgs>) {
    return this.prisma.order.delete(args);
  }
}
