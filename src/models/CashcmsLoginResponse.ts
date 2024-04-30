/* tslint:disable */
/* eslint-disable */
/**
 * Cash CMS API
 * Cash CMS API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@cashcms.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CashcmsLoginResponse
 */
export interface CashcmsLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof CashcmsLoginResponse
     */
    token?: string;
}

/**
 * Check if a given object implements the CashcmsLoginResponse interface.
 */
export function instanceOfCashcmsLoginResponse(value: object): boolean {
    return true;
}

export function CashcmsLoginResponseFromJSON(json: any): CashcmsLoginResponse {
    return CashcmsLoginResponseFromJSONTyped(json, false);
}

export function CashcmsLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashcmsLoginResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function CashcmsLoginResponseToJSON(value?: CashcmsLoginResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}
