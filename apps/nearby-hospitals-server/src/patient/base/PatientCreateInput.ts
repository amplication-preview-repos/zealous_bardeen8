/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { DoctorCreateNestedManyWithoutPatientsInput } from "./DoctorCreateNestedManyWithoutPatientsInput";
import { Type } from "class-transformer";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assignedDoctor?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  disease?: string | null;

  @ApiProperty({
    required: false,
    type: () => DoctorCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => DoctorCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => DoctorCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  doctors?: DoctorCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { PatientCreateInput as PatientCreateInput };
