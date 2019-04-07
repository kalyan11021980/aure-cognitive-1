// tslint:disable:no-var-requires
import { Component } from '@nestjs/common';
const Sentiment = require('sentiment');

@Component()
export class CommentService {
    addComment(data) {
        const Pusher = require('pusher');
        const sentiment = new Sentiment();
        const sentimentScore = sentiment.analyze(data.comment).score;

        const payload = {
            message: data.comment,
            sentiment: sentimentScore,
        };

        const pusher = new Pusher({
            appId: '752979',
            key: 'PUSHER_KEY',
            secret: 'PUSHER_SECRET',
            cluster: 'us2',
            encrypted: true,
          });

        pusher.trigger('comments', 'new-comment', payload);
    }
}