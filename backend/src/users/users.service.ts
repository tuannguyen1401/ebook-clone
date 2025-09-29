import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async login(username: string, password: string) {
    return await this.prisma.user.findUnique({ where: { email: username, password } });
  }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto as any });
  }

  async findAll(skip = 0, take = 25) {
    return await this.prisma.user.findMany({ skip, take});
  }

  async count() {
    return await this.prisma.user.count();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findOneByField(field: string, value: string) {
    return await this.prisma.user.findUnique({ where: { [field]: value } as any });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
  return this.prisma.user.update({
    where: { id },
    data: updateUserDto,
  });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
