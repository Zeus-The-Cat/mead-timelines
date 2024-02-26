import TimelineRow from './Row'

type TimelineProps = {
  todo: string
}
export default function Timeline({ todo }: TimelineProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <TimelineRow />
      <TimelineRow />
      <TimelineRow />
    </div>
  )
}
