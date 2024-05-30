import * as CityPay from "../../src"
import {expect} from '@jest/globals';
import {getConfiguration, getClientId} from "../Configuration";

describe('Can run OperationalFunctions calls', () => {

    it('should do a Ping request', async () => {

        const operationalFunctionsApi = new CityPay.OperationalFunctionsApi(getConfiguration());

        const requestParameters: CityPay.OperationalFunctionsApiPingRequest = {
            ping: CityPay.PingFromJSON({identifier: "ping_test"})
        };

        const pingResult = await operationalFunctionsApi.pingRequest(requestParameters);
        expect(pingResult.code).toBe('044');
        expect(pingResult.identifier).toBe(requestParameters.ping.identifier);
        expect(pingResult.message).toBe("Ping OK");

    });

    it('should list merchants', async () => {

        const operationalFunctionsApi = new CityPay.OperationalFunctionsApi(getConfiguration());
        const merchantRequest: CityPay.OperationalFunctionsApiListMerchantsRequest = {
            clientid: getClientId()
        }
        const merchants = await operationalFunctionsApi.listMerchantsRequest(merchantRequest);
        expect(merchants.clientid).toBe(getClientId());
    });
});
