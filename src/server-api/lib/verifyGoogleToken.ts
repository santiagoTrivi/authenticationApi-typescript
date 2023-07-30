import { OAuth2Client } from "google-auth-library";
import { config } from "../config";



const GOOGLEKEY = config.GOOGLE;
const client = new OAuth2Client();


export const verifyGoogleToken = async(token: string = '') => {

  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLEKEY.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  
  // If request specified a G Suite domain:
  // const domain = payload['hd'];

  return payload;
}
