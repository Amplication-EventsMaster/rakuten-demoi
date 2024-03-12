/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendeeCreateInput } from "./AttendeeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAttendeeArgs {
  @ApiProperty({
    required: true,
    type: () => AttendeeCreateInput,
  })
  @ValidateNested()
  @Type(() => AttendeeCreateInput)
  @Field(() => AttendeeCreateInput, { nullable: false })
  data!: AttendeeCreateInput;
}

export { CreateAttendeeArgs as CreateAttendeeArgs };