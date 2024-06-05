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
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DepartmentCreateNestedManyWithoutDoctorsInput } from "./DepartmentCreateNestedManyWithoutDoctorsInput";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";

@InputType()
class DoctorCreateInput {
  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DepartmentCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => DepartmentCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => DepartmentCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  departments?: DepartmentCreateNestedManyWithoutDoctorsInput;

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

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patient?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specialization?: string | null;
}

export { DoctorCreateInput as DoctorCreateInput };
