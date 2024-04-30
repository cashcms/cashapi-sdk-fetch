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
 * @interface EmaopayEmaopayOrder
 */
export interface EmaopayEmaopayOrder {
    /**
     * 金额
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    amount?: string;
    /**
     * 创建时间戳
     * @type {number}
     * @memberof EmaopayEmaopayOrder
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    deletedAt?: string;
    /**
     * 超时时间
     * @type {number}
     * @memberof EmaopayEmaopayOrder
     */
    expiredAt?: number;
    /**
     * 
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    id?: string;
    /**
     * 商户 Id
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    merchantId?: string;
    /**
     * 商户订单号, 对商户而言是唯一的
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    merchantTradeNo?: string;
    /**
     * 监控 Id
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    monitorId?: string;
    /**
     * 通知失败次数
     * @type {number}
     * @memberof EmaopayEmaopayOrder
     */
    notifyFailedCount?: number;
    /**
     * 通知成功时间
     * @type {number}
     * @memberof EmaopayEmaopayOrder
     */
    notifySuccessAt?: number;
    /**
     * 回调地址
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    notifyURL?: string;
    /**
     * 更新时间戳
     * @type {number}
     * @memberof EmaopayEmaopayOrder
     */
    paidAt?: number;
    /**
     * 支付方式
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    paymentMethod?: string;
    /**
     * 产品 Id, 可为空
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    productId?: string;
    /**
     * 二维码
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    qrCode?: string;
    /**
     * 真实金额
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    realAmount?: string;
    /**
     * 支付成功后的跳转地址
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    returnURL?: string;
    /**
     * 签名
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    signature?: string;
    /**
     * 状态
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    updatedAt?: string;
    /**
     * 用户 Id, 可为空，如果是匿名用户，那么就为空
     * @type {string}
     * @memberof EmaopayEmaopayOrder
     */
    userId?: string;
}

/**
 * Check if a given object implements the EmaopayEmaopayOrder interface.
 */
export function instanceOfEmaopayEmaopayOrder(value: object): boolean {
    return true;
}

export function EmaopayEmaopayOrderFromJSON(json: any): EmaopayEmaopayOrder {
    return EmaopayEmaopayOrderFromJSONTyped(json, false);
}

export function EmaopayEmaopayOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmaopayEmaopayOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'created': json['created'] == null ? undefined : json['created'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'deletedAt': json['deletedAt'] == null ? undefined : json['deletedAt'],
        'expiredAt': json['expiredAt'] == null ? undefined : json['expiredAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'merchantId': json['merchantId'] == null ? undefined : json['merchantId'],
        'merchantTradeNo': json['merchantTradeNo'] == null ? undefined : json['merchantTradeNo'],
        'monitorId': json['monitorId'] == null ? undefined : json['monitorId'],
        'notifyFailedCount': json['notifyFailedCount'] == null ? undefined : json['notifyFailedCount'],
        'notifySuccessAt': json['notifySuccessAt'] == null ? undefined : json['notifySuccessAt'],
        'notifyURL': json['notifyURL'] == null ? undefined : json['notifyURL'],
        'paidAt': json['paidAt'] == null ? undefined : json['paidAt'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : json['paymentMethod'],
        'productId': json['productId'] == null ? undefined : json['productId'],
        'qrCode': json['qrCode'] == null ? undefined : json['qrCode'],
        'realAmount': json['realAmount'] == null ? undefined : json['realAmount'],
        'returnURL': json['returnURL'] == null ? undefined : json['returnURL'],
        'signature': json['signature'] == null ? undefined : json['signature'],
        'status': json['status'] == null ? undefined : json['status'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function EmaopayEmaopayOrderToJSON(value?: EmaopayEmaopayOrder | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'created': value['created'],
        'createdAt': value['createdAt'],
        'deletedAt': value['deletedAt'],
        'expiredAt': value['expiredAt'],
        'id': value['id'],
        'merchantId': value['merchantId'],
        'merchantTradeNo': value['merchantTradeNo'],
        'monitorId': value['monitorId'],
        'notifyFailedCount': value['notifyFailedCount'],
        'notifySuccessAt': value['notifySuccessAt'],
        'notifyURL': value['notifyURL'],
        'paidAt': value['paidAt'],
        'paymentMethod': value['paymentMethod'],
        'productId': value['productId'],
        'qrCode': value['qrCode'],
        'realAmount': value['realAmount'],
        'returnURL': value['returnURL'],
        'signature': value['signature'],
        'status': value['status'],
        'updatedAt': value['updatedAt'],
        'userId': value['userId'],
    };
}
