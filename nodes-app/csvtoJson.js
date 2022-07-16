const fs = require('fs')


//   var attrs = csv.splice(0,1);
  
//   var result = csv.map(function(row) {
//     var obj = {};
//     var rowData = row.split(',');
//     attrs[0].split(',').forEach(function(val, idx) {
//       obj = constructObj(val, obj, rowData[idx]);
//     });
//     return obj;
//   })
  
  
//   function constructObj(str, parentObj, data) {
//     if(str.split('/').length === 1) {
//       parentObj[str] = data;
//       return parentObj;
//     }
  
//     var curKey = str.split('/')[0];
//     if(!parentObj[curKey])
//       parentObj[curKey] = {};
//     parentObj[curKey] = constructObj(str.split('/').slice(1).join('/'), parentObj[curKey], data);
//     return parentObj;
//   }
  
//   console.log(result);


//   dataJSON = JSON.stringify(result)
// fs.writeFileSync('test.json',dataJSON)



// Reading the file using default
// fs npm package
// const fs = require("fs");
// var csv = [
//     "SubjectInformation/DOB,SubjectInformation/TIN,SubjectInformation/Check/,SubjectInformation/Email/Email,SubjectInformation/Suffix,SubjectInformation/TINTYPE,SubjectInformation/FirstName,SubjectInformation/IDUnknown,SubjectInformation/DOBUnknown/0,SubjectInformation/MiddleName,SubjectInformation/Occupation,SubjectInformation/TINUnknown/0,SubjectInformation/SuspectRole,SubjectInformation/AddressBlock/0/ZIP,SubjectInformation/AddressBlock/0/City,SubjectInformation/AddressBlock/0/State,SubjectInformation/AddressBlock/0/Address,SubjectInformation/AddressBlock/0/Country,SubjectInformation/AddressBlock/0/ZIPUnknown/0,SubjectInformation/AddressBlock/0/CityUnknown/0,SubjectInformation/AddressBlock/0/StateUnknown/0,SubjectInformation/AddressBlock/0/AddressUnknown/0,SubjectInformation/AddressBlock/0/CountryUnknown/0,SubjectInformation/WebsiteBlock/0/Website,SubjectInformation/AlternateName/0/AlternateName/0,SubjectInformation/Identification/0/IdentificationDocOther,SubjectInformation/Identification/0/IdentificationDocNumber,SubjectInformation/TelephoneBlock/0/TelephoneExt,SubjectInformation/TelephoneBlock/0/TelephoneNumber,SubjectInformation/LastNameUnknown/0,SubjectInformation/AffectedTINBlock/0/EIN,SubjectInformation/AffectedTINBlock/0/NonUS/0,SubjectInformation/AffectedTINBlock/0/AccountClosed/0,SubjectInformation/AffectedTINBlock/0/AccountNumber,SubjectInformation/FirstNameUnknown/0,SubjectInformation/RelationshipBlock/0/EUIN,SubjectInformation/RelationshipBlock/0/ActionDate,SubjectInformation/RelationshipBlock/0/RelationToInstitution/0,SubjectInformation/RelationshipBlock/0/OtherRelationshipSubject,SubjectInformation/LastNameOrNameOfEntity",
//     "02/22/1985,619349067,null,jessicarabbit2213@gmail.com,null,2,Jessica,1,,,,,3,94578,San Leandro,CA,485 Nabor Street,US,,,,,,,,,,,15105863976,,450117790,,1,304118164207,,450117790,,13,Fintech Customer,Smith"
//   ];
  
// csv = fs.readFileSync("CSV_file.csv")


 
// // Convert the data to String and
// // split it in an array
// var array = csv.toString().split("\r");
// console.log(array);
// // All the rows of the CSV will be
// // converted to JSON objects which
// // will be added to result in an array
// let result = [];
 
// // The array[0] contains all the
// // header columns so we store them
// // in headers array
// let headers = array[0].split(", ")
// console.log(headers);
// // console.log(array.length);
// // console.log(array[1]);
// // Since headers are separated, we
// // need to traverse remaining n-1 rows.
// for (let i = 1; i < array.length - 1; i++) {
//   let obj = {}
 
