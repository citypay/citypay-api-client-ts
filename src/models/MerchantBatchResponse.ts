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
import type { NetSummaryResponse } from './NetSummaryResponse';
import {
    NetSummaryResponseFromJSON,
    NetSummaryResponseFromJSONTyped,
    NetSummaryResponseToJSON,
} from './NetSummaryResponse';

/**
 * 
 * @export
 * @interface MerchantBatchResponse
 */
export interface MerchantBatchResponse {
    /**
     * The date and time when the batch was closed. This is represented in ISO 8601 format (e.g., YYYY-MM-DDTHH:MM:SSZ) and indicates when the batch processing was completed.
     * @type {Date}
     * @memberof MerchantBatchResponse
     */
    batchClosed?: Date;
    /**
     * The incremental identifier of the batch. This number is used to track and reference the batch in subsequent operations or inquiries.
     * @type {string}
     * @memberof MerchantBatchResponse
     */
    batchNo?: string;
    /**
     * A descriptive string detailing the current status of the batch. This status provides a human-readable explanation of the batch's processing state.
     * @type {string}
     * @memberof MerchantBatchResponse
     */
    batchStatus?: string;
    /**
     * A batch status code that represents the processing state of the batch. Batches will be one of
     *  - 'O' defining the batch is open for settlement and not yet settled
     *  - 'X' defines that the batch is external to our systems and managed elsewhere
     *  - 'C' defines that the batch is cancelled and not settled
     *  - 'S' defines that the batch has been settled and remitted.
     * 
     * @type {string}
     * @memberof MerchantBatchResponse
     */
    batchStatusCode?: string;
    /**
     * The currency of the batch.
     * @type {string}
     * @memberof MerchantBatchResponse
     */
    currency?: string;
    /**
     * The Merchant ID (MID) associated with the batch. This identifier specifies which merchant account the batch was processed for, linking transactions to the merchant.
     * @type {number}
     * @memberof MerchantBatchResponse
     */
    merchantid?: number;
    /**
     * 
     * @type {NetSummaryResponse}
     * @memberof MerchantBatchResponse
     */
    netSummary?: NetSummaryResponse;
}

/**
 * Check if a given object implements the MerchantBatchResponse interface.
 */
export function instanceOfMerchantBatchResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MerchantBatchResponseFromJSON(json: any): MerchantBatchResponse {
    return MerchantBatchResponseFromJSONTyped(json, false);
}

export function MerchantBatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantBatchResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchClosed': !exists(json, 'batch_closed') ? undefined : (new Date(json['batch_closed'])),
        'batchNo': !exists(json, 'batch_no') ? undefined : json['batch_no'],
        'batchStatus': !exists(json, 'batch_status') ? undefined : json['batch_status'],
        'batchStatusCode': !exists(json, 'batch_status_code') ? undefined : json['batch_status_code'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'merchantid': !exists(json, 'merchantid') ? undefined : json['merchantid'],
        'netSummary': !exists(json, 'net_summary') ? undefined : NetSummaryResponseFromJSON(json['net_summary']),
    };
}

export function MerchantBatchResponseToJSON(value?: MerchantBatchResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batch_closed': value.batchClosed === undefined ? undefined : (value.batchClosed.toISOString()),
        'batch_no': value.batchNo,
        'batch_status': value.batchStatus,
        'batch_status_code': value.batchStatusCode,
        'currency': value.currency,
        'merchantid': value.merchantid,
        'net_summary': NetSummaryResponseToJSON(value.netSummary),
    };
}

