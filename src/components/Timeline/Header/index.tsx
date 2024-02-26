import { DetailsHistory } from 'types/details'

export default function TimelineHeader({
  history
}: {
  history: DetailsHistory[]
}) {
  if (history.length === 1) {
    return <div className="col-span-3">Fermenting</div>
  }
  if (history.length === 2) {
    return (
      <>
        <div className="col-span-2">Fermenting</div>
        <div className="col-span-1">Bulk Ageing</div>
      </>
    )
  }
  return (
    <>
      <div>Fermenting</div>
      <div>Bulk Ageing</div>
      <div>Bottle Ageing</div>
    </>
  )
}