//   // Create an empty object to later add
//   // values of the current row to it
//   // Declare string str as current array
//   // value to change the delimiter and
//   // store the generated string in a new
//   // string s
//   let str = array[i]

//   let s = ''
 
//   // By Default, we get the comma separated
//   // values of a cell in quotes " " so we
//   // use flag to keep track of quotes and
//   // split the string accordingly
//   // If we encounter opening quote (")
//   // then we keep commas as it is otherwise
//   // we replace them with pipe |
//   // We keep adding the characters we
//   // traverse to a String s
//   let flag = 0
//   for (let ch of str) {
//     if (ch === '"' && flag === 0) {
//       flag = 1
//     }
//     else if (ch === '"' && flag == 1) flag = 0
//     if (ch === ', ' && flag === 0) ch = '|'
//     if (ch !== '"') s += ch
//   }
 
//   // Split the string using pipe delimiter |
//   // and store the values in a properties array
//   let properties = s.split("|")
//  console.log(properties);
//   // For each header, if the value contains
//   // multiple comma separated data, then we
//   // store it in the form of array otherwise
//   // directly the value is stored
//   for (let j in headers) {
//     if (properties[j].includes(", ")) {
//       obj[headers[j]] = properties[j]
//         .split(", ").map(item => item.trim())
//     }
//     else obj[headers[j]] = properties[j]
//   }
 
//   // Add the generated object to our
//   // result array
//   result.push(obj)
// }
 
// // Convert the resultant array to json and
// // generate the JSON output file.
// let json = JSON.stringify(result);
// fs.writeFileSync('output.json', json);

csv = fs.readFileSync("sample_sar.csv")
var array = csv.toString().split("\r\n");
// console.log(array);
// let records = [ 
//   '07/11/1998,301021226,georgegen5x@gmail.com,2,George,1,44135,CLEVELAND,OH,4365 W 146TH ST,US,14409155110,450117790,304157861390,450117790,13,Fintech Customer,Nance',
// ]

let output = array.map( record => {
	
	let arr = record.split(',')
	
	return {
        
 
      "DOB": arr[0],
      "TIN": arr[1],
      "Check": [
        null
      ],
      "Email": [
        {
          "Email": arr[2]
        }
      ],
      "Suffix": null,
      "TINTYPE": parseInt(arr[3]),
      "FirstName": arr[4],
      "IDUnknown": [
        parseInt(arr[5])
      ],
      "DOBUnknown": [
        null
      ],
      "MiddleName": null,
      "Occupation": null,
      "TINUnknown": [
        null
      ],
      "AddressBlock": [
        {
          "ZIP": arr[6],
          "City": arr[7],
          "State": arr[8],
          "Address": arr[9],
          "Country": arr[10],
          "ZIPUnknown": [
            null
          ],
          "CityUnknown": [
            null
          ],
          "StateUnknown": [
            null
          ],
          "AddressUnknown": [
            null
          ],
          "CountryUnknown": [
            null
          ]
        }
      ],
      "WebsiteBlock": [
        {
          "Website": null
        }
      ],
      "AlternateName": [
        {
          "AlternateName": null
        }
      ],
      "Identification": [
        {
          "IdentificationDocOther": null,
          "IdentificationDocNumber": null
        }
      ],
      "NoKnownAccount": [
        
      ],
      "TelephoneBlock": [
        {
          "TelephoneExt": null,
          "TelephoneNumber": arr[11],
        }
      ],
      "LastNameUnknown": [
        null
      ],
      "AffectedTINBlock": [
        {
          "EIN": arr[12],
          "NonUS": [
            null
          ],
          "AccountClosed": [
            1
          ],
          "AccountNumber": arr[13],
        }
      ],
      "FirstNameUnknown": [
        null
      ],
      "RelationshipBlock": [
        {
          "EUIN": arr[14],
          "ActionDate": null,
          "RelationToInstitution": [
            parseInt(arr[15]),
          ],
          "OtherRelationshipSubject": arr[16]
        }
      ],
      "LastNameOrNameOfEntity": arr[17],
  
}
		 
})

// console.log(output)

let json = JSON.stringify(output);
fs.writeFileSync('output_2.json', json);