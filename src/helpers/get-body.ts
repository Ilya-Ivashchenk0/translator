export const getBody = (modelUri: string, message: string, lang: string) => {
  return {
    modelUri: modelUri,
    completionOptions: {
      stream: false,
      temperature: 0.6,
      maxTokens: '2000'
    },
    messages: [
      {
        role: 'system',
        text: 'Представь результат в форме объекта JSON. В нем ты должен описать название новости, ключевые мета теги и основное тело новости. Верни только обьект связаный с заданием. Нужны только данные без вводных фраз и объяснений. Не используй разметку Markdown!'
      },
      {
        role: 'user',
        text: message
      }
    ]
  }
}
