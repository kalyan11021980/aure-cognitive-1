// tslint:disable:no-var-requires
// tslint:disable:quotemark
// tslint:disable:object-literal-key-quotes
import { Component } from '@nestjs/common';
const cognitiveServices = require('cognitive-services');

@Component()
export class ModeratorService {
    checkComment(data) {
        // const textContent = JSON.stringify(data.comment);
        const body = JSON.stringify(data.comment);
        // tslint:disable-next-line:no-console
        // console.log(textContent);
        const requestURI = 'westus.api.cognitive.microsoft.com';
        const headers = {
            'Content-type': 'text/plain',
        };
        const parameters = {
            'PII': true,
            'language': 'eng',
            'autocorrect': true,
            'classify': true,
        };

        const modclient = new cognitiveServices.contentModerator({
            apiKey: "9104494c5ccf425bbd480329b7110bd8",
            endpoint: requestURI,
        });

        return modclient.screenText({
            parameters,
            headers,
            body,
        });
    }
}