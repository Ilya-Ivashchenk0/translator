const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      {children}
    </main>
  )
}

export default AuthLayout
