import { tryCatchS3 } from "./clients";
import { getMessage } from "./string-helper";
import { 
    PutObjectCommand, 
    GetObjectCommand, 
    PutObjectCommandInput, 
    GetObjectCommandInput, 
    GetObjectCommandOutput, 
    PutObjectCommandOutput 
} from "@aws-sdk/client-s3";

export async function putObject(params: PutObjectCommandInput, verbose = false) {
    const command = new PutObjectCommand(params);
    const message = getMessage(putObject.name);

    return await tryCatchS3(command, message, verbose) as PutObjectCommandOutput;
}

export async function getObject(params: GetObjectCommandInput, verbose = false) {
    const command = new GetObjectCommand(params);
    const message = getMessage(getObject.name);

    return await tryCatchS3(command, message, verbose) as GetObjectCommandOutput;
    
}

