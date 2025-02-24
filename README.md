## Design Choices and UI/UX Considerations

Used Shadcn for ui design and theming with black and white color theme. The black-and-white color scheme was chosen to make the website redable professional, timeless aesthetic.

## Component Structure and State Management Approach

The application is built with a modular component structure for scalability and maintainability:

ChatCard: Displays individual chat messages.
ChatInput: Captures and processes user input.
ChatOutput: Renders chat responses.
MessageBox: Serves as the container for the chat history.
For state management, we leverage React hooks (useState and useEffect) to handle dynamic updates efficiently. This approach was selected for its simplicity and effectiveness in managing the real-time nature of a chat application.

## Challenges

A key challenge was ensuring instant updates in the chat UI while maintaining performance. We tackled this by optimizing state updates to reduce unnecessary re-renders.

Potemtial Feature can be providing the option to select model to use that prompt.
