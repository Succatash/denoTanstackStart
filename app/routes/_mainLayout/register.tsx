import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_mainLayout/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_mainLayout/register"!</div>
}
