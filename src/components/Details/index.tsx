import { MockData } from '../Grid/Item/Mock-Data'

export default function Details({ id }: { id: number }) {
  const details = MockData.find((val) => val.id === id)
  if (!details) {
    return <div>Missing Id</div>
  }

  return (
    <div className="flex flex-col gap-1">
      <div>
        Dump Details: {details.name} {details.status}
      </div>
      <div>Timelines</div>
    </div>
  )
}
