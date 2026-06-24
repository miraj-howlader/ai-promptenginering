import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export const PLAN_PRICE_ID = {
    'user-plus':"price_1TlrkHH2mTCz2cfCDuli9VG1",
    'user-premium':"price_1TlrkHH2mTCz2cfCDuli9VG1",
    'creator-pro':'price_1TlqFdH2mTCz2cfC5M8i4DQy',
    'creator-elite':'price_1TlrNAH2mTCz2cfCLrNb9zJp'
}