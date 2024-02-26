import { useParams } from 'react-router-dom'
import Timeline from 'components/Timeline'
import GetDetailsById from 'utils/getDetailsById'
import { DateMDY } from 'utils/date'

export default function Details() {
  const { detailsId } = useParams()
  if (detailsId === undefined) {
    return <div>Missing Id</div>
  }
  const details = GetDetailsById(+detailsId)
  if (!details) {
    return <div>Missing Id</div>
  }

  return (
    <div className="flex flex-col gap-1 p-5">
      <div className="rounded-md bg-slate-200 p-2">
        Name: {details.name} Status:{details.status} Start Date:{' '}
        {DateMDY(details.startDate)}
      </div>
      <Timeline id={+detailsId}></Timeline>
    </div>
  )
}
