import { IsNumber, IsNotEmpty } from 'class-validator';

export class FindUserDto {
  @IsNotEmpty({ message: 'id不能为空!' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'id必须为number类型!' },
  )
  id: string;
}
