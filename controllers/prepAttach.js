const Discord = require('discord.js');
const ociOS = require("oci-objectstorage");
const oci = require('oci-sdk');
const common = require("oci-common");

/*
* Note: there is a 2GB for 64-bit machine and 1GB for 32-bit machine buffer limitation from the NodeJS V8 Engine
* Cannot upload file size greater than the limit
*/
// Init OCI Object Storage Client
// Using personal configuration
// const provider = new common.ConfigFileAuthenticationDetailsProvider();
// const ociClient = new ociOS.ObjectStorageClient({
//     authenticationDetailsProvider: provider
// });


const reportTypes = ['crypto','stocks'];

// TODO: Prep file name string
function prepReportName(ReportType){

    const buckets = {
        "fum_Reports": process.env.bucketReportURI
    }
    
    let date_ob = new Date();
    console.log("Full date of report prep", date_ob)

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();
    console.log("Prep report triggered at:", hours);

    if (hours >= 17) {
        // prints date in YYYY-MM-DD format
        let reportdate = year + "-" + month + "-" + date;
        if (ReportType == 'crypto') {
            let REPORTFILE = 'crypto.signals.'+ reportdate + '.json';
            console.log("Returning crypto report file for", reportdate);
            let attachmentURI = buckets.fum_Reports + REPORTFILE;
            return attachmentURI;
        } else if (ReportType == 'stocks'){
            let REPORTFILE = 'stocks.'+ reportdate + '.signals' + '.csv';
            console.log("Returning stock report file for", reportdate);
            let attachmentURI = buckets.fum_Reports  + REPORTFILE;
            return attachmentURI;
        }
    } else {
        // prints date in YYYY-MM-DD format
        let newDate = ("0" + (date_ob.getDate()-1)).slice(-2);
        let reportdate = year + "-" + month + "-" + newDate;
        if (ReportType == 'crypto') {
            let REPORTFILE = 'crypto.signals.'+ reportdate + '.json';
            console.log("Returning crypto report file for", reportdate);
            let attachmentURI = buckets.fum_Reports  + REPORTFILE;
            return attachmentURI;
        } else if (ReportType == 'stocks'){
            let REPORTFILE = 'stocks.'+ reportdate + '.signals' + '.csv';
            console.log("Returning stock report file for", reportdate);
            let attachmentURI = buckets.fum_Reports  + REPORTFILE;
            return attachmentURI;
        }
    }
}

module.exports = {
    prepReportName: prepReportName
}
