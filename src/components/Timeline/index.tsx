import GetDetailsById from 'utils/getDetailsById'
import TimelineRow from './Row'

export default function Timeline({ id }: { id: number }) {
  const details = GetDetailsById(id)
  if (!details) {
    return <div>Error</div>
  }
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-slate-200 p-2">
      {details.history.map((detail) => {
        return <TimelineRow key={detail.id} history={detail} />
      })}
    </div>
  )
}
