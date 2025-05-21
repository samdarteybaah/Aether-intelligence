// Utility to handle WebSocket errors and retries
export function createWebSocket(url: string, protocols?: string | string[]) {
  let socket: WebSocket | null = null; // Initialize as null to avoid usage before assignment
  let retryCount = 0;
  const maxRetries = 5;

  function connect() {
    socket = new WebSocket(url, protocols);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
      retryCount = 0; // Reset retry count on successful connection
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      if (retryCount < maxRetries) {
        console.warn(`WebSocket closed. Retrying in ${retryCount + 1} seconds...`);
        setTimeout(connect, (retryCount + 1) * 1000);
        retryCount++;
      } else {
        console.error("Max retries reached. WebSocket connection failed.");
      }
    };
  }

  connect();
  return socket; // Return the WebSocket instance
}

// Utility to handle IndexedDB errors
export function safeIndexedDBOperation<T>(operation: () => Promise<T>): Promise<T | null> {
  return operation().catch((error) => {
    console.error("IndexedDB operation failed:", error);
    return null; // Return null as a fallback
  });
}