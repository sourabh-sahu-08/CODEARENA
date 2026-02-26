import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Card } from '../ui';
import { useState, useEffect, useRef } from 'react'; // Added missing imports for useState, useEffect, useRef

interface Message {
    role: 'user' | 'bot';
    content: string;
}

export default function AIChatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: 'Hello! I am your CODEARENA AI assistant. How can I help you today? I can answer questions about rules, deadlines, or provide basic coding hints.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Mock bot response
        setTimeout(() => {
            let botContent = "That's a great question! For specific rules, please check the Guidelines section. If you need a coding hint, try breaking the problem into smaller sub-tasks.";

            if (input.toLowerCase().includes('deadline')) {
                botContent = "The registration deadline is March 15th. The first coding round starts on March 20th.";
            } else if (input.toLowerCase().includes('team')) {
                botContent = "You can form teams of 2-4 members. Use the 'Team & Matches' tab to find compatible partners!";
            }

            setMessages(prev => [...prev, { role: 'bot', content: botContent }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="h-[calc(100vh-160px)] max-w-4xl mx-auto flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Bot className="text-primary" size={28} />
                    AI Assistant
                </h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                    <Sparkles size={12} />
                    GPT-4 POWERED
                </div>
            </div>

            <Card className="flex-1 flex flex-col p-0 overflow-hidden bg-secondary/30">
                {/* Messages */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
                >
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-foreground-custom/10 text-primary'
                                    }`}>
                                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-tr-none'
                                    : 'bg-foreground-custom/5 border border-border-custom text-foreground-custom/80 rounded-tl-none'
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex gap-3 items-center ml-11">
                                <div className="flex gap-1">
                                    {[0, 1, 2].map(d => (
                                        <motion.div
                                            key={d}
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }}
                                            className="w-1.5 h-1.5 bg-primary rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="text-[10px] text-foreground-custom/30 font-bold uppercase tracking-widest">AI is thinking</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-background-custom/50 border-t border-border-custom">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask anything about the hackathon..."
                            className="w-full bg-foreground-custom/5 border border-border-custom rounded-xl py-4 pl-6 pr-16 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        />
                        <button
                            onClick={handleSend}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white hover:opacity-90 active:scale-90 transition-all"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    <div className="mt-3 flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
                        {['Registration deadline?', 'How to form a team?', 'IDE languages?', 'Prize pool?'].map(q => (
                            <button
                                key={q}
                                onClick={() => setInput(q)}
                                className="whitespace-nowrap px-3 py-1 rounded-full bg-foreground-custom/5 border border-border-custom text-[10px] text-foreground-custom/40 hover:text-foreground-custom hover:border-foreground-custom/20 transition-all font-medium"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}
