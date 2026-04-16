import React from 'react';
import { LucideIcon } from 'lucide-react'; // Assume it's imported for icons

const Navbar = () => (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
            <h1 className="text-white text-lg font-bold">Mental Bau</h1>
            <ul className="flex space-x-4">
                <li><a className="text-gray-300 hover:text-white" href="#hero">Home</a></li>
                <li><a className="text-gray-300 hover:text-white" href="#problem">Problem</a></li>
                <li><a className="text-gray-300 hover:text-white" href="#solution">Solution</a></li>
                <li><a className="text-gray-300 hover:text-white" href="#offer">Offer</a></li>
                <li><a className="text-gray-300 hover:text-white" href="#footer">Contact</a></li>
            </ul>
        </div>
    </nav>
);

const Hero = () => (
    <section id="hero" className="bg-hero-pattern h-96 flex items-center justify-center">
        <h2 className="text-4xl text-white">Welcome to Mental Bau</h2>
    </section>
);

const Problem = () => (
    <section id="problem" className="py-10">
        <div className="container mx-auto">
            <h3 className="text-2xl">The Problem</h3>
            <p>Your content about the problem faced goes here.</p>
        </div>
    </section>
);

const Solution = () => (
    <section id="solution" className="py-10 bg-gray-100">
        <div className="container mx-auto">
            <h3 className="text-2xl">Our Solution</h3>
            <p>Your content about the solution offered goes here.</p>
        </div>
    </section>
);

const Authority = () => (
    <section id="authority" className="py-10">
        <div className="container mx-auto">
            <h3 className="text-2xl">Our Authority</h3>
            <p>Your content about authority goes here.</p>
        </div>
    </section>
);

const OfferForm = () => (
    <section id="offer" className="py-10 bg-gray-100">
        <div className="container mx-auto">
            <h3 className="text-2xl">Get Your Offer</h3>
            <form>
                <input type="text" placeholder="Your Name" className="border p-2 w-full" />
                <button className="bg-blue-500 text-white p-2 mt-2">Submit</button>
            </form>
        </div>
    </section>
);

const Footer = () => (
    <footer id="footer" className="bg-gray-800 p-4">
        <div className="container mx-auto text-white">
            <p>© 2026 Mental Bau. All rights reserved.</p>
        </div>
    </footer>
);

const LandingPage: React.FC = () => (
    <div>
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Authority />
        <OfferForm />
        <Footer />
    </div>
);

export default LandingPage;