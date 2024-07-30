import { Message } from '@/src/shared/ui/message'
import { chatBodyProps } from './types'
import { SendForm } from '@/features/send-form'
import { FormProvider, useForm } from 'react-hook-form'
import { sandInputs } from '@/src/helpers/validation/forms-options/send-form/send-form'

export const ChatBody: React.FC<chatBodyProps> = ({ chat, isOpenBar }) => {
  const myId = '1'
  const methods = useForm({
    defaultValues: Object.fromEntries(
      sandInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <section
      className={`${isOpenBar ? 'min-w-[90%]' : 'w-3/4'} max-h-screen p-4 flex-1`}
    >
      <div className="bg-secondary-bg-color w-full h-full rounded-2xl flex flex-col pt-4">
        <ul className="flex-1 mx-1 px-4 pt-4 pb-20 overflow-y-auto overflow-x-hidden scrollbar flex flex-col gap-8">
          {chat.messages &&
            chat.messages.map((message, index: number) => (
              <li key={index} className="">
                <Message
                  align={myId === message.ownerId ? 'left' : 'right'}
                  message={message}
                />
              </li>
            ))}
        </ul>
        <div className="h-1/4 mx-4 mb-4 rounded bg-primary-bg-color">
          <FormProvider {...methods}>
            <SendForm
              inputs={sandInputs}
              onSubmit={methods.handleSubmit(onSubmit)}
            />
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
