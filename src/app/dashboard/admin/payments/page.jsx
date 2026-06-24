'use client'

import { useState } from 'react'

const PaymentPage = () => {
  const [activePlan, setActivePlan] = useState('creator')

  const creatorPlans = [
    {
      name: 'Free Creator',
      id: 'creator-free',
      pricing: 0,
      features: [
        'Upload up to 5 prompts',
        'Basic analytics',
        'Community exposure',
        'Standard support'
      ]
    },
    {
      name: 'Creator Pro',
      id: 'creator-pro',
      pricing: 9,
      mostPopular: true,
      features: [
        'Unlimited prompt uploads',
        'Advanced analytics',
        'Featured listings',
        'Priority approval',
        'Email support'
      ]
    },
    {
      name: 'Creator Elite',
      id: 'creator-elite',
      pricing: 19,
      features: [
        'Unlimited prompts',
        'Premium placement',
        'Sales insights',
        'Priority support',
        'Custom creator badge'
      ]
    }
  ]

  const userPlans = [
    {
      name: 'Free User',
      id: 'user-free',
      pricing: 0,
      features: [
        'Browse public prompts',
        'Save favorite prompts',
        'Basic search',
        'Community support'
      ]
    },
    {
      name: 'User Plus',
      id: 'user-plus',
      pricing: 5,
      mostPopular: true,
      features: [
        'Unlimited prompt access',
        'Premium prompts',
        'Advanced search',
        'Prompt collections',
        'Priority support'
      ]
    },
    {
      name: 'User Premium',
      id: 'user-premium',
      pricing: 12,
      features: [
        'All Plus features',
        'Exclusive prompt library',
        'Early access features',
        'Fast support',
        'Premium badge'
      ]
    }
  ]

  const pricingData =
    activePlan === 'creator' ? creatorPlans : userPlans

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

          * {
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>

      <div className="flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-neutral-900 mb-4">
          Choose Your Perfect Plan
        </h1>

        <p className="text-neutral-600 text-center mb-10 max-w-xl">
          Whether youre creating prompts or discovering premium AI content,
          choose a plan that helps you get the most out of the platform.
        </p>

        {/* Toggle */}
        <div className="relative p-1 bg-white border border-gray-200 rounded-full inline-flex items-center mb-16 w-72 shadow-sm">
          <div
            className={`absolute left-1 top-1 w-[calc(50%-4px)] h-[48px] rounded-full bg-gradient-to-r from-[#FF5804] to-[#FF8D28] transition-transform duration-300 ${
              activePlan === 'creator'
                ? 'translate-x-0'
                : 'translate-x-full'
            }`}
          />

          <button
            onClick={() => setActivePlan('creator')}
            className={`relative z-10 flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
              activePlan === 'creator'
                ? 'text-white'
                : 'text-gray-600'
            }`}
          >
            Creator Plan
          </button>

          <button
            onClick={() => setActivePlan('user')}
            className={`relative z-10 flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
              activePlan === 'user'
                ? 'text-white'
                : 'text-gray-600'
            }`}
          >
            User Plan
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full items-stretch">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={
                plan.mostPopular
                  ? 'bg-gradient-to-r from-[#FF861C] to-[#FFE0C7] rounded-3xl p-2 shadow-xl'
                  : ''
              }
            >
              {plan.mostPopular && (
                <p className="text-center text-orange-700 text-sm font-medium py-2">
                  ⭐ Most Popular
                </p>
              )}

              <div
                className={`bg-white rounded-3xl p-8 h-full ${
                  !plan.mostPopular
                    ? 'border border-neutral-200 hover:shadow-lg transition-all duration-300'
                    : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-neutral-800 mb-6">
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-bold text-neutral-900">
                    ${plan.pricing}
                  </span>
                  <span className="text-neutral-500 mb-1">
                    /month
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-700"
                    >
                      <span className="text-green-500 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <form
                  action="/api/checkout_sessions"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="plan_id"
                    value={plan.id}

                  />

                  <button
                    type="submit"
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.mostPopular
                        ? 'bg-gradient-to-r from-[#FF5804] to-[#FF8D28] text-white hover:opacity-90'
                        : 'border border-neutral-300 hover:bg-neutral-100'
                    }`}
                  >
                    {plan.pricing === 0
                      ? 'Get Started'
                      : 'Upgrade Now'}
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PaymentPage