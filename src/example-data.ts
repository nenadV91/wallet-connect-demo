export const domain = {
  name: 'Gnosis Protocol',
  version: 'v2',
  chainId: '1',
  verifyingContract: '0x9008d19f58aabd9ed0d60971565aa8510560ab41',
}

export const types = {
  Order: [
    { name: 'sellToken', type: 'address' },
    { name: 'buyToken', type: 'address' },
    { name: 'receiver', type: 'address' },
    { name: 'sellAmount', type: 'uint256' },
    { name: 'buyAmount', type: 'uint256' },
    { name: 'validTo', type: 'uint32' },
    { name: 'appData', type: 'bytes32' },
    { name: 'feeAmount', type: 'uint256' },
    { name: 'kind', type: 'string' },
    { name: 'partiallyFillable', type: 'bool' },
    { name: 'sellTokenBalance', type: 'string' },
    { name: 'buyTokenBalance', type: 'string' },
  ],
}

export const data = {
  sellToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  buyToken: '0x111111111117dc0aa78b770fa6a738034120c302',
  receiver: '0x598a3112db37491e2ff13874744848b6587de751',
  sellAmount: '54883417920448456',
  buyAmount: '104433369008430377969',
  validTo: '1647218646',
  appData: '0xb87622cac089bf4125a906eb1622325fb825909fd002532af0545c447f6a3ab8',
  feeAmount: '3086419753086420',
  kind: 'sell',
  partiallyFillable: false,
  sellTokenBalance: 'erc20',
  buyTokenBalance: 'erc20',
}
