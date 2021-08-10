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


const reportTypes = [['crypto'],['stocks', 'sectors']];

const buckets = {
    "fum_Reports": process.env.bucketReportURI
}

function prepCryptoReportName(ReportType){
    try {
        let date_ob = new Date();
        console.log("Full date of crypto report prep", date_ob)

        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();
        console.log("crypto prep report triggered at:", hours);

        if (hours >= 22) {
            // prints date in YYYY-MM-DD format
            let reportdate = year + "-" + month + "-" + date;
            if (ReportType == 'crypto') {
                let REPORTFILE = 'fumcrypto.'+ reportdate + '.txt';
                console.log("Returning crypto report file for", reportdate);
                let attachmentURI = buckets.fum_Reports + REPORTFILE;
                return attachmentURI;
            }
        } else {
            // prints date in YYYY-MM-DD format - 1 day to data delay
            let newDate = ("0" + (date_ob.getDate()-1)).slice(-2);
            let reportdate = year + "-" + month + "-" + newDate;
            if (ReportType == 'crypto') {
                let REPORTFILE = 'fumcrypto.'+ reportdate + '.txt';
                console.log("Returning crypto report file for", reportdate);
                let attachmentURI = buckets.fum_Reports  + REPORTFILE;
                return attachmentURI;
            } 
        }
    } catch (e){
        console.log("crypto prep report error:", e)
    }
    
}
function prepStockReportName(ReportType){
    
    try{
        let date_ob = new Date();
        console.log("Full date of stocks report prep", date_ob)

        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();
        console.log("stock prep report triggered at:", hours);

        if (hours >= 24) {
            // prints date in YYYY-MM-DD format
            let reportdate = year + "-" + month + "-" + date;
            if (ReportType == 'stocks'){
                let REPORTFILE = 'stocks.'+ reportdate + '.signals' + '.json';
                console.log("Returning stock report file for", reportdate);
                let attachmentURI = buckets.fum_Reports  + REPORTFILE;
                return attachmentURI;
            } else if (ReportType == 'sectors') {
                let REPORTFILE = 'sector-strength-stocks.'+ reportdate + '.json';
                console.log("Returning stock report file for", reportdate);
                let attachmentURI = buckets.fum_Reports  + REPORTFILE;
                return attachmentURI;
            }
        } else {
            // prints date in YYYY-MM-DD format
            let newDate = ("0" + (date_ob.getDate()-1)).slice(-2);
            let reportdate = year + "-" + month + "-" + newDate;
            if (ReportType == 'stocks') {
                let REPORTFILE = 'stocks.'+ reportdate + '.signals' + '.json';
                console.log("Returning stock report file for", reportdate);
                let attachmentURI = buckets.fum_Reports  + REPORTFILE;
                return attachmentURI;
            } else if (ReportType == 'sectors') {
                let REPORTFILE = 'sector-strength-stocks.'+ reportdate + '.json';
                console.log("Returning stock report file for", reportdate);
                let attachmentURI = buckets.fum_Reports  + REPORTFILE;
                return attachmentURI;
            }
        }
    } catch (e){
        console.log("stock prep report error:", e)
    }
}

module.exports = {
    prepCryptoReportName: prepCryptoReportName,
    prepStockReportName: prepStockReportName
}
