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
/**
 * 
 * @export
 * @interface AuthResponse
 */
export interface AuthResponse {
    /**
     * The merchant id that processed this transaction.
     * @type {number}
     * @memberof AuthResponse
     */
    merchantid: number;
    /**
     * An integer result that indicates the outcome of the transaction. The Code value below maps to the result value
     * 
     * <table>
     * <tr>
     * <th>Code</th>
     * <th>Abbrev</th>
     * <th>Description</th>
     * </tr>
     * <tr><td>0</td><td>Declined</td><td>Declined</td></tr>
     * <tr><td>1</td><td>Accepted</td><td>Accepted</td></tr>
     * <tr><td>2</td><td>Rejected</td><td>Rejected</td></tr>
     * <tr><td>3</td><td>Not Attempted</td><td>Not Attempted</td></tr>
     * <tr><td>4</td><td>Referred</td><td>Referred</td></tr>
     * <tr><td>5</td><td>PinRetry</td><td>Perform PIN Retry</td></tr>
     * <tr><td>6</td><td>ForSigVer</td><td>Force Signature Verification</td></tr>
     * <tr><td>7</td><td>Hold</td><td>Hold</td></tr>
     * <tr><td>8</td><td>SecErr</td><td>Security Error</td></tr>
     * <tr><td>9</td><td>CallAcq</td><td>Call Acquirer</td></tr>
     * <tr><td>10</td><td>DNH</td><td>Do Not Honour</td></tr>
     * <tr><td>11</td><td>RtnCrd</td><td>Retain Card</td></tr>
     * <tr><td>12</td><td>ExprdCrd</td><td>Expired Card</td></tr>
     * <tr><td>13</td><td>InvldCrd</td><td>Invalid Card No</td></tr>
     * <tr><td>14</td><td>PinExcd</td><td>Pin Tries Exceeded</td></tr>
     * <tr><td>15</td><td>PinInvld</td><td>Pin Invalid</td></tr>
     * <tr><td>16</td><td>AuthReq</td><td>Authentication Required</td></tr>
     * <tr><td>17</td><td>AuthenFail</td><td>Authentication Failed</td></tr>
     * <tr><td>18</td><td>Verified</td><td>Card Verified</td></tr>
     * <tr><td>19</td><td>Cancelled</td><td>Cancelled</td></tr>
     * <tr><td>20</td><td>Un</td><td>Unknown</td></tr>
     * <tr><td>21</td><td>Challenged</td><td>Challenged</td></tr>
     * <tr><td>22</td><td>Decoupled</td><td>Decoupled</td></tr>
     * <tr><td>23</td><td>Denied</td><td>Permission Denied</td></tr>
     * </table>
     * 
     * @type {number}
     * @memberof AuthResponse
     */
    result: number;
    /**
     * The result code as defined in the Response Codes Reference for example 000 is an accepted live
     * transaction whilst 001 is an accepted test transaction. Result codes identify the source of success and failure.
     * 
     * Codes may start with an alpha character i.e. C001 indicating a type of error such as a card validation error.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    resultCode: string;
    /**
     * The message regarding the result which provides further narrative to the result code.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    resultMessage: string;
    /**
     * The amount of the transaction processed.
     * @type {number}
     * @memberof AuthResponse
     */
    amount?: number;
    /**
     * A reference number provided by the acquirer for a transaction it can be used to cross reference transactions
     * with an Acquirers reporting panel.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    atrn?: string;
    /**
     * Additional Transaction Security Data used for ecommerce transactions to decipher security capabilities and attempts against a transaction.
     * @type {string}
     * @memberof AuthResponse
     */
    atsd?: string;
    /**
     * The authorisation code as returned by the card issuer or acquiring bank when a transaction has successfully
     *   been authorised. Authorisation codes contain alphanumeric values. Whilst the code confirms authorisation it
     *   should not be used to determine whether a transaction was successfully processed. For instance an auth code
     *   may be returned when a transaction has been subsequently declined due to a CSC mismatch.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    authcode?: string;
    /**
     * The result of any authentication using 3d_secure authorisation against ecommerce transactions. Values are:
     * 
     * <table>
     * <tr>
     * <th>Value</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td>Y</td>
     * <td>Authentication Successful. The Cardholder's password was successfully validated.</td>
     * </tr>
     * <tr>
     * <td>N</td>
     * <td>Authentication Failed. Customer failed or cancelled authentication, transaction denied.</td>
     * </tr>
     * <tr>
     * <td>A</td>
     * <td>Attempts Processing Performed Authentication could not be completed but a proof of authentication attempt (CAVV) was generated.</td>
     * </tr>
     * <tr>
     * <td>U</td>
     * <td>Authentication Could Not Be Performed Authentication could not be completed, due to technical or other problem.</td>
     * </tr>
     * </table>
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    authenResult?: string;
    /**
     * A boolean definition that indicates that the transaction was authorised. It will return false if the transaction
     *  was declined, rejected or cancelled due to CSC matching failures.
     * 
     * Attention should be referenced to the AuthResult and Response code for accurate determination of the result.
     * 
     * @type {boolean}
     * @memberof AuthResponse
     */
    authorised?: boolean;
    /**
     * The AVS result codes determine the result of checking the AVS values within the
     * Address Verification fraud system. If a transaction is declined due to the AVS code not matching,
     * this value can help determine the reason for the decline.
     * 
     * <table>
     * <tr>
     * <th>Code</th>
     * <th>Description</th>
     * </tr>
     * <tr><td>Y</td><td>Address and 5 digit post code match</td></tr>
     * <tr><td>M</td><td>Street address and Postal codes match for international transaction</td></tr>
     * <tr><td>U</td><td>No AVS data available from issuer auth system</td></tr>
     * <tr><td>A</td><td>Addres matches, post code does not</td></tr>
     * <tr><td>I</td><td>Address information verified for international transaction</td></tr>
     * <tr><td>Z</td><td>5 digit post code matches, Address does not</td></tr>
     * <tr><td>W</td><td>9 digit post code matches, Address does not</td></tr>
     * <tr><td>X</td><td>Postcode and address match</td></tr>
     * <tr><td>B</td><td>Postal code not verified due to incompatible formats</td></tr>
     * <tr><td>P</td><td>Postal codes match. Street address not verified due to to incompatible formats</td></tr>
     * <tr><td>E</td><td>AVS Error</td></tr>
     * <tr><td>C</td><td>Street address and Postal code not verified due to incompatible formats</td></tr>
     * <tr><td>D</td><td>Street address and postal codes match</td></tr>
     * <tr><td> </td><td>No information</td></tr>
     * <tr><td>N</td><td>Neither postcode nor address match</td></tr>
     * <tr><td>R</td><td>Retry, System unavailble or Timed Out</td></tr>
     * <tr><td>S</td><td>AVS Service not supported by issuer or processor</td></tr>
     * <tr><td>G</td><td>Issuer does not participate in AVS</td></tr>
     * </table>
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    avsResult?: string;
    /**
     * Determines whether the bin range was found to be a commercial or business card.
     * @type {boolean}
     * @memberof AuthResponse
     */
    binCommercial?: boolean;
    /**
     * Determines whether the bin range was found to be a debit card. If false the card was considered as a credit card.
     * @type {boolean}
     * @memberof AuthResponse
     */
    binDebit?: boolean;
    /**
     * A description of the bin range found for the card.
     * @type {string}
     * @memberof AuthResponse
     */
    binDescription?: string;
    /**
     * The cardholder authentication verification value which can be returned for verification purposes of the authenticated
     *  transaction for dispute realisation.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    cavv?: string;
    /**
     * The context which processed the transaction, can be used for support purposes to trace transactions.
     * @type {string}
     * @memberof AuthResponse
     */
    context?: string;
    /**
     * The CSC result codes determine the result of checking the provided CSC value within the
     * Card Security Code fraud system. If a transaction is declined due to the CSC code not matching,
     * this value can help determine the reason for the decline.
     * 
     * <table>
     * <tr>
     * <th>Code</th>
     * <th>Description</th>
     * </tr>
     * <tr><td> </td><td>No information</td></tr>
     * <tr><td>M</td><td>Card verification data matches</td></tr>
     * <tr><td>N</td><td>Card verification data was checked but did not match</td></tr>
     * <tr><td>P</td><td>Card verification was not processed</td></tr>
     * <tr><td>S</td><td>The card verification data should be on the card but the merchant indicates that it is not</td></tr>
     * <tr><td>U</td><td>The card issuer is not certified</td></tr>
     * </table>
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    cscResult?: string;
    /**
     * The currency the transaction was processed in. This is an `ISO4217` alpha currency value.
     * @type {string}
     * @memberof AuthResponse
     */
    currency?: string;
    /**
     * The UTC date time of the transaction in ISO data time format.
     * 
     * @type {Date}
     * @memberof AuthResponse
     */
    datetime?: Date;
    /**
     * An Electronic Commerce Indicator (ECI) used to identify the result of authentication using 3DSecure.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    eci?: string;
    /**
     * The identifier provided within the request.
     * @type {string}
     * @memberof AuthResponse
     */
    identifier?: string;
    /**
     * Used to identify that a transaction was processed on a live authorisation platform.
     * @type {boolean}
     * @memberof AuthResponse
     */
    live?: boolean;
    /**
     * A masked value of the card number used for processing displaying limited values that can be used on a receipt.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    maskedpan?: string;
    /**
     * The name of the card scheme of the transaction that processed the transaction such as Visa or MasterCard.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    scheme?: string;
    /**
     * The name of the card scheme of the transaction such as VI or MC.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    schemeId?: string;
    /**
     * A url containing a logo of the card scheme.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    schemeLogo?: string;
    /**
     * A SHA256 digest value of the transaction used to validate the response data
     * The digest is calculated by concatenating
     * 
     *  * authcode
     * 
     *  * amount
     * 
     *  * response_code
     * 
     *  * merchant_id
     * 
     *  * trans_no
     * 
     *  * identifier
     * 
     *  * licence_key - which is not provided in the response.
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    sha256?: string;
    /**
     * Used to identify the status of a transaction. The status is used to track a transaction through its life cycle.
     * 
     * <table>
     * <tr>
     * <th>Id</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td>O</td>
     * <td>Transaction is open for settlement</td>
     * </tr>
     * <tr>
     * <td>A</td>
     * <td>Transaction is assigned for settlement and can no longer be voided</td>
     * </tr>
     * <tr>
     * <td>S</td>
     * <td>Transaction has been settled</td>
     * </tr>
     * <tr>
     * <td>D</td>
     * <td>Transaction has been declined</td>
     * </tr>
     * <tr>
     * <td>R</td>
     * <td>Transaction has been rejected</td>
     * </tr>
     * <tr>
     * <td>P</td>
     * <td>Transaction has been authorised only and awaiting a capture. Used in pre-auth situations</td>
     * </tr>
     * <tr>
     * <td>C</td>
     * <td>Transaction has been cancelled</td>
     * </tr>
     * <tr>
     * <td>E</td>
     * <td>Transaction has expired</td>
     * </tr>
     * <tr>
     * <td>I</td>
     * <td>Transaction has been initialised but no action was able to be carried out</td>
     * </tr>
     * <tr>
     * <td>H</td>
     * <td>Transaction is awaiting authorisation</td>
     * </tr>
     * <tr>
     * <td>.</td>
     * <td>Transaction is on hold</td>
     * </tr>
     * <tr>
     * <td>V</td>
     * <td>Transaction has been verified</td>
     * </tr>
     * </table>
     * 
     * @type {string}
     * @memberof AuthResponse
     */
    transStatus?: string;
    /**
     * The resulting transaction number, ordered incrementally from 1 for every merchant_id. The value will default to less than 1
     * for transactions that do not have a transaction number issued.
     * 
     * @type {number}
     * @memberof AuthResponse
     */
    transno?: number;
}

