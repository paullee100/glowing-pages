export const dynamicParams = true
export async function generateStaticParams() {
  return [{ id: 1 }, { id: 2 }, { id: 3 }]
}

export { GET, POST } from "@/lib/auth"