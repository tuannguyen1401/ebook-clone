import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto as any });
  }

  async findAll(skip = 0, take = 25) {
    return await this.prisma.user.findMany({ skip, take});
  }

  count() {
    return this.prisma.user.count();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
  return this.prisma.user.update({
    where: { id },
    data: updateUserDto,
  });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
