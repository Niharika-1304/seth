import { useState, useRef, useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello. How can I assist you with operational clarity or systems design today?", side: 'ai' }
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const processAIResponse = (query) => {
    const q = query.toLowerCase();
    let response = "I specialize in Culinary Provision Group's services, assessment process, and systems design. For detailed inquiries, I recommend our Consultation Request form.";
    
    if (q.includes('service') || q.includes('what do you do')) {
      response = "We focus on three core areas: Systems Advisory (operational modeling), Workforce Development (training systems), and Implementation (systems rollout).";
    } else if (q.includes('assessment') || q.includes('start')) {
      response = "All engagements begin with a structured assessment to identify structural gaps and inefficiencies first. It is the foundation of our work.";
    } else if (q.includes('price') || q.includes('cost')) {
      response = "We do not provide predefined pricing. Our advisory is structured around the unique structural needs of your business, starting with an assessment.";
    } else if (q.includes('training')) {
      response = "Training is integrated as a system component, not a standalone service. We build internal capability through structured training systems.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, side: 'ai' }]);
    }, 600);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setMessages(prev => [...prev, { text: input.trim(), side: 'user' }]);
      processAIResponse(input.trim());
      setInput("");
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-primary text-white flex items-center justify-center cursor-pointer shadow-2xl z-50 transition-all hover:scale-105 active:scale-95 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span className="font-bold tracking-widest text-xs uppercase">AI</span>
      </button>

      <div className={`fixed bottom-8 right-8 w-[350px] bg-white border border-black/10 shadow-3xl z-50 flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}>
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <span className="font-headline tracking-widest text-sm uppercase">CPG Assistant</span>
          <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 opacity-70 hover:opacity-100" /></button>
        </div>
        
        <div ref={chatBodyRef} className="h-[300px] overflow-y-auto p-4 flex flex-col gap-4">
          {messages.map((m, i) => (
            <div key={i} className={`p-4 text-xs leading-relaxed max-w-[85%] ${m.side === 'ai' ? 'bg-background self-start rounded-r-lg' : 'bg-primary text-white self-end rounded-l-lg'}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-black/5">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleSubmit}
            placeholder="Ask about services or engagement..."
            className="w-full text-xs outline-none border-b border-black/10 pb-2 focus:border-primary transition-all"
          />
        </div>
      </div>
    </>
  );
};

export default AIChat;
