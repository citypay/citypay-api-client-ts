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
import type { ContactDetails } from './ContactDetails';
import {
    ContactDetailsFromJSON,
    ContactDetailsFromJSONTyped,
    ContactDetailsToJSON,
} from './ContactDetails';

/**
 * 
 * @export
 * @interface PaymentIntent
 */
export interface PaymentIntent {
    /**
     * The amount to authorise in the lowest unit of currency with a variable length to a maximum of 12 digits.
     * 
     * No decimal points are to be included and no divisional characters such as 1,024.
     * 
     * The amount should be the total amount required for the transaction.
     * 
     * For example with GBP £1,021.95 the amount value is 102195.
     * 
     * @type {number}
     * @memberof PaymentIntent
     */
    amount: number;
    /**
     * The identifier of the transaction to process. The value should be a valid reference and may be used to perform
     *  post processing actions and to aid in reconciliation of transactions.
     * 
     * The value should be a valid printable string with ASCII character ranges from 0x32 to 0x127.
     * 
     * The identifier is recommended to be distinct for each transaction such as a [random unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
     * this will aid in ensuring each transaction is identifiable.
     * 
     * When transactions are processed they are also checked for duplicate requests. Changing the identifier on a subsequent
     * request will ensure that a transaction is considered as different.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    identifier: string;
    /**
     * A policy value which determines whether an AVS postcode policy is enforced or bypassed.
     * 
     * Values are:
     * 
     *  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.
     * 
     *  `1` for an enforced policy. Transactions that are enforced will be rejected if the AVS postcode numeric value does not match.
     * 
     *  `2` to bypass. Transactions that are bypassed will be allowed through even if the postcode did not match.
     * 
     *  `3` to ignore. Transactions that are ignored will bypass the result and not send postcode details for authorisation.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    avsPostcodePolicy?: string;
    /**
     * 
     * @type {ContactDetails}
     * @memberof PaymentIntent
     */
    billTo?: ContactDetails;
    /**
     * The Card Security Code (CSC) (also known as CV2/CVV2) is normally found on the back of the card
     * (American Express has it on the front). The value helps to identify possession of the card as it is not
     * available within the chip or magnetic swipe.
     * 
     * When forwarding the CSC, please ensure the value is a string as some values start with 0 and this will be stripped
     * out by any integer parsing.
     * 
     * The CSC number aids fraud prevention in Mail Order and Internet payments.
     * 
     * Business rules are available on your account to identify whether to accept
     * or decline transactions based on mismatched results of the CSC.
     * 
     * The Payment Card Industry (PCI) requires that at no stage of a transaction should the CSC be stored.
     * 
     * This applies to all entities handling card data.
     * 
     * It should also not be used in any hashing process.
     * 
     * CityPay do not store the value and have no method of retrieving the value once the transaction has been processed.
     * For this reason, duplicate checking is unable to determine the CSC in its duplication check algorithm.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    csc?: string;
    /**
     * A policy value which determines whether a CSC policy is enforced or bypassed.
     * 
     * Values are:
     * 
     *  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.
     * 
     *  `1` for an enforced policy. Transactions that are enforced will be rejected if the CSC value does not match.
     * 
     *  `2` to bypass. Transactions that are bypassed will be allowed through even if the CSC did not match.
     * 
     *  `3` to ignore. Transactions that are ignored will bypass the result and not send the CSC details for authorisation.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    cscPolicy?: string;
    /**
     * The processing currency for the transaction. Will default to the merchant account currency.
     * @type {string}
     * @memberof PaymentIntent
     */
    currency?: string;
    /**
     * A policy value which determines whether a duplication policy is enforced or bypassed. A duplication check has a window
     * of time set against your account within which it can action. If a previous transaction with matching values occurred within
     * the window, any subsequent transaction will result in a T001 result.
     * 
     * Values are
     * 
     *  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.
     * 
     *  `1` for an enforced policy. Transactions that are enforced will be checked for duplication within the duplication window.
     * 
     *  `2` to bypass. Transactions that are bypassed will not be checked for duplication within the duplication window.
     * 
     *  `3` to ignore. Transactions that are ignored will have the same affect as bypass.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    duplicatePolicy?: string;
    /**
     * A policy value which determines whether an AVS address policy is enforced, bypassed or ignored.
     * 
     * Values are:
     * 
     *  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.
     * 
     *  `1` for an enforced policy. Transactions that are enforced will be rejected if the AVS address numeric value does not match.
     * 
     *  `2` to bypass. Transactions that are bypassed will be allowed through even if the address did not match.
     * 
     *  `3` to ignore. Transactions that are ignored will bypass the result and not send address numeric details for authorisation.
     * 
     * @type {string}
     * @memberof PaymentIntent
     */
    matchAvsa?: string;
    /**
     * 
     * @type {ContactDetails}
     * @memberof PaymentIntent
     */
    shipTo?: ContactDetails;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaymentIntent
     */
    tag?: Array<string>;
    /**
     * Further information that can be added to the transaction will display in reporting. Can be used for flexible values such as operator id.
     * @type {string}
     * @memberof PaymentIntent
     */
    transInfo?: string;
    /**
     * The type of transaction being submitted. Normally this value is not required and your account manager may request that you set this field.
     * @type {string}
     * @memberof PaymentIntent
     */
    transType?: string;
}

/**
 * Check if a given object implements the PaymentIntent interface.
 */
export function instanceOfPaymentIntent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function PaymentIntentFromJSON(json: any): PaymentIntent {
    return PaymentIntentFromJSONTyped(json, false);
}

export function PaymentIntentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentIntent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'identifier': json['identifier'],
        'avsPostcodePolicy': !exists(json, 'avs_postcode_policy') ? undefined : json['avs_postcode_policy'],
        'billTo': !exists(json, 'bill_to') ? undefined : ContactDetailsFromJSON(json['bill_to']),
        'csc': !exists(json, 'csc') ? undefined : json['csc'],
        'cscPolicy': !exists(json, 'csc_policy') ? undefined : json['csc_policy'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'duplicatePolicy': !exists(json, 'duplicate_policy') ? undefined : json['duplicate_policy'],
        'matchAvsa': !exists(json, 'match_avsa') ? undefined : json['match_avsa'],
        'shipTo': !exists(json, 'ship_to') ? undefined : ContactDetailsFromJSON(json['ship_to']),
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'transInfo': !exists(json, 'trans_info') ? undefined : json['trans_info'],
        'transType': !exists(json, 'trans_type') ? undefined : json['trans_type'],
    };
}

export function PaymentIntentToJSON(value?: PaymentIntent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'identifier': value.identifier,
        'avs_postcode_policy': value.avsPostcodePolicy,
        'bill_to': ContactDetailsToJSON(value.billTo),
        'csc': value.csc,
        'csc_policy': value.cscPolicy,
        'currency': value.currency,
        'duplicate_policy': value.duplicatePolicy,
        'match_avsa': value.matchAvsa,
        'ship_to': ContactDetailsToJSON(value.shipTo),
        'tag': value.tag,
        'trans_info': value.transInfo,
        'trans_type': value.transType,
    };
}

