export const data = [
  {
    "repline_versionId": "TestVersion1",
    "status": "Loaded",
    "transactionStage": "HeaderValidation",
    "updatedBy": "TestUser",
    "updatedTime": "2019-04-08T23:31:23.563+0000",
    "repLoanStatusDetails": [
      {
        "statusDetailsId": 1,
        "statusDesc": "Header validation completed",
        "updatedBy": "Testuser1",
        "updatedTime": "2019-04-08T23:32:36.600+0000"
      },
      {
        "statusDetailsId": 3,
        "statusDesc": "Header validation completed 4",
        "updatedBy": "Test user 4",
        "updatedTime": "2019-04-04T00:55:03.330+0000"
      },
      {
        "statusDetailsId": 2,
        "statusDesc": "Header validation completed 3",
        "updatedBy": "Test user 3",
        "updatedTime": "2019-04-04T00:55:03.330+0000"
      }
    ],
    "auditID": 1
  },
    {
        "repline_versionId": "TestVersion1",
        "status": "InProgress",
        "transactionStage": "HeaderValidation",
        "updatedBy": "TestUser",
        "updatedTime": "2019-04-08T23:31:23.563+0000",
        "repLoanStatusDetails": [
            {
                "statusDetailsId": 1,
                "statusDesc": "Header validation completed",
                "updatedBy": "Testuser1",
                "updatedTime": "2019-04-08T23:32:36.600+0000"
            },
            {
                "statusDetailsId": 3,
                "statusDesc": "Header validation completed 4",
                "updatedBy": "Test user 4",
                "updatedTime": "2019-04-04T00:55:03.330+0000"
            },
            {
                "statusDetailsId": 2,
                "statusDesc": "Header validation completed 3",
                "updatedBy": "Test user 3",
                "updatedTime": "2019-04-04T00:55:03.330+0000"
            }
        ],
        "auditID": 1
    }
];


export const ProgressData = [
  {
    "validate": "File Format check" ,
    "status": "completed"
  },
  {
    "validate": "Staging Load" ,
    "status": "completed"

  },
  {
    "validate": "Data Quality check" ,
    "status": "completed"
  },
  {
    "validate": "Table Load" ,
    "status": "progressLine"
  },
  {
    "validate": "Bulk Test" ,
    "status": "disable"
  },
  {
    "validate": "Complete" ,
    "status": "disable"
  }
]

