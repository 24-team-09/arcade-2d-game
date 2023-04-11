// custom hooks
import useProfile from './form-profile.logics'

// styles
import {
  Form,
  InputComponent,
  BtnSave,
  AvatarComponent,
  AvatarLabel,
} from './form-profile.styles'

export const FormProfile = () => {
  const {
    register,
    onSubmitHandler,
    handleSubmit,
    errors,
    isValid,
    user,
  } = useProfile()


  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <AvatarComponent {...register('avatar')} src={user?.avatar}/>
      <AvatarLabel color="#579945" fontSize="26px">
        {user?.login}
      </AvatarLabel>
      <InputComponent
        isError={!!errors.first_name}
        errorMessage={errors.first_name?.message}
        {...register('first_name')}
        placeholder="Имя"
      />
      <InputComponent
        isError={!!errors.second_name}
        errorMessage={errors.second_name?.message}
        {...register('second_name')}
        placeholder="Фамилия"
      />
      <InputComponent
        isError={!!errors.display_name}
        errorMessage={errors.display_name?.message}
        {...register('display_name')}
        placeholder="Ник"
      />
      <InputComponent
        isError={!!errors.login}
        errorMessage={errors.login?.message}
        {...register('login')}
        placeholder="Логин"
      />
      <InputComponent
        isError={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email')}
        placeholder="Email"
      />
      <InputComponent
        isError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register('phone')}
        placeholder="Телефон"
      />
      <BtnSave
        as="button"
        type="submit"
        color="#579945"
        variant="contained"
        disabled={!isValid}>
        Сохранить
      </BtnSave>
    </Form>
  )
}
