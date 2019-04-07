import { ModeratorService } from './comments/moderator.service';
import { CommentService } from './comments/comment.service';
import { CommentController } from './comments/comment.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ModeratorController } from 'comments/moderator.controller';

@Module({
  imports: [],
  controllers: [AppController, ModeratorController, CommentController],
  components: [CommentService, ModeratorService],
})
export class AppModule {}
