const SVGMap: Record<string, string> = {
  Fermenting: 'F',
  'Bulk Ageing': 'A',
  'Bottle Ageing': 'B'
}
export default function GridItem({
  name,
  status,
  clickEvent
}: {
  name: string
  status: string
  clickEvent: () => void
}) {
  return (
    <button
      onClick={() => clickEvent()}
      className="relative flex min-h-[100px] w-full flex-col items-center justify-center rounded-md border bg-soft-cream transition-all hover:bg-honey-gold"
    >
      <div>{name}</div>
      <div className="absolute right-2 top-1">{SVGMap[status] || '-'}</div>
    </button>
  )
}
