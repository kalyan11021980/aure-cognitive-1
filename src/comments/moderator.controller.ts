import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { ModeratorService } from './moderator.service';

@Controller('moderate')
export class ModeratorController {
    constructor(private moderatorService: ModeratorService){}

  @Post()
  postMessage(@Res() res, @Body() data ) {
      // tslint:disable-next-line:no-console
      this.moderatorService.checkComment(data).then((response) => {
        // tslint:disable-next-line:no-console
        // console.log(response);
        res.status(HttpStatus.OK).send(response);
    }).catch((err) => {
       // tslint:disable-next-line:no-console
       console.log(err);
    });
  }
}
