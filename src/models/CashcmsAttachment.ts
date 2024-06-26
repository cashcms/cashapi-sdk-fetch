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
 * @interface CashcmsAttachment
 */
export interface CashcmsAttachment {
    /**
     * 可用的
     * @type {boolean}
     * @memberof CashcmsAttachment
     */
    available?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CashcmsAttachment
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CashcmsAttachment
     */
    deletedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CashcmsAttachment
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsAttachment
     */
    postId?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsAttachment
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsAttachment
     */
    secret?: string;
    /**
     * 
     * @type {Date}
     * @memberof CashcmsAttachment
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CashcmsAttachment
     */
    value?: string;
}

/**
 * Check if a given object implements the CashcmsAttachment interface.
 */
export function instanceOfCashcmsAttachment(value: object): boolean {
    return true;
}

export function CashcmsAttachmentFromJSON(json: any): CashcmsAttachment {
    return CashcmsAttachmentFromJSONTyped(json, false);
}

export function CashcmsAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashcmsAttachment {
    if (json == null) {
        return json;
    }
    return {
        
        'available': json['available'] == null ? undefined : json['available'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'deletedAt': json['deletedAt'] == null ? undefined : (new Date(json['deletedAt'])),
        'id': json['id'] == null ? undefined : json['id'],
        'postId': json['postId'] == null ? undefined : json['postId'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function CashcmsAttachmentToJSON(value?: CashcmsAttachment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'available': value['available'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'deletedAt': value['deletedAt'] == null ? undefined : ((value['deletedAt']).toISOString()),
        'id': value['id'],
        'postId': value['postId'],
        'provider': value['provider'],
        'secret': value['secret'],
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'value': value['value'],
    };
}

