const ociOS = require("oci-objectstorage");
const oci = require('oci-sdk');
const common = require("oci-common");

/*
* Note: there is a 2GB for 64-bit machine and 1GB for 32-bit machine buffer limitation from the NodeJS V8 Engine
* Cannot upload file size greater than the limit
*/
// Init OCI Object Storage Client
// Using personal configuration
const provider = new common.ConfigFileAuthenticationDetailsProvider();
const ociClient = new ociOS.ObjectStorageClient({
    authenticationDetailsProvider: provider
});

/* (async () => {
    try {

        console.log("Getting OCI OS Namespace...");
        const request = {};
        const nsResponse = await ociClient.getNamespace(request);
        const namespace = nsResponse.value;
        console.log('OCI OS Namespace:', namespace);

        const bucketName = 'fum_reports';

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todaydate = yyyy + '-' + mm + '-' + '08';
        console.log('Date time:', todaydate);

        const objectName = 'crypto.signals.' + today + '.json';
        console.log('Object Name:', objectName);

        const getObjectRequest = ociOS.requests.GetObjectRequest = {
            objectName: objectName,
            bucketName: bucketName,
            namespaceName: namespace,
            httpResponseContentEncoding: null
        };

        const getObjectResponse = await ociClient.getObject(getObjectRequest);
        console.log("Get Object executed...");
        console.log(getObjectResponse);
        console.log(getObjectResponse.data);
        console.log("Object Data:", JSON.stringify(getObjectResponse.value, 'utf8'));

        //console.log("Swifting through getObjectResponse...");
        //console.log(getObjectResponse);

        // TODO: Parse Object Storage Response for signals
        //console.log("Deserializing Object Response...");
        //console.log(getObjectResponse.value);


    } catch (e) {
        console.log("Error:", e);
    }
})();

function streamToString(stream) {
    let output = "";
    stream.on("data", function (data) {
        output += data.toString();
    });
    stream.on("end", function () {
        return output;
    });
} */