import { env } from '../../env/env'

export function getWebServiceURL(path: string): string {
    return `${env.webServiceURL}${path}`
}