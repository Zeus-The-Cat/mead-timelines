import { DetailsHistory } from 'types/details'
import { DateMDY } from 'utils/date'
const ColSpan = (num: number) => {
  if (num > 2) {
    return 'col-span-1'
  } else if (num === 2) {
    return 'col-span-2'
  }
  return 'col-span-3'
}
const Background = (detail: DetailsHistory) => {
  switch (detail.status) {
    case 'Fermenting':
      return 'bg-deep-amber'
    case 'Bulk Ageing':
      return 'bg-forest-green'
    case 'Bottle Ageing':
      return 'bg-honey-gold'
    default:
      return 'bg-royal-purple'
  }
}
export default function TimelineRow({
  history,
  colSpan
}: {
  history: DetailsHistory
  colSpan: number
}) {
  const columnSpan = ColSpan(colSpan)
  const background = Background(history)
  const classes = `flex items-center gap-1 ${background} ${columnSpan}`
  return <div className={classes}>{DateMDY(history.startDate)}</div>
}
