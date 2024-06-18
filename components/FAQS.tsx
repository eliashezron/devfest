'use client'
import {useState } from 'react'

const FAQs = () => {
  const faqItems = [
    {
      question: 'What is BlockBunch?',
      answer:
        `BlockBunch is a community of developers and educators who strive to
        promote the widespread adoption of blockchain technologies in Uganda.
        By demystifying complex blockchain concepts, the team actively
        participates in and organizes educational events to further their
        cause. BlockBunch remains committed to fostering the integration of
        blockchain technology within the Ugandan ecosystem, paving the way for
        innovative and transformative solutions.`,
    },
    {
      question: 'How do I apply to be a hacker?',
      answer:
        'To apply as a hacker, you need to visit our Apply page and fill out the form with your personal information, experience, and interests.',
    },
    {
      question: 'How do I become a sponsor?',
      answer:
        "If you're interested in becoming a sponsor, Please fill out the sponsorship form and we shall reachout to you.",
    },
    {
      question: 'How can I become a speaker?',
      answer:
        'To become a speaker, you need to fill out the Speaker Application form on our website with your personal and professional information, topics of interest, and speaking experience.',
    },
    {
      question: 'How can I get in touch with BlockBunch?',
      answer: 'You can contact us through our social media channels.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6"
      id="FAQs"
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">FAQs</h2>
        <div className="flex flex-col space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-6 bg-white rounded-lg shadow sm:px-6 md:px-8"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
