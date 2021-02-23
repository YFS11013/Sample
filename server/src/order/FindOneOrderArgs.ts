import { ArgsType, Field } from "@nestjs/graphql";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";

@ArgsType()
class FindOneOrderArgs {
  @Field(() => OrderWhereUniqueInput, { nullable: false })
  where!: OrderWhereUniqueInput;
}

export { FindOneOrderArgs };
