import { ApiProperty } from '@nestjs/swagger'
export class Account {
    @ApiProperty({ example: 'example@gmail.com', description: "email address of organization" })
    email: string;
}
