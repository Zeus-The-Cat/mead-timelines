import GridFilter from './Filter'
import GridItem from './Item'
import { MockData } from './Item/Mock-Data'

export default function Grid() {
  const ClickEvent = (id: number) => {
    console.log(id)
  }
  return (
    <>
      <GridFilter />
      <div className="grid grid-cols-6 gap-2">
        {MockData.map((each) => {
          return (
            <GridItem
              key={each.id}
              name={each.name}
              status={each.status}
              clickEvent={() => ClickEvent(each.id)}
            ></GridItem>
          )
        })}
      </div>
    </>
  )
}
