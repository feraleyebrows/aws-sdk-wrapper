import { getMessage } from "./string-helper";
import { tryCatchSES } from "./clients";
import {
    CreateContactCommand,
    CreateContactCommandInput,
    CreateContactCommandOutput,
    CreateContactListCommand,
    CreateContactListCommandInput,
    CreateContactListCommandOutput,
    CreateEmailTemplateCommand,
    CreateEmailTemplateCommandInput,
    CreateEmailTemplateCommandOutput,
    DeleteContactCommand,
    DeleteContactCommandInput,
    DeleteContactCommandOutput,
    DeleteContactListCommand,
    DeleteContactListCommandInput,
    DeleteContactListCommandOutput,
    GetContactCommand,
    GetContactCommandInput,
    GetContactCommandOutput,
    GetContactListCommand,
    GetContactListCommandInput,
    GetContactListCommandOutput,
    ListContactListsCommand,
    ListContactListsCommandOutput,
    ListContactsCommand,
    ListContactsCommandInput,
    ListContactsCommandOutput,
    SendEmailCommand,
    SendEmailCommandInput,
    SendEmailCommandOutput,
    UpdateContactCommand,
    UpdateContactCommandInput,
    UpdateContactCommandOutput,
    UpdateContactListCommand,
    UpdateContactListCommandInput,
    UpdateContactListCommandOutput
} from "@aws-sdk/client-sesv2";

export async function createContact(params: CreateContactCommandInput, verbose = false) {
    const command = new CreateContactCommand(params);
    const message = getMessage(createContact.name);

    return await tryCatchSES(command, message, verbose) as CreateContactCommandOutput;
}

export async function getContact(params: GetContactCommandInput, verbose = false) {
    const command = new GetContactCommand(params);
    const message = getMessage(getContact.name);

    return await tryCatchSES(command, message, verbose) as GetContactCommandOutput;
}

export async function listContacts(params: ListContactsCommandInput, verbose = false) {
    const command = new ListContactsCommand(params);
    const message = getMessage(listContacts.name);

    return await tryCatchSES(command, message, verbose) as ListContactsCommandOutput;
}

export async function deleteContact(params: DeleteContactCommandInput, verbose = false) {
    const command = new DeleteContactCommand(params);
    const message = getMessage(deleteContact.name);

    return await tryCatchSES(command, message, verbose) as DeleteContactCommandOutput;
}

export async function updateContact(params: UpdateContactCommandInput, verbose = false) {
    const command = new UpdateContactCommand(params);
    const message = getMessage(updateContact.name);

    return await tryCatchSES(command, message, verbose) as UpdateContactCommandOutput;
}

export async function createContactList(params: CreateContactListCommandInput, verbose = false) {
    const command = new CreateContactListCommand(params);
    const message = getMessage(createContactList.name);

    return await tryCatchSES(command, message, verbose) as CreateContactListCommandOutput;
}

export async function getContactList(params: GetContactListCommandInput, verbose = false) {
    const command = new GetContactListCommand(params);
    const message = getMessage(getContactList.name);

    return await tryCatchSES(command, message, verbose) as GetContactListCommandOutput;
}

export async function updateContactList(params: UpdateContactListCommandInput, verbose = false) {
    const command = new UpdateContactListCommand(params);
    const message = getMessage(updateContactList.name);

    return await tryCatchSES(command, message, verbose) as UpdateContactListCommandOutput;
}

export async function listContactLists(params: ListContactListsCommandOutput, verbose = false) {
    const command = new ListContactListsCommand(params);
    const message = getMessage(listContactLists.name);

    return await tryCatchSES(command, message, verbose) as ListContactListsCommandOutput;
}

export async function deleteContactList(params: DeleteContactListCommandInput, verbose = false) {
    const command = new DeleteContactListCommand(params);
    const message = getMessage(deleteContactList.name);

    return await tryCatchSES(command, message, verbose) as DeleteContactListCommandOutput;
}

export async function createEmailTemplate(params: CreateEmailTemplateCommandInput, verbose = false) {
    const command = new CreateEmailTemplateCommand(params);
    const message = getMessage(createEmailTemplate.name);

    return await tryCatchSES(command, message, verbose) as CreateEmailTemplateCommandOutput;
}

export async function sendEmail(params: SendEmailCommandInput, verbose = false) {
    const command = new SendEmailCommand(params);
    const message = getMessage(sendEmail.name);

    return await tryCatchSES(command, message, verbose) as SendEmailCommandOutput;
}
