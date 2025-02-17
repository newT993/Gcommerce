// import { buffer } from "micro";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-01-27.acacia",
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req: Request, res: Response) {
//   const buf = await buffer(req);
//   const sig = req.headers["stripe-signature"];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       buf.toString(),
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//   } catch (err) {
//     console.error(`Webhook signature verification failed.`, err);
//     return Response.json(`Webhook Error: ${err}`);
//   }

//   // Handle the event
//   switch (event.type) {
//     case "checkout.session.completed":
//       const session = event.data.object;
//       console.log("Payment was successful:", session);
//       break;
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   Response.json({ received: true });
// }
