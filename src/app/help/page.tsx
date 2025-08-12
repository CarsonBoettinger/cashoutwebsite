import { Metadata } from 'next'
import { Search, Book, MessageCircle, Users, Shield, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - CashOut',
  description: 'Find answers to common questions and get help with using CashOut for your recovery journey.',
}

export default function Help() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Smartphone,
      questions: [
        {
          q: 'How do I create my first tracking goal?',
          a: 'Navigate to the "Goals" section in your dashboard and click "Add New Goal". Choose your addiction type, set your quit date, and customize your tracking preferences.'
        },
        {
          q: 'What should I do on my first day?',
          a: 'Start by setting up your profile, adding your primary goal, and exploring the community features. Take time to read through our getting started guide.'
        },
        {
          q: 'How do I reset my counter if I relapse?',
          a: 'Go to your goal settings and select "Reset Counter". Remember, relapses are part of recovery - be kind to yourself and start again.'
        }
      ]
    },
    {
      title: 'Tracking & Progress',
      icon: Book,
      questions: [
        {
          q: 'How accurate is the progress tracking?',
          a: 'Your progress is tracked based on the information you provide. The app calculates clean days, milestones, and savings automatically from your start date.'
        },
        {
          q: 'Can I track multiple addictions?',
          a: 'Yes! You can create separate goals for different substances or behaviors. Each will have its own counter and progress tracking.'
        },
        {
          q: 'What if I forget to check in?',
          a: 'The app continues tracking automatically. You can enable notifications to remind you to check in daily and maintain your streak.'
        }
      ]
    },
    {
      title: 'Community & Support',
      icon: Users,
      questions: [
        {
          q: 'Is the community safe and moderated?',
          a: 'Yes, our community is actively moderated 24/7. We have strict guidelines against harmful content and maintain a supportive environment.'
        },
        {
          q: 'Can I share my progress anonymously?',
          a: 'Absolutely. You can choose to use a username instead of your real name and control what information you share publicly.'
        },
        {
          q: 'How do I find a support group?',
          a: 'Visit the "Community" section to find local and online support groups. You can filter by location, addiction type, and meeting times.'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      questions: [
        {
          q: 'Is my data secure?',
          a: 'Yes, we use industry-standard encryption and security measures. Your personal data is never shared without your explicit consent.'
        },
        {
          q: 'Can I delete my account?',
          a: 'Yes, you can delete your account at any time from the settings menu. This will permanently remove all your data from our servers.'
        },
        {
          q: 'Who can see my progress?',
          a: 'Only you can see your detailed progress unless you choose to share specific milestones with the community or your support network.'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and get the support you need for your recovery journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat Support</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Chat
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Guide</h3>
            <p className="text-gray-600 mb-4">Complete guide to using CashOut</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Read Guide
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h3>
            <p className="text-gray-600 mb-4">Connect with others in recovery</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Join Forum
            </button>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-3">Recovery Resources</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• <a href="#" className="hover:underline">12-Step Program Guide</a></li>
                <li>• <a href="#" className="hover:underline">Meditation & Mindfulness</a></li>
                <li>• <a href="#" className="hover:underline">Relapse Prevention Strategies</a></li>
                <li>• <a href="#" className="hover:underline">Building Support Networks</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-3">Crisis Support</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• National Suicide Prevention Lifeline: 988</li>
                <li>• Crisis Text Line: Text HOME to 741741</li>
                <li>• SAMHSA National Helpline: 1-800-662-4357</li>
                <li>• CashOut Crisis Line: 1-800-CASHOUT</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  )
}