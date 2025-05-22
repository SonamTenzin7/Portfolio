import { ChatGroq } from "@langchain/groq";
import { type Message } from 'ai';
// Remove unused import
import portfolioContext from '../../utils/portfolioContext';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages: Message[] };
    // We're not using lastMessageContent anymore since we're passing the full conversation
    
    // Create a system message with portfolio context
    const systemMessage = `
You are an AI assistant for a personal portfolio website. 
You have access to the following information about the portfolio owner:

${JSON.stringify(portfolioContext, null, 2)}

Use this information to answer questions about the portfolio owner's skills, experience, projects, education, and other relevant information.
Be helpful, professional, and concise in your responses.
If you're asked about something not in the provided context, you can politely mention that you don't have that specific information.
`;

    const llm = new ChatGroq({
      model: "llama3-8b-8192",
      apiKey: process.env.GROQ_API_KEY,
    });

    // Create a conversation with the system message and user messages
    const conversation = [
      { role: 'system', content: systemMessage },
      ...messages.map(msg => ({ 
        role: msg.role as 'user' | 'assistant' | 'system', 
        content: msg.content 
      }))
    ];

    // Invoke the model with the full conversation
    const result = await llm.invoke(conversation);

    // Return the result as JSON
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error)
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}