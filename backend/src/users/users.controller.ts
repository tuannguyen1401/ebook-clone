import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Query, Res, BadRequestException } from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto,
    ) {
      const exists = await this.usersService.findOneByField('email', createUserDto.email);

      if (exists) {
        throw new BadRequestException('Email đã tồn tại');
      }
      
      return this.usersService.create(createUserDto);
    }

  @Get()
  async findAll(
    @Query('page') page = '1',
    @Query('perPage') perPage = '25',
    @Query('sort') sort = 'id',
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
    @Res() res: Response,
  ) {
    const pageNum = parseInt(page as string, 10) || 1;
    const perPageNum = parseInt(perPage as string, 10) || 25;
    const skip = (pageNum - 1) * perPageNum;
    const take = perPageNum;

    const [items, total] = await Promise.all([
      this.usersService.findAll(skip, take),
      this.usersService.count(),
    ]);

    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.setHeader('Content-Range', `users ${skip}-${skip + items.length - 1}/${total}`);
    return res.json(items);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
