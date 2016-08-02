var express = require('express');
var app = express();
var pdfFiller   = require('pdffiller');

//App set up ============================================
app.get('/', function(req, res){
  res.send("PDF filler")
});

app.listen(4000, function(){
  console.log("Example app listening on port 4000");
});

var sourcePDF = "start.pdf";
var destinationPDF = "end.pdf";
var shouldFlatten = true;
var fieldJson = [
    {
        "title" : "AM Delivery",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Bill to Address",
        "fieldfieldType": "Text",
        "fieldValue": "1000 Example St."
    },
    {
        "title" : "Bill to Area Code",
        "fieldType": "Text",
        "fieldValue": "317"
    },
    {
        "title" : "Bill to City",
        "fieldType": "Text",
        "fieldValue": "Indianapolis"
    },
    {
        "title" : "Bill to Country",
        "fieldType": "Text",
        "fieldValue": "United States"
    },
    {
        "title" : "Bill to FXF ACCT #",
        "fieldType": "Text",
        "fieldValue": "12345678"
    },
    {
        "title" : "Bill to Name",
        "fieldType": "Text",
        "fieldValue": "Bryce Phelps"
    },
    {
        "title" : "Bill to Phone #",
        "fieldType": "Text",
        "fieldValue": "333-333-3333"
    },
    {
        "title" : "Bill to State/Prov",
        "fieldfieldType": "Text",
        "fieldValue": "IN"
    },
    {
        "title" : "Bill to ZIP/Postal Code",
        "fieldfieldType": "Text",
        "fieldValue": "46123"
    },
    {
        "title" : "Broker Name",
        "fieldType": "Text",
        "fieldValue": "Robbie"
    },
    {
        "title" : "CHECK IF COLLECT",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "COD AMT",
        "fieldType": "Text",
        "fieldValue": "COD AMT"
    },
    {
        "title" : "Certified Funds",
        "fieldType": "button",
        "fieldValue": "12345678"
    },
    {
        "title" : "Check if to be paid by Consignee",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Check if to be paid by Shipper",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Close of Business Delivery",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Comapny Check",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Consignee",
        "fieldType": "Text",
        "fieldValue": "Consignee"
    },
    {
        "title" : "Consignee Address 1",
        "fieldType": "Text",
        "fieldValue": "Consignee Address 1"
    },
    {
        "title" : "Consignee Attn",
        "fieldType": "Text",
        "fieldValue": "Consignee Attn"
    },
    {
        "title" : "Consignee City",
        "fieldType": "Text",
        "fieldValue": "Consignee City"
    },
    {
        "title" : "Consignee Country",
        "fieldType": "Text",
        "fieldValue": "Consignee Country"
    },
    {
        "title" : "Consignee FXF ACCT #",
        "fieldType": "Text",
        "fieldValue": "Consignee FXF ACCt #"
    },
    {
        "title" : "Consignee Inside Delivery",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Consignee Liftgate",
        "fieldfieldType": "Text",
        "fieldValue": "Consignee Liftgate"
    },
    {
        "title" : "Consignee Ltd Access",
        "fieldType": "Text",
        "fieldValue": "Consignee Ltd Access"
    },
    {
        "title" : "Consignee Phone #",
        "fieldType": "Text",
        "fieldValue": "Consignee Phone #"
    },
    {
        "title" : "Consignee State/Prov",
        "fieldType": "Text",
        "fieldValue": "Consignee State/Prov"
    },
    {
        "title" : "Consignee ZIP/Postal Code",
        "fieldType": "Text",
        "fieldValue": "Consignee ZIP/Postal Code"
    },
    {
        "title" : "Custon Delivery Window",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Custom Delivery Window Info",
        "fieldType": "Text",
        "fieldValue": "Custom Delivery Window Info"
    },
    {
        "title" : "Date",
        "fieldfieldType": "Text",
        "fieldValue": "Date"
    },
    {
        "title" : "EEI/SED # or Exception",
        "fieldfieldType": "Text",
        "fieldValue": "EEI/SED # or Exception"
    },
    {
        "title" : "FXF Economy",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "FXF Priority",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 1",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 2",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 3",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 4",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 5",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "HM 6",
        "fieldfieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM 7",
        "fieldType": "Button",
        "fieldValue": false
    },
    {
        "title" : "HM Emergency Phone #",
        "fieldType": "Text",
        "fieldValue": "HM Emergency Phone #"
    },
    {
        "title" : "HM Emergency Response Provider Person or Contact #",
        "fieldType": "Text",
        "fieldValue": "HM Emergency Response Provider Person or Contact #"
    },
    {
        "title" : "HU 1",
        "fieldType": "Text",
        "fieldValue": "HU 1"
    },
    {
        "title" : "Int'l Fax #",
        "fieldType": "Text",
        "fieldValue": "Int'l Fax #"
    },
    {
        "title" : "Int'l Phone #",
        "fieldType": "Text",
        "fieldValue": "Int'l Phone #"
    },
    {
        "title" : "New",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "NMFC 1",
        "fieldType": "Text",
        "fieldValue": "NMFC 1"
    },
    {
        "title" : "PO#",
        "fieldType": "Text",
        "fieldValue": "PO#"
    },
    {
        "title" : "Personal Check",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Remit COD to Address",
        "fieldType": "Text",
        "fieldValue": "Remit COD to Address"
    },
    {
        "title" : "Remit COD to City",
        "fieldfieldType": "Text",
        "fieldValue": "Remit COD to City"
    },
    {
        "title" : "Remit COD to Country",
        "fieldType": "Text",
        "fieldValue": "Remit COD to Country"
    },
    {
        "title" : "Remit COD to Name",
        "fieldType": "Text",
        "fieldValue": "Remit COD to Name"
    },
    {
        "title" : "Remit COD to Phone #",
        "fieldType": "Text",
        "fieldValue": "Remit COD to Phone #"
    },
    {
        "title" : "Consignee ZIP/Postal Code",
        "fieldType": "Text",
        "fieldValue": "Consignee ZIP/Postal Code"
    },
    {
        "title" : "Remit COD to State",
        "fieldfieldType": "Text",
        "fieldValue": "Remit COD to State"
    },
    {
        "title" : "Remit COD to ZIP/Postal Code",
        "fieldType": "Text",
        "fieldValue": "Remit COD to ZIP/Postal Code"
    },
    {
        "title" : "Shipper",
        "fieldType": "Text",
        "fieldValue": "Indy Imagin"
    },
    {
        "title" : "Shipper #",
        "fieldType": "Text",
        "fieldValue": "12345675"
    },
    {
        "title" : "Shipper # 2",
        "fieldType": "Text",
        "fieldValue": "1236546332"
    },
    {
        "title" : "Shipper Address 1",
        "fieldfieldType": "Text",
        "fieldValue": "123 blank st"
    },
    {
        "title" : "Shipper Area Code",
        "fieldType": "Text",
        "fieldValue": "317"
    },
    {
        "title" : "Shipper Attn",
        "fieldType": "Text",
        "fieldValue": "Shipping Department"
    },
    {
        "title" : "Shipper BOL #",
        "fieldType": "Text",
        "fieldValue": "987634532"
    },
    {
        "title" : "Shipper City",
        "fieldType": "Text",
        "fieldValue": "Austin"
    },
    {
        "title" : "Shipper Country",
        "fieldType": "Text",
        "fieldValue": "United States"
    },
    {
        "title" : "Shipper FXF ACCT #",
        "fieldType": "Text",
        "fieldValue": "9878890679758"
    },
    {
        "title" : "Shipper Inside PU",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Shipper Liftgate",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Shipper Ltd Access",
        "fieldfieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Shipper Phone #",
        "fieldType": "Text",
        "fieldValue": "Shipper Phone #"
    },
    {
        "title" : "Shipper State/Prov",
        "fieldType": "Text",
        "fieldValue": "Shipper State/Prov"
    },
    {
        "title" : "Shipper ZIP/Postal Code",
        "fieldType": "Text",
        "fieldValue": "Shipper ZIP/Postal Code"
    },
    {
        "title" : "Special instructions",
        "fieldType": "Text",
        "fieldValue": "Special instructions"
    },
    {
        "title" : "Used",
        "fieldType": "button",
        "fieldValue": false
    },
    {
        "title" : "Weight 1",
        "fieldType": "Text",
        "fieldValue": "Weight 1"
    },
    {
        "title" : "per",
        "fieldType": "Text",
        "fieldValue": "per"
    }
];

var FDFData = pdfFiller.convFieldJson2FDF( fieldJson );

pdfFiller.fillFormWithFlatten( sourcePDF, destinationPDF, FDFData, shouldFlatten, function(err){
  console.log("IN FUNCTION")
  if(err){
    console.log("Error")
  }
  else {
    console.log("Successful")
  }
});
