"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

interface ChatWidgetProps {
  mode?: 'floating' | 'inline' | 'iframe';
}

// Inline helper to parse bold and links in strings
function parseTextInline(text: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = [];
  let index = 0;
  
  // Match bold text (**text**) and markdown links ([label](url))
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  let match;
  let keyIdx = 0;
  
  while ((match = regex.exec(text)) !== null) {
    const matchStr = match[0];
    const matchIdx = match.index;
    
    // Add text before match
    if (matchIdx > index) {
      tokens.push(text.substring(index, matchIdx));
    }
    
    if (matchStr.startsWith('**') && matchStr.endsWith('**')) {
      const boldText = matchStr.substring(2, matchStr.length - 2);
      tokens.push(
        <strong key={`b_${keyIdx++}`} className="font-semibold text-white">
          {boldText}
        </strong>
      );
    } else if (matchStr.startsWith('[') && matchStr.includes('](')) {
      const closeBracket = matchStr.indexOf('](');
      const label = matchStr.substring(1, closeBracket);
      const url = matchStr.substring(closeBracket + 2, matchStr.length - 1);
      
      tokens.push(
        <a 
          key={`l_${keyIdx++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-agency-gold hover:text-agency-gold-light hover:underline font-semibold"
        >
          {label}
        </a>
      );
    }
    
    index = regex.lastIndex;
  }
  
  if (index < text.length) {
    tokens.push(text.substring(index));
  }
  
  return tokens.length > 0 ? tokens : [text];
}

// Parse structured lists and step guidelines into interactive dashboard UI elements
function renderMessageContent(content: string) {
  // 1. Detect if it contains a 5-step or numbered pipeline
  const stepRegex = /^\s*(\d+)\.\s+\*\*(.*?)\*\*:\s*(.*)$/gm;
  stepRegex.lastIndex = 0;
  const matches = [...content.matchAll(stepRegex)];
  
  if (matches.length > 0) {
    const firstMatchLine = content.match(/^\s*\d+\.\s+\*\*/m);
    const firstMatchIndex = firstMatchLine ? content.indexOf(firstMatchLine[0]) : -1;
    const introText = firstMatchIndex > 0 ? content.substring(0, firstMatchIndex).trim() : "";
    
    const listLines = content.match(/^\s*\d+\.\s+\*\*.*$/gm) || [];
    const lastLine = listLines[listLines.length - 1];
    const lastMatchIndex = lastLine ? content.lastIndexOf(lastLine) + lastLine.length : -1;
    const outroText = (lastMatchIndex > -1 && lastMatchIndex < content.length) ? content.substring(lastMatchIndex).trim() : "";
    
    return (
      <div className="space-y-3 font-sans">
        {introText && <p className="text-[13px] text-agency-text-secondary leading-relaxed whitespace-pre-line">{parseTextInline(introText)}</p>}
        
        {/* Stepper Timeline Container */}
        <div className="relative pl-6 border-l border-white/10 space-y-4 my-3 ml-2">
          {matches.map((match, idx) => {
            const stepNum = match[1];
            const title = match[2];
            const desc = match[3];
            
            return (
              <div key={idx} className="relative group">
                {/* Timeline node bubble */}
                <div className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-agency-dark border border-agency-gold/40 flex items-center justify-center text-[10px] font-bold text-agency-gold shadow-gold-glow group-hover:bg-agency-gold group-hover:text-agency-dark group-hover:border-agency-gold transition-all duration-300">
                  {stepNum}
                </div>
                
                {/* Step Content */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 hover:border-agency-gold/20 hover:bg-white/[0.04] transition-all duration-300">
                  <h4 className="text-[13px] font-bold text-agency-gold mb-1 tracking-wide">
                    {title}
                  </h4>
                  <p className="text-[12px] text-agency-text-secondary leading-relaxed">
                    {parseTextInline(desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {outroText && <p className="text-[13px] text-agency-text-secondary leading-relaxed mt-2 whitespace-pre-line">{parseTextInline(outroText)}</p>}
      </div>
    );
  }
  
  // 2. Fallback: Parse normal bullet lists or key-value contacts
  const bulletRegex = /^\s*[-*]\s+\*\*(.*?)\*\*:\s*(.*)$/gm;
  bulletRegex.lastIndex = 0;
  const bulletMatches = [...content.matchAll(bulletRegex)];
  
  if (bulletMatches.length > 0) {
    const firstMatchLine = content.match(/^\s*[-*]\s+\*\*/m);
    const firstMatchIndex = firstMatchLine ? content.indexOf(firstMatchLine[0]) : -1;
    const introText = firstMatchIndex > 0 ? content.substring(0, firstMatchIndex).trim() : "";
    
    const listLines = content.match(/^\s*[-*]\s+\*\*.*$/gm) || [];
    const lastLine = listLines[listLines.length - 1];
    const lastMatchIndex = lastLine ? content.lastIndexOf(lastLine) + lastLine.length : -1;
    const outroText = (lastMatchIndex > -1 && lastMatchIndex < content.length) ? content.substring(lastMatchIndex).trim() : "";
    
    return (
      <div className="space-y-3 font-sans">
        {introText && <p className="text-[13px] text-agency-text-secondary leading-relaxed whitespace-pre-line">{parseTextInline(introText)}</p>}
        
        {/* Contact/Key-Value Card */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 my-2 space-y-2.5">
          {bulletMatches.map((match, idx) => {
            const label = match[1];
            const val = match[2];
            
            return (
              <div key={idx} className="flex justify-between items-start text-[12.5px] border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                <span className="text-agency-text-secondary font-medium mr-4">{label}</span>
                <span className="text-agency-text-primary text-right font-semibold text-white">{parseTextInline(val)}</span>
              </div>
            );
          })}
        </div>
        
        {outroText && <p className="text-[13px] text-agency-text-secondary leading-relaxed whitespace-pre-line">{parseTextInline(outroText)}</p>}
      </div>
    );
  }

  // 3. Simple text parsing (markdown bold and links)
  return (
    <div className="whitespace-pre-line leading-relaxed font-sans text-agency-text-primary">
      {parseTextInline(content)}
    </div>
  );
}

export default function ChatWidget({ mode = 'floating' }: ChatWidgetProps) {
  const isEmbed = mode === 'inline' || mode === 'iframe';
  const [isOpen, setIsOpen] = useState(isEmbed);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [urlMetadata, setUrlMetadata] = useState<Record<string, any>>({});

  const chatEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Note: Switched to NEXT_PUBLIC_API_URL instead of VITE_API_URL for Next.js
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  // Update isOpen state if the mode changes dynamically to an embed mode
  useEffect(() => {
    if (isEmbed) {
      setIsOpen(true);
    }
  }, [mode, isEmbed]);

  // 1. Initialize session and restore messages
  useEffect(() => {
    // Parse URL query parameters
    const params = new URLSearchParams(window.location.search);
    const meta: Record<string, string> = {};
    ['email', 'name', 'company', 'phone', 'industry'].forEach(field => {
      const val = params.get(field);
      if (val) {
        meta[field] = val;
      }
    });
    setUrlMetadata(meta);

    // Check or generate session ID
    let currentSessionId = localStorage.getItem('pragyan_chat_session_id');
    if (!currentSessionId) {
      currentSessionId = `sess_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('pragyan_chat_session_id', currentSessionId);
    }
    setSessionId(currentSessionId);

    // Session and messages initialization is handled via localStorage history restoration.
    // FastAPI restores history from Supabase automatically when SSE starts.

    // Initialize with standard greeting
    const welcomeMsg: Message = {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am Pragyan's AI Brand Consultant. We work with founders to build brands grounded in strategy, clarity, and long-term intent.\n\nAre you looking to scale your brand, design a new visual identity, launch a high-conversion digital product, or simply learn more about our process?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Attempt to pull saved messages from local storage for instant loading
    const savedLocalMsgs = localStorage.getItem(`pragyan_chat_history_${currentSessionId}`);
    if (savedLocalMsgs) {
      setMessages(JSON.parse(savedLocalMsgs));
    } else {
      setMessages([welcomeMsg]);
    }
  }, []);

  // Sync scroll on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when opening widget
  useEffect(() => {
    if (isOpen && !isEmbed) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isEmbed]);

  const saveMessagesToLocal = (updatedMsgs: Message[]) => {
    if (sessionId) {
      localStorage.setItem(`pragyan_chat_history_${sessionId}`, JSON.stringify(updatedMsgs));
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    // Add user message to UI
    const userMsg: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    saveMessagesToLocal(updatedMessages);

    setIsTyping(true);

    // Create a placeholder message for assistant streaming output
    const assistantMsgId = `assistant_${Date.now()}`;
    const newAssistantMsg: Message = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newAssistantMsg]);

    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          session_id: sessionId,
          metadata: urlMetadata
        })
      });

      if (!response.body) {
        throw new Error("No readable stream response body returned from chat endpoint");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullAssistantText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        let boundary = buffer.indexOf('\n\n');
        
        while (boundary !== -1) {
          const packet = buffer.substring(0, boundary).trim();
          buffer = buffer.substring(boundary + 2);
          boundary = buffer.indexOf('\n\n');
          
          if (packet.startsWith('data: ')) {
            try {
              const jsonStr = packet.substring(6).trim();
              const parsed = JSON.parse(jsonStr);
              
              const token = parsed.token || "";
              
              if (token) {
                fullAssistantText += token;
                setMessages(prev => prev.map(m => 
                  m.id === assistantMsgId ? { ...m, content: fullAssistantText } : m
                ));
              }
            } catch (err) {
              console.error("Error parsing packet JSON:", err);
            }
          }
        }
      }

      // Finish streaming, save final message state to local storage
      const finalMessages = [...updatedMessages, { ...newAssistantMsg, content: fullAssistantText }];
      setMessages(finalMessages);
      saveMessagesToLocal(finalMessages);

    } catch (err) {
      console.error("SSE Streaming Error:", err);
      setMessages(prev => prev.map(m => 
        m.id === assistantMsgId ? { ...m, content: "I apologize, but I encountered a network connection issue. Please make sure the backend server is running, or contact our team directly at connect@mypragyan.com." } : m
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    if (window.confirm("Are you sure you want to restart this strategic consultation session?")) {
      const newSessId = `sess_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('pragyan_chat_session_id', newSessId);
      setSessionId(newSessId);
      localStorage.removeItem(`pragyan_chat_history_${sessionId}`);
      
      const welcomeMsg: Message = {
        id: 'welcome',
        role: 'assistant',
        content: "Hello! I am Pragyan's AI Brand Consultant. We work with founders to build brands grounded in strategy, clarity, and long-term intent.\n\nAre you looking to scale your brand, design a new visual identity, launch a high-conversion digital product, or simply learn more about our process?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([welcomeMsg]);
    }
  };

  const renderChatWindow = () => {
    return (
      <>
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-agency-card to-agency-dark border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 bg-agency-dark/50 shadow-gold-glow">
              <img src="/assets/img/Title-icons.webp" alt="Pragyan Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h3 className="font-semibold text-agency-text-primary text-sm flex items-center space-x-1.5 font-sans">
                <span>Pragyan Brand AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </h3>
              <p className="text-[11px] text-agency-gold flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-agency-gold" />
                Senior Branding Consultant
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleResetChat}
              className="text-[10px] uppercase tracking-wider text-agency-text-secondary hover:text-agency-gold border border-white/10 hover:border-agency-gold/30 rounded-md px-1.5 py-0.5 transition-all"
              title="Restart Chat"
            >
              Reset
            </button>
            {!isEmbed && (
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-agency-text-secondary hover:text-agency-text-primary hover:bg-white/5 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Messages Container */}
        <div 
          ref={messageContainerRef}
          className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4 bg-agency-dark/40"
        >
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col max-w-[85%] ${
                msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div 
                className={`p-3.5 rounded-2xl text-[13.5px] leading-relaxed shadow-sm font-sans ${
                  msg.role === 'user' 
                    ? 'bg-agency-gold text-agency-dark rounded-tr-none font-medium whitespace-pre-line' 
                    : 'bg-agency-card border border-white/5 text-agency-text-primary rounded-tl-none'
                }`}
              >
                {msg.role === 'user' ? msg.content : renderMessageContent(msg.content)}
              </div>
              <span className="text-[9px] text-agency-text-muted mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex flex-col items-start max-w-[85%]">
              <div className="px-4 py-3 bg-agency-card border border-white/5 rounded-2xl rounded-tl-none flex space-x-1.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-agency-gold/60 dot-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-agency-gold/60 dot-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-agency-gold/60 dot-bounce"></div>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Input Panel */}
        <form 
          onSubmit={handleSendMessage}
          className="p-3 bg-agency-card border-t border-white/10 flex items-center space-x-2"
        >
          <input 
            ref={inputRef}
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message or discuss a project..."
            className="flex-1 bg-agency-dark/80 text-agency-text-primary border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-agency-gold/50 placeholder-agency-text-muted transition-all"
          />
          <button 
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="p-2.5 rounded-xl bg-agency-gold disabled:bg-agency-card border border-agency-gold disabled:border-white/10 text-agency-dark disabled:text-agency-text-muted font-medium transition-all hover:bg-agency-gold-light shadow-gold-glow disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </>
    );
  };

  if (mode === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        {/* 1. Chat Widget Window */}
        {isOpen && (
          <div className="w-[380px] sm:w-[420px] h-[600px] sm:h-[650px] mb-4 flex flex-col rounded-2xl glassmorphism shadow-premium border border-white/10 overflow-hidden animate-slide-up bg-agency-dark">
            {renderChatWindow()}
          </div>
        )}

        {/* 2. Floating Action Button Bubble */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center md:space-x-3.5 bg-agency-gold hover:bg-agency-gold-light text-agency-dark p-4 md:px-5 md:py-4 rounded-full shadow-premium shadow-gold-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6 animate-pulse-slow" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-agency-dark"></span>
            </div>
            <span className="hidden md:block text-sm font-semibold tracking-wide font-sans pr-1">
              Consult with Pragyan
            </span>
          </button>
        )}
      </div>
    );
  }

  if (mode === 'iframe') {
    return (
      <div className="w-full h-full flex flex-col bg-[#0f0f11] overflow-hidden">
        {renderChatWindow()}
      </div>
    );
  }

  // Default: 'inline'
  return (
    <div className="w-full max-w-2xl h-[600px] flex flex-col rounded-2xl glassmorphism shadow-premium border border-white/10 overflow-hidden bg-agency-dark">
      {renderChatWindow()}
    </div>
  );
}
