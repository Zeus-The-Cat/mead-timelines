import { useParams } from 'react-router-dom'
import { MockData } from '../Grid/Item/Mock-Data'

export default function Details() {
  const { detailsId } = useParams()
  if (detailsId === undefined) {
    return <div>Missing Id</div>
  }
  const details = MockData.find((val) => val.id === +detailsId)
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
