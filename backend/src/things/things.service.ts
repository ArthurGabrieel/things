import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ThingsService {
  create(createThingDto: Prisma.ThingCreateInput) {
    return 'This action adds a new thing';
  }

  findAll() {
    return `This action returns all things`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thing`;
  }

  update(id: number, updateThingDto: Prisma.ThingUpdateInput) {
    return `This action updates a #${id} thing`;
  }

  remove(id: number) {
    return `This action removes a #${id} thing`;
  }
}
