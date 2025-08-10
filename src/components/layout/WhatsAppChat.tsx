'use client';
import React, { useState, useEffect } from 'react';

const WhatsAppChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const whatsappNumber = "+923092161570";

  useEffect(() => {
    // Show welcome message after 2 seconds when page loads
    const timer = setTimeout(() => {
      setShowWelcomeMessage(true);
    }, 2000);

    // Hide welcome message after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsChatOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Welcome Message Bubble */}
      {showWelcomeMessage && !isChatOpen && (
        <div className="absolute bottom-16 right-0 bg-white text-[#011627] p-3 rounded-lg shadow-lg mb-4 w-64 animate-fade-in">
          <div className="relative">
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
            <p className="font-medium">Hi, How can I help you?</p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-all duration-300 focus:outline-none"
        aria-label="Chat with WhatsApp"
      >
        <svg 
          className="w-8 h-8 text-white"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-[#011627] border border-[#1E2D3D] rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-[#1E2D3D] p-3 bg-[#1C2B3A]">
            <div className="flex items-center">
              <svg 
                className="w-6 h-6 text-[#25D366] mr-2"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="text-white font-medium">WhatsApp Chat</span>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="absolute top-3 right-3 text-[#607B96] hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-3">
            <p className="text-[#607B96] text-sm mb-3">Send a message to <span className="text-[#43D9AD] font-mono">{whatsappNumber}</span></p>
            <div className="relative">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 bg-[#1C2B3A] border border-[#1E2D3D] rounded text-white text-sm mb-3 focus:outline-none focus:border-[#43D9AD] resize-none"
                rows={3}
                placeholder="Type your message here..."
              />
              <div className="absolute bottom-5 right-2 text-xs text-[#607B96]">
                {message.length > 0 ? `${message.length} characters` : ''}
              </div>
            </div>
            <button 
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className={`w-full py-2 flex items-center justify-center gap-2 ${message.trim() ? 'bg-[#43D9AD] hover:bg-[#3bc89d]' : 'bg-[#1C2B3A] cursor-not-allowed'} text-[#011627] font-medium rounded transition-colors`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;