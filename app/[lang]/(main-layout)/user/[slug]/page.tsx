import { UserSlugPage } from '@/src/pages-components/user-slug-page'

const UserSlug = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="min-h-screen">
      <UserSlugPage />
    </main>
  )
}

export default UserSlug
