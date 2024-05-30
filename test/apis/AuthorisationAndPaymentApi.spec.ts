import * as CityPay from "../../src"
import {expect} from '@jest/globals';
import {getConfiguration, getMerchandId} from "../Configuration";

describe('Can run AuthorisationAndPayment calls', () => {
    it('should do an Authorise3DSv2', async () => {
        const authorisationAndPaymentApi = new CityPay.AuthorisationAndPaymentApi(getConfiguration());

        const threeDSecureData: CityPay.ThreeDSecure = {
            merchantTermurl: "https://citypay.com/acs/return",
            cpBx: "eyJhIjoiRkFwSCIsImMiOjI0LCJpIjoid3dIOTExTlBKSkdBRVhVZCIsImoiOmZhbHNlLCJsIjoiZW4tVVMiLCJoIjoxNDQwLCJ3IjoyNTYwLCJ0IjowLCJ1IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTFfMl8zKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODkuMC40Mzg5LjgyIFNhZmFyaS81MzcuMzYiLCJ2IjoiMS4wLjAifQ"
        }

        const requestParameters: CityPay.AuthRequest = {
            identifier: "example1",
            cardnumber: "4000 0000 0000 0002",
            csc: "123",
            expmonth: 12,
            expyear: 2030,
            merchantid: getMerchandId(),
            amount: 1,
            threedsecure: threeDSecureData
        }

        const decision: CityPay.Decision = await authorisationAndPaymentApi.authorisationRequest({
            auth_request: requestParameters
        });

        expect(decision.authResponse).toBeUndefined();
        expect(decision.requestChallenged).not.toBeUndefined();

        const requestChallenged = decision.requestChallenged;
        const requestChallengedCreq = requestChallenged?.creq;
        const requestChallengedThreeDSSessionData = requestChallenged?.threedserverTransId;
        const requestChallengeAcsUrl = requestChallenged?.acsUrl;

        expect(requestChallengedCreq).not.toBeUndefined();
        expect(requestChallengedThreeDSSessionData).not.toBeUndefined();
        expect(requestChallengeAcsUrl).not.toBeUndefined();

        if (requestChallengeAcsUrl) {
            const cres = await fetch(requestChallengeAcsUrl, {
                    method: 'POST', // Specifying the request method
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        threeDSSessionData: requestChallengedThreeDSSessionData,
                        creq: requestChallengedCreq
                    })
                }
            )

            expect(cres.status).toBe(200);

            const cresResponse = await cres.json();

            const cresRequest: CityPay.CResAuthRequest = {
                cres: cresResponse.cres
            }

            const authResponse = await authorisationAndPaymentApi.cResRequest({
                c_res_auth_request: cresRequest
            });

            expect(authResponse.amount).toBe(1);
            expect(authResponse.authcode).toBe('A12345');
            expect(authResponse.authenResult).toBe('Y');
            expect(authResponse.authorised).toBeTruthy();
        }
    });
});
