import {
  Transfer as TransferEvent,
  Token as TokenContract
} from '../generated/Token/Token'
import { ipfs, json } from '@graphprotocol/graph-ts'

import {
Token, User
} from '../generated/schema'

const ipfshash = "QmRdNB3Q6Q5gVWnduBmxNZb4p9zKFmM3Qx3tohBb8B2KRK"

export function handleTransfer(event: TransferEvent): void {
  /* load the token from the existing Graph Node */
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    /* if the token does not yet exist, create it */
    token = new Token(event.params.tokenId.toString());
    token.tokenID = event.params.tokenId;
    token.updatedAtTimestamp = event.block.timestamp;
 
    /* combine the ipfs hash and the token ID to fetch the token metadata from IPFS */
    let metadata = ipfs.cat(ipfshash + '/' + token.tokenID.toString());
    if (metadata) {
      const value = json.fromBytes(metadata).toObject()
      if (value) {
        /* using the metatadata from IPFS, update the token object with the values  */
        const image = 'ipfs.io/ipfs/' + (value.get('image')!).toString().split('ipfs://')[1]
        const name = value.get('name')
        const description = value.get('description')
        const attributes = value.get('attributes')!.toArray()

        if (name && image && description) {
          token.name = name.toString()
          token.image = image.toString()
          token.ipfsURI = 'ipfs.io/ipfs/' + ipfshash + '/' + token.tokenID.toString()
        }

        if (attributes.length > 0) {
          token.background = attributes[0].toObject().get('value')!.toString()
          token.head = attributes[1].toObject().get('value')!.toString()
          token.skin = attributes[2].toObject().get('value')!.toString()
          token.mouth = attributes[3].toObject().get('value')!.toString()
          token.eyes = attributes[4].toObject().get('value')!.toString()
          token.outfit = attributes[5].toObject().get('value')!.toString()
        }

        // const frog = value.get('frog')
        // if (coven) {
        //   let covenData = coven.toObject()
        //   const type = covenData.get('type')
        //   if (type) {
        //     token.type = type.toString()
        //   }

        //   const birthChart = covenData.get('birthChart')
        //   if (birthChart) {
        //     const birthChartData = birthChart.toObject()
        //     const sun = birthChartData.get('sun')
        //     const moon = birthChartData.get('moon')
        //     const rising = birthChartData.get('rising')
        //     if (sun && moon && rising) {
        //       token.sun = sun.toString()
        //       token.moon = moon.toString()
        //       token.rising = rising.toString()
        //     }
        //   }
        // }
          
      }
    }
  }

  /* set or update the owner field and save the token to the Graph Node */
  token.owner = event.params.to.toHexString();
  token.save();
  
  /* if the user does not yet exist, create them */
  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
 }