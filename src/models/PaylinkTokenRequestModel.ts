/* tslint:disable */
/* eslint-disable */
/**
 * CityPay Payment API
 *  Welcome to the CityPay API, a robust HTTP API payment solution designed for seamless server-to-server  transactional processing. Our API facilitates a wide array of payment operations, catering to diverse business needs.  Whether you\'re integrating Internet payments, handling Mail Order/Telephone Order (MOTO) transactions, managing  Subscriptions with Recurring and Continuous Authority payments, or navigating the complexities of 3-D Secure  authentication, our API is equipped to support your requirements. Additionally, we offer functionalities for  Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids, and Completion processing, alongside the capability  for tokenised payments.  ## Compliance and Security Overview <aside class=\"notice\">   Ensuring the security of payment transactions and compliance with industry standards is paramount. Our API is    designed with stringent security measures and compliance protocols to safeguard sensitive information and meet    the rigorous requirements of Visa, MasterCard, and the PCI Security Standards Council. </aside>  ### Key Compliance and Security Measures  * **TLS Encryption**: All data transmissions must utilise TLS version 1.2 or higher, employing [strong cryptography](#enabled-tls-ciphers). Our infrastructure strictly enforces this requirement to maintain the integrity and confidentiality of data in transit. We conduct regular scans and assessments of our TLS endpoints to identify and mitigate vulnerabilities. * **Data Storage Prohibitions**: Storing sensitive cardholder data (CHD), such as the card security code (CSC) or primary account number (PAN), is strictly prohibited. Our API is designed to minimize your exposure to sensitive data, thereby reducing your compliance burden. * **Data Masking**: For consumer protection and compliance, full card numbers must not be displayed on receipts or any customer-facing materials. Our API automatically masks PANs, displaying only the last four digits to facilitate safe receipt generation. * **Network Scans**: If your application is web-based, regular scans of your hosting environment are mandatory to identify and rectify potential vulnerabilities. This proactive measure is crucial for maintaining a secure and compliant online presence. * **PCI Compliance**: Adherence to PCI DSS standards is not optional; it\'s a requirement for operating securely and legally in the payments ecosystem. For detailed information on compliance requirements and resources, please visit the PCI Security Standards Council website [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/). * **Request Validation**: Our API includes mechanisms to verify the legitimacy of each request, ensuring it pertains to a valid account and originates from a trusted source. We leverage remote IP address verification alongside sophisticated application firewall technologies to thwart a wide array of common security threats.  ## Getting Started Before integrating with the CityPay API, ensure your application and development practices align with the outlined compliance and security measures. This preparatory step is crucial for a smooth integration process and the long-term success of your payment processing operations.  For further details on API endpoints, request/response formats, and code examples, proceed to the subsequent sections of our documentation. Our aim is to provide you with all the necessary tools and information to integrate our payment processing capabilities seamlessly into your application.  Thank you for choosing CityPay API. We look forward to supporting your payment processing needs with our secure, compliant, and versatile API solution. 
 *
 * The version of the OpenAPI document: 6.6.40
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PaylinkCardHolder } from './PaylinkCardHolder';
import {
    PaylinkCardHolderFromJSON,
    PaylinkCardHolderFromJSONTyped,
    PaylinkCardHolderToJSON,
} from './PaylinkCardHolder';
import type { PaylinkCart } from './PaylinkCart';
import {
    PaylinkCartFromJSON,
    PaylinkCartFromJSONTyped,
    PaylinkCartToJSON,
} from './PaylinkCart';
import type { PaylinkConfig } from './PaylinkConfig';
import {
    PaylinkConfigFromJSON,
    PaylinkConfigFromJSONTyped,
    PaylinkConfigToJSON,
} from './PaylinkConfig';

/**
 * 
 * @export
 * @interface PaylinkTokenRequestModel
 */
