export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[80vh]">
        
        {/* Chat Header */}
        <div className="bg-blue-900 text-white p-4">
          <h2 className="text-2xl font-bold">Jason Styles</h2>
          <p className="text-sm text-blue-200">Senior AI Technical Recruiter</p>
        </div>
        
        {/* Chat Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
          <div className="bg-white border p-4 rounded-lg rounded-tl-none self-start shadow-sm max-w-[85%]">
            <p className="text-gray-800">
              Hello! I'm Jason Styles. I'll be conducting your screening interview today for the open position. Are you ready to begin?
            </p>
          </div>
        </div>

        {/* User Input Area */}
        <div className="p-4 border-t bg-white flex gap-2">
          <input 
            type="text" 
            placeholder="Type your response here..." 
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-bold transition">
            Send
          </button>
        </div>

      </div>
      
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        &larr; Back to Home
      </a>
    </main>
  );
}
