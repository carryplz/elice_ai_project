import { IsNotEmpty, IsString } from "class-validator";

export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
  wordEng: string;

  @IsString()
  @IsNotEmpty()
  wordKor: string;
}
