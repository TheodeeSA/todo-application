export const TestApi = () => {
  const backendApi = "localhost:3000";
  const response = fetch(`${backendApi}/api/trpc/todo.create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          post {
            id
            title
            content
          }
        }
      `,
    }),
  });
};
