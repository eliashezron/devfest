import Image from "next/image";
import { Lightbulb, Users, Rocket, BookOpen } from "lucide-react";

export default function BlockBunch() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 px-6 md:px-12">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Block Bunch</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Powering the future of blockchain through innovation, education, and collaboration.
                </p>
                <div className="relative mt-10 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mx-auto">
                    <Image
                        src="/images/blockchain-illustration.jpg"
                        alt="Blockchain Illustration"
                        fill
                        className="object-cover opacity-90"
                    />
                </div>
            </div>

            {/* Mission */}
            <section className="max-w-5xl mx-auto mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-500" />
                    <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Block Bunch aims to revolutionize how people build and interact with blockchain-based systems.
                    We are committed to providing opportunities for learning, growth, and creation, fostering a vibrant
                    ecosystem that promotes openness, transparency, and decentralized thinking.
                </p>
            </section>

            {/* What We Offer */}
            <section className="bg-white rounded-2xl p-8 shadow-md max-w-5xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-green-500" />
                    What We Offer
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
                        <Users className="w-6 h-6 text-purple-600 mb-2" />
                        <h3 className="font-semibold text-gray-700">Community Building</h3>
                        <p className="text-sm text-gray-600">We connect developers, startups, and enthusiasts to collaborate and share ideas.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
                        <BookOpen className="w-6 h-6 text-indigo-600 mb-2" />
                        <h3 className="font-semibold text-gray-700">Education & Training</h3>
                        <p className="text-sm text-gray-600">Workshops, bootcamps, and courses to upskill future blockchain innovators.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
                        <Rocket className="w-6 h-6 text-pink-500 mb-2" />
                        <h3 className="font-semibold text-gray-700">Startup Incubation</h3>
                        <p className="text-sm text-gray-600">Support and resources to help blockchain ideas grow into sustainable ventures.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
                        <Lightbulb className="w-6 h-6 text-yellow-500 mb-2" />
                        <h3 className="font-semibold text-gray-700">Innovation Hub</h3>
                        <p className="text-sm text-gray-600">A space to experiment, test, and launch transformative blockchain projects.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Join the Movement?</h2>
                <p className="text-gray-600 mb-6">
                    Whether you're a developer, investor, or simply curious about blockchain, Block Bunch is your launchpad to the future.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                    Get Involved
                </button>
            </section>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-400 py-8">
                &copy; {new Date().getFullYear()} Block Bunch. All rights reserved.
            </footer>
        </div>
    );
}
