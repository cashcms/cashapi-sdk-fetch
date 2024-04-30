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
import type { CashcmsPost } from './CashcmsPost';
import {
    CashcmsPostFromJSON,
    CashcmsPostFromJSONTyped,
    CashcmsPostToJSON,
} from './CashcmsPost';

/**
 * 
 * @export
 * @interface CashcmsTag
 */
export interface CashcmsTag {
    /**
     * 
     * @type {Date}
     * @memberof CashcmsTag
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CashcmsTag
     */
    deletedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CashcmsTag
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CashcmsTag
     */
    name?: string;
    /**
     * many to many relationship
     * @type {Array<CashcmsPost>}
     * @memberof CashcmsTag
     */
    posts?: Array<CashcmsPost>;
    /**
     * 
     * @type {Date}
     * @memberof CashcmsTag
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the CashcmsTag interface.
 */
export function instanceOfCashcmsTag(value: object): boolean {
    return true;
}

export function CashcmsTagFromJSON(json: any): CashcmsTag {
    return CashcmsTagFromJSONTyped(json, false);
}

export function CashcmsTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashcmsTag {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'deletedAt': json['deletedAt'] == null ? undefined : (new Date(json['deletedAt'])),
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'posts': json['posts'] == null ? undefined : ((json['posts'] as Array<any>).map(CashcmsPostFromJSON)),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
    };
}

export function CashcmsTagToJSON(value?: CashcmsTag | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'deletedAt': value['deletedAt'] == null ? undefined : ((value['deletedAt']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'posts': value['posts'] == null ? undefined : ((value['posts'] as Array<any>).map(CashcmsPostToJSON)),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

