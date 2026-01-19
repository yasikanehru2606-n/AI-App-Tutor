
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  BrainCircuit, 
  Clock, 
  Globe, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Send,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { getTutorResponse } from './services/gemini';

// --- Header Component ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Lumina<span className="text-blue-600">AI</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#demo" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Try Demo</a>
          <div className="h-6 w-px bg-slate-200"></div>
          <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Log In</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200">
            Sign Up Free
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#features" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#demo" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
          <hr className="border-slate-100" />
          <button className="text-left font-medium text-slate-900">Log In</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">Sign Up Free</button>
        </div>
      )}
    </header>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Next-Gen Learning Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900">
            Master Any Subject with Your <span className="gradient-text">AI Tutor.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
            Personalized, interactive tutoring that adapts to your learning style. Available 24/7 to help you ace your exams and master new skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-xl shadow-blue-200">
              Start Learning Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Watch Demo
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              ))}
            </div>
            <p><span className="font-bold text-slate-900">10k+</span> students already learning</p>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/education/800/600" 
              className="rounded-2xl w-full h-auto object-cover" 
              alt="AI Tutoring Interface" 
            />
            {/* Floating UI Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Concept Mastered</p>
                <p className="text-sm font-bold text-slate-900">Quantum Physics Basics</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-pulse">
              <Clock className="w-5 h-5" />
              <p className="text-sm font-bold">Live AI Feedback</p>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Hyper-Personalized",
      desc: "Lumina adapts to your pace, strengths, and weaknesses to create a custom curriculum just for you."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "Available 24/7",
      desc: "Whether it's 3 AM or 3 PM, your tutor is always awake and ready to help you with homework."
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Any Subject, Any Level",
      desc: "From 5th grade math to university-level thermodynamics, Lumina covers it all."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      title: "Interactive Solving",
      desc: "Don't just get the answer. Walk through problems step-by-step with real-time feedback."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Why Students Love Lumina</h3>
          <p className="text-lg text-slate-600">Traditional tutoring is expensive and limited. We've built an AI that's more accessible, more patient, and smarter.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="mb-6 p-4 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors inline-block">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Interactive Demo Section ---
const Demo = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    const result = await getTutorResponse(question);
    setResponse(result || "No response received.");
    setLoading(false);
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

          <div className="lg:w-1/2 space-y-6 relative z-10">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Interactive Demo</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Test drive your <br/><span className="text-blue-400">new study buddy.</span></h3>
            <p className="text-slate-400 text-lg">Ask anything! From algebra to philosophy, see how Lumina explains complex topics simply.</p>
            <ul className="space-y-3">
              {["Explain Newton's Laws", "What is photosynthesis?", "Simplify 2x + 5 = 15"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full relative z-10">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-inner min-h-[400px] flex flex-col">
              <div className="flex-1 space-y-6 overflow-y-auto mb-6 max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-slate-600">
                {response ? (
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-white text-sm">
                      {question}
                    </div>
                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tl-none mr-auto max-w-[80%] text-white text-sm flex gap-3">
                      <div className="bg-white/20 p-1 rounded-lg h-fit">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <p>{response}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500 italic text-center">
                    "Hey! I'm Lumina. Type a question below to see how I help."
                  </div>
                )}
              </div>

              <form onSubmit={handleAsk} className="relative">
                <input 
                  type="text" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-6 pr-14 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button 
                  disabled={loading}
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white px-4 rounded-xl transition-all"
                >
                  {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Social Proof Section ---
const Testimonials = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Sarah J.", role: "Computer Science Student", text: "Lumina explained recursive functions better than my professor did. It stayed with me until I finally got it!" },
            { name: "Marcus T.", role: "High School Junior", text: "I went from a C- to an A in Chemistry. Having someone to ask 'dumb' questions 24/7 changed everything." },
            { name: "Elena R.", role: "Medical Student", text: "The medical terminology flashcards and explanations are top-tier. It's like having a private tutor for free." }
          ].map((t, i) => (
            <div key={i} className="space-y-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xl text-slate-700 font-medium italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/testi${i}/100/100`} className="w-12 h-12 rounded-full" alt={t.name} />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BrainCircuit className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Lumina<span className="text-blue-600">AI</span></span>
            </div>
            <p className="text-slate-600 max-w-sm">Making world-class education accessible to every student on the planet through the power of Artificial Intelligence.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><Globe className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><BookOpen className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><Star className="w-5 h-5" /></div>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold text-slate-900">Platform</h6>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Curriculum</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600">Universities</a></li>
              <li><a href="#" className="hover:text-blue-600">Success Stories</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold text-slate-900">Support</h6>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2024 Lumina AI Tutoring Inc. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">Cookie Settings</a>
            <a href="#" className="hover:text-slate-900">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Demo />
        
        {/* Final CTA */}
        <section className="py-24 bg-blue-600 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-8 border-white rounded-full"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to accelerate your learning?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of students who have already transformed their grades and confidence with Lumina.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">Get Started Free</button>
              <button className="bg-blue-700/50 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all border border-blue-400">View Pricing</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
