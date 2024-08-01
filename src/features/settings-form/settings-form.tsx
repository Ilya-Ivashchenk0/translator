import cn from 'classnames'
import { Controller, useFormContext } from 'react-hook-form'
import { settingsFromProps } from './types'
import { Button } from '@/src/shared/ui/button'
import { Input } from '@/src/shared/ui/input'
import { AvatarInput } from '@/src/shared/ui/avatar-input'
import Link from 'next/link'
import { LanguageSelector } from '@/src/shared/ui/language-selection'

export const SettingsForm: React.FC<settingsFromProps> = ({
  inputs,
  dict,
  currentLocale,
  setCurrentLocale,
  editMode,
  setEditMode,
  avatar,
  setAvatar,
  onSubmit,
  className
}) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext()
  const allFields = watch()
  const checkValuesAllFields = Object.values(allFields).every(field => !!field)

  return (
    <form
      className="bg-secondary-bg-color h-full rounded p-6"
      onSubmit={onSubmit}
    >
      <div className="max-w-96 flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4 relative">
          {inputs &&
            inputs.map(input => (
              <Controller
                key={input.name}
                name={input.name}
                control={control}
                rules={input.options}
                render={({ field }) => {
                  if (input.type === 'file') {
                    return (
                      <AvatarInput
                        avatar={avatar}
                        drop={false}
                        {...field}
                        label={input.label}
                        name={input.name}
                        handleUploadedFile={e => {
                          const files = e.target.files
                          if (files && files[0]) {
                            const file = files[0]
                            const url = URL.createObjectURL(file)
                            setAvatar(url)
                            return () => URL.revokeObjectURL(url)
                          }
                        }}
                      />
                    )
                  }
                  return (
                    <Input
                      {...field}
                      onChange={
                        input.handleChange ? input.handleChange : undefined
                      }
                      label={input.label}
                      type={input.type}
                      required
                    />
                  )
                }}
              />
            ))}
          <LanguageSelector
            mode="settings"
            currentLocale={currentLocale}
            setCurrentLocale={setCurrentLocale}
            text={dict?.home.switcher}
          />
        </div>
        <div className="flex flex-col items-start gap-12">
          <div className="w-full flex flex-col gap-12">
            <Button
              type="button"
              onClick={() => {
                editMode ? setEditMode(false) : setEditMode(true)
              }}
            >
              {editMode ? dict.settings.edit.false : dict.settings.edit.true}
            </Button>
            <Button
              type="submit"
              disabled={Object.keys(errors).length > 0 || !checkValuesAllFields}
            >
              {dict.settings.submit}
            </Button>
          </div>
          <div className="w-full flex justify-center">
            <hr className="w-[95%] border-primary-text-color" />
          </div>
          <Link
            className="text-secondary-text-color hover:text-primary-text-color underline"
            href={dict.settings.resetLink.url}
          >
            {dict.settings.resetLink.text}
          </Link>
        </div>
      </div>
    </form>
  )
}
