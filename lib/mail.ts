export type RequestMessage = {
  name: string;
  organization: string;
  contact: string;
  message: string;
};

/**
 * Точка подключения почты.
 * Замените тело функции на SMTP, API почтового сервиса или очередь,
 * не меняя форму вызова из route handler.
 */
export async function deliverRequest(payload: RequestMessage): Promise<void> {
  console.info(
    "[metelitsa:request]",
    JSON.stringify({
      ...payload,
      receivedAt: new Date().toISOString(),
    }),
  );
}
