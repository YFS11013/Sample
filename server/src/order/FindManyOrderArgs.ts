import { ArgsType, Field } from "@nestjs/graphql";
import { OrderWhereInput } from "./OrderWhereInput";

@ArgsType()
class FindManyOrderArgs {
  @Field(() => OrderWhereInput, { nullable: true })
  where?: OrderWhereInput;
}

export { FindManyOrderArgs };
