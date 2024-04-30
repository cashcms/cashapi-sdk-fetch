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
 * @interface CashcmsLoginParams
 */
export interface CashcmsLoginParams {
    /**
     * 
     * @type {string}
     * @memberof CashcmsLoginParams
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsLoginParams
     */
    username?: string;
}

/**
 * Check if a given object implements the CashcmsLoginParams interface.
 */
export function instanceOfCashcmsLoginParams(value: object): boolean {
    return true;
}

export function CashcmsLoginParamsFromJSON(json: any): CashcmsLoginParams {
    return CashcmsLoginParamsFromJSONTyped(json, false);
}

export function CashcmsLoginParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashcmsLoginParams {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function CashcmsLoginParamsToJSON(value?: CashcmsLoginParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'username': value['username'],
    };
}

