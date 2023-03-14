import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { SESv2Client, SESv2ClientConfig } from "@aws-sdk/client-sesv2";
import { EmptyObject } from "type-fest";

export class ErrorResponse {
    statusCode: number;
    body: string;
    headers: EmptyObject | Record<string, string>;
    constructor(message = "An error occurred", statusCode = 500) {
        const body = JSON.stringify({ message });
        this.statusCode = statusCode;
        this.body = body;
        this.headers = {};
    }
}

async function tryCatch(client: any, command: any, message: string, verbose = false) {
    let response: any;

    try {
        response = await client.send(command);

        if (verbose) {
            console.log(message);
            console.dir(response, { depth: null });
        }
    } catch (err) {
        response = new ErrorResponse(err.message);

        if (verbose) {
            console.log(err);
        }
    }

    return response;
}

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/index.html

function getSESClient() {
    const config: SESv2ClientConfig = { region: process.env.AWS_DEFAULT_REGION };

    if (process.env.AWS_SES_ACCESS_KEY_ID) {
        config.credentials = {
            accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
        };
    }

    return new SESv2Client(config);
}

function getS3Client() {
    const config: S3ClientConfig = { region: process.env.AWS_DEFAULT_REGION };

    if (process.env.AWS_S3_ACCESS_KEY_ID) {
        config.credentials = {
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        };
    }

    return new S3Client(config);
}

export async function tryCatchSES(command: any, message: string, verbose: boolean) {
    const client = getSESClient();

    return await tryCatch(client, command, message, verbose);
}

export async function tryCatchS3(command: any, message: string, verbose: boolean) {
    const client = getS3Client();

    return await tryCatch(client, command, message, verbose);
}
