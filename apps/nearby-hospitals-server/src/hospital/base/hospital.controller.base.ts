/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HospitalService } from "../hospital.service";
import { HospitalCreateInput } from "./HospitalCreateInput";
import { Hospital } from "./Hospital";
import { HospitalFindManyArgs } from "./HospitalFindManyArgs";
import { HospitalWhereUniqueInput } from "./HospitalWhereUniqueInput";
import { HospitalUpdateInput } from "./HospitalUpdateInput";
import { DepartmentFindManyArgs } from "../../department/base/DepartmentFindManyArgs";
import { Department } from "../../department/base/Department";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";

export class HospitalControllerBase {
  constructor(protected readonly service: HospitalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hospital })
  async createHospital(
    @common.Body() data: HospitalCreateInput
  ): Promise<Hospital> {
    return await this.service.createHospital({
      data: {
        ...data,

        department: data.department
          ? {
              connect: data.department,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Hospital] })
  @ApiNestedQuery(HospitalFindManyArgs)
  async hospitals(@common.Req() request: Request): Promise<Hospital[]> {
    const args = plainToClass(HospitalFindManyArgs, request.query);
    return this.service.hospitals({
      ...args,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hospital(
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<Hospital | null> {
    const result = await this.service.hospital({
      where: params,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHospital(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() data: HospitalUpdateInput
  ): Promise<Hospital | null> {
    try {
      return await this.service.updateHospital({
        where: params,
        data: {
          ...data,

          department: data.department
            ? {
                connect: data.department,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHospital(
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<Hospital | null> {
    try {
      return await this.service.deleteHospital({
        where: params,
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/departments")
  @ApiNestedQuery(DepartmentFindManyArgs)
  async findDepartments(
    @common.Req() request: Request,
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<Department[]> {
    const query = plainToClass(DepartmentFindManyArgs, request.query);
    const results = await this.service.findDepartments(params.id, {
      ...query,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        hospital: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/departments")
  async connectDepartments(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        connect: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/departments")
  async updateDepartments(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        set: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/departments")
  async disconnectDepartments(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        disconnect: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }
}
