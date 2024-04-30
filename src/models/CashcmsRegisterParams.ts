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
 * @interface CashcmsRegisterParams
 */
export interface CashcmsRegisterParams {
    /**
     * 
     * @type {string}
     * @memberof CashcmsRegisterParams
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsRegisterParams
     */
    username?: string;
}

/**
 * Check if a given object implements the CashcmsRegisterParams interface.
 */
export function instanceOfCashcmsRegisterParams(value: object): boolean {
    return true;
}

export function CashcmsRegisterParamsFromJSON(json: any): CashcmsRegisterParams {
    return CashcmsRegisterParamsFromJSONTyped(json, false);
}

export function CashcmsRegisterParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashcmsRegisterParams {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function CashcmsRegisterParamsToJSON(value?: CashcmsRegisterParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'username': value['username'],
    };
}

