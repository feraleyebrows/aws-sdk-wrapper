function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelToSpace(camelCaseStr: string) {
    return camelCaseStr.replace(/([A-Z])/g, " $1");
}

export function getMessage(fnName: string) {
    return capitalize(camelToSpace(fnName));
}
