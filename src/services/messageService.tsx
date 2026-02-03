import { post } from '../rest/rest';

// 1. Define an interface for your message structure
export interface MailMessage {
    to: string;
    subject: string;
    body: string;
}

// 2. Use a standard constant (ensure your env variable is typed)
const API_SERVER = import.meta.env.VITE_REACT_APP_API_SERVER ?? '';

/**
 * Message Service
 * Refactored to a functional export for React 19 compatibility
 */
export const messageService = {
    sendMail: async (message: MailMessage): Promise<any> => {
        const url = `${API_SERVER}/mail/send`;
        return post(url, message);
    }
};