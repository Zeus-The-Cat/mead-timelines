import GetDetailsById from 'utils/getDetailsById'
import TimelineRow from './Row'
import TimelineHeader from './Header'

export default function Timeline({ id }: { id: number }) {
  const details = GetDetailsById(id)
  if (!details) {
    return <div>Error</div>
  }
  return (
    <div className="grid w-full grid-cols-3 gap-y-1 rounded-md bg-slate-200 p-2">
      <TimelineHeader history={details.history} />
      {details.history.map((detail, index) => {
        return (
          <TimelineRow
            key={detail.id}
            history={detail}
            colSpan={HistoryLength(details.history.length, index)}
          />
        )
      })}
    </div>
  )
}
// We need this so that we can support 2-1 column sizing
const HistoryLength = (length: number, index: number) => {
  if (length === 2 && index === 1) {
    return 3
  }
  return length
}
