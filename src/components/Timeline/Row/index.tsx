import { DetailsHistory } from 'types/details'
import { DateMDY } from 'utils/date'

export default function TimelineRow({ history }: { history: DetailsHistory }) {
  return (
    <div className="flex items-center gap-1">
      {history.status} : {DateMDY(history.startDate)} :{' '}
      {history.endDate ? DateMDY(history.endDate) : '-'}
    </div>
  )
}
