export const contractAddress = "0x1488d135D338A0f065b4EE35397Cfc025870B181";

export const abi = [
  {
    inputs: [],
    name: "Charity__AlreadyEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "Charity__CharityBalanceEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "Charity__CharityClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "Charity__InputAnAmountGreaterThanZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxAmountToDonate",
        type: "uint256",
      },
    ],
    name: "Charity__MoreThanRequired",
    type: "error",
  },
  {
    inputs: [],
    name: "Charity__NotEndedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "Charity__YouAreNotTheOwnerOfThisCharity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountNeeded",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_descriptionCid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fileCid",
        type: "string",
      },
    ],
    name: "createFundMe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_charityId",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_charityId",
        type: "uint256",
      },
    ],
    name: "endFundMe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getAddressCharities",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountNeeded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountGotten",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawalStatus",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "charityState",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "descriptionCid",
            type: "string",
          },
          {
            internalType: "string",
            name: "fileCid",
            type: "string",
          },
        ],
        internalType: "struct Charity.Charities[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCharities",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountNeeded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountGotten",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawalStatus",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "charityState",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "descriptionCid",
            type: "string",
          },
          {
            internalType: "string",
            name: "fileCid",
            type: "string",
          },
        ],
        internalType: "struct Charity.Charities[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllDonations",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountDonated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
        ],
        internalType: "struct Charity.Donations[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getClosedCharities",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountNeeded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountGotten",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawalStatus",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "charityState",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "descriptionCid",
            type: "string",
          },
          {
            internalType: "string",
            name: "fileCid",
            type: "string",
          },
        ],
        internalType: "struct Charity.Charities[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_charityId",
        type: "uint256",
      },
    ],
    name: "getDonationsByCharity",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountDonated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
        ],
        internalType: "struct Charity.Donations[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contributor",
        type: "address",
      },
    ],
    name: "getMyDonations",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contributor",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountDonated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
        ],
        internalType: "struct Charity.Donations[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOpenCharities",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountNeeded",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountGotten",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawalStatus",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "charityState",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "charityId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "descriptionCid",
            type: "string",
          },
          {
            internalType: "string",
            name: "fileCid",
            type: "string",
          },
        ],
        internalType: "struct Charity.Charities[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_charityId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
