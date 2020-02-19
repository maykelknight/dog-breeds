import Config from "../config/config";

export function createLink(config, values) {
    let {urlParameters, url} = config;
    urlParameters.forEach(parameter => {
        if(values[parameter]) {
            url = url.replace(`{${parameter}}`, values[parameter])
        } else {
            url = url.replace(`/{${parameter}}`, '')
        }

    });
    return Config.API_URL + url;
}