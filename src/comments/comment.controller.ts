
import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ModeratorService } from './moderator.service';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService, private moderatorService: ModeratorService){}

  @Post()
  postMessage(@Res() res, @Body() data ) {
      this.moderatorService.checkComment(data);
      this.commentService.addComment(data);
      res.status(HttpStatus.OK).send('Comment posted successfully');
  }
}