export interface PaylinkTokenRequestModel {
    /**
     * Specifies the intended value of the transaction in the lowest denomination with no spacing characters or decimal point. This is the net total to be processed. An example of £74.95 would be presented as 7495.
     * @type {number}
     * @memberof PaylinkTokenRequestModel
     */
    amount: number;
    /**
     * Identifies a particular transaction linked to a Merchant account. It enables accurate duplicate checking within a pre-configured time period, as well as transaction reporting and tracing. The identifier should be unique to prevent payment card processing attempts from being rejected due to duplication.
     * 
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    identifier: string;
    /**
     * The merchant id you wish to process this transaction with.
     * @type {number}
     * @memberof PaylinkTokenRequestModel
     */
    merchantid: number;
    /**
     * Specifies an alpha-numeric account number that the Paylink service uses when creating a Cardholder Account. The value should be no longer than 20 characters in length.
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    accountno?: string;
    /**
     * 
     * @type {PaylinkCardHolder}
     * @memberof PaylinkTokenRequestModel
     */
    cardholder?: PaylinkCardHolder;
    /**
     * 
     * @type {PaylinkCart}
     * @memberof PaylinkTokenRequestModel
     */
    cart?: PaylinkCart;
    /**
     * The clientVersion field is used to specify the version of your application that has invoked the Paylink payment process. This feature is typically used for tracing issues relating to application deployments, or any Paylink integration module or plugin.
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    clientVersion?: string;
    /**
     * 
     * @type {PaylinkConfig}
     * @memberof PaylinkTokenRequestModel
     */
    config?: PaylinkConfig;
    /**
     * A currency for the token. This value should be only used on multi-currency accounts and be an appropriate currency which the account is configured for.
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    currency?: string;
    /**
     * The email field is used for the Merchant to be notified on completion of the transaction . The value may be supplied to override the default stored value.
     * Emails sent to this address by the Paylink service should not be forwarded on to the cardholder as it may contain certain information that is used by the Paylink service to validate and authenticate Paylink Token Requests: for example, the Merchant ID and the licence key.
     * 
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    email?: string;
    /**
     * True if the intent of this cardholder initiated transaction is to establish a recurring payment model, processable as merchant initiated transactions.
     * @type {boolean}
     * @memberof PaylinkTokenRequestModel
     */
    recurring?: boolean;
    /**
     * an id associated with a subscription to link the token request against.
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    subscriptionId?: string;
    /**
     * A value to override the transaction type if requested by your account manager.
     * @type {string}
     * @memberof PaylinkTokenRequestModel
     */
    txType?: string;
}

/**
 * Check if a given object implements the PaylinkTokenRequestModel interface.
 */
export function instanceOfPaylinkTokenRequestModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "identifier" in value;
    isInstance = isInstance && "merchantid" in value;

    return isInstance;
}

export function PaylinkTokenRequestModelFromJSON(json: any): PaylinkTokenRequestModel {
    return PaylinkTokenRequestModelFromJSONTyped(json, false);
}

export function PaylinkTokenRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaylinkTokenRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'identifier': json['identifier'],
        'merchantid': json['merchantid'],
        'accountno': !exists(json, 'accountno') ? undefined : json['accountno'],
        'cardholder': !exists(json, 'cardholder') ? undefined : PaylinkCardHolderFromJSON(json['cardholder']),
        'cart': !exists(json, 'cart') ? undefined : PaylinkCartFromJSON(json['cart']),
        'clientVersion': !exists(json, 'client_version') ? undefined : json['client_version'],
        'config': !exists(json, 'config') ? undefined : PaylinkConfigFromJSON(json['config']),
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'recurring': !exists(json, 'recurring') ? undefined : json['recurring'],
        'subscriptionId': !exists(json, 'subscription_id') ? undefined : json['subscription_id'],
        'txType': !exists(json, 'tx_type') ? undefined : json['tx_type'],
    };
}

export function PaylinkTokenRequestModelToJSON(value?: PaylinkTokenRequestModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'identifier': value.identifier,
        'merchantid': value.merchantid,
        'accountno': value.accountno,
        'cardholder': PaylinkCardHolderToJSON(value.cardholder),
        'cart': PaylinkCartToJSON(value.cart),
        'client_version': value.clientVersion,
        'config': PaylinkConfigToJSON(value.config),
        'currency': value.currency,
        'email': value.email,
        'recurring': value.recurring,
        'subscription_id': value.subscriptionId,
        'tx_type': value.txType,
    };
}

