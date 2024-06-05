/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Doctor } from "../../doctor/base/Doctor";
import { Hospital } from "../../hospital/base/Hospital";

@ObjectType()
class Department {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Doctor,
  })
  @ValidateNested()
  @Type(() => Doctor)
  @IsOptional()
  doctor?: Doctor | null;

  @ApiProperty({
    required: false,
    type: () => [Doctor],
  })
  @ValidateNested()
  @Type(() => Doctor)
  @IsOptional()
  doctors?: Array<Doctor>;

  @ApiProperty({
    required: false,
    type: () => Hospital,
  })
  @ValidateNested()
  @Type(() => Hospital)
  @IsOptional()
  hospital?: Hospital | null;

  @ApiProperty({
    required: false,
    type: () => [Hospital],
  })
  @ValidateNested()
  @Type(() => Hospital)
  @IsOptional()
  hospitals?: Array<Hospital>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Department as Department };