/**
 * Check if a given object implements the AuthResponse interface.
 */
export function instanceOfAuthResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "merchantid" in value;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "resultCode" in value;
    isInstance = isInstance && "resultMessage" in value;

    return isInstance;
}

export function AuthResponseFromJSON(json: any): AuthResponse {
    return AuthResponseFromJSONTyped(json, false);
}

export function AuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merchantid': json['merchantid'],
        'result': json['result'],
        'resultCode': json['result_code'],
        'resultMessage': json['result_message'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'atrn': !exists(json, 'atrn') ? undefined : json['atrn'],
        'atsd': !exists(json, 'atsd') ? undefined : json['atsd'],
        'authcode': !exists(json, 'authcode') ? undefined : json['authcode'],
        'authenResult': !exists(json, 'authen_result') ? undefined : json['authen_result'],
        'authorised': !exists(json, 'authorised') ? undefined : json['authorised'],
        'avsResult': !exists(json, 'avs_result') ? undefined : json['avs_result'],
        'binCommercial': !exists(json, 'bin_commercial') ? undefined : json['bin_commercial'],
        'binDebit': !exists(json, 'bin_debit') ? undefined : json['bin_debit'],
        'binDescription': !exists(json, 'bin_description') ? undefined : json['bin_description'],
        'cavv': !exists(json, 'cavv') ? undefined : json['cavv'],
        'context': !exists(json, 'context') ? undefined : json['context'],
        'cscResult': !exists(json, 'csc_result') ? undefined : json['csc_result'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'datetime': !exists(json, 'datetime') ? undefined : (new Date(json['datetime'])),
        'eci': !exists(json, 'eci') ? undefined : json['eci'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'live': !exists(json, 'live') ? undefined : json['live'],
        'maskedpan': !exists(json, 'maskedpan') ? undefined : json['maskedpan'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
        'schemeId': !exists(json, 'scheme_id') ? undefined : json['scheme_id'],
        'schemeLogo': !exists(json, 'scheme_logo') ? undefined : json['scheme_logo'],
        'sha256': !exists(json, 'sha256') ? undefined : json['sha256'],
        'transStatus': !exists(json, 'trans_status') ? undefined : json['trans_status'],
        'transno': !exists(json, 'transno') ? undefined : json['transno'],
    };
}

export function AuthResponseToJSON(value?: AuthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merchantid': value.merchantid,
        'result': value.result,
        'result_code': value.resultCode,
        'result_message': value.resultMessage,
        'amount': value.amount,
        'atrn': value.atrn,
        'atsd': value.atsd,
        'authcode': value.authcode,
        'authen_result': value.authenResult,
        'authorised': value.authorised,
        'avs_result': value.avsResult,
        'bin_commercial': value.binCommercial,
        'bin_debit': value.binDebit,
        'bin_description': value.binDescription,
        'cavv': value.cavv,
        'context': value.context,
        'csc_result': value.cscResult,
        'currency': value.currency,
        'datetime': value.datetime === undefined ? undefined : (value.datetime.toISOString()),
        'eci': value.eci,
        'identifier': value.identifier,
        'live': value.live,
        'maskedpan': value.maskedpan,
        'scheme': value.scheme,
        'scheme_id': value.schemeId,
        'scheme_logo': value.schemeLogo,
        'sha256': value.sha256,
        'trans_status': value.transStatus,
        'transno': value.transno,
    };
}

