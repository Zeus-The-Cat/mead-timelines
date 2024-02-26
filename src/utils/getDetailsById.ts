import { MockDetailsList } from './mockDetails'

export default function GetDetailsById(id: number) {
  const details = MockDetailsList.find((val) => val.id === id)
  return details
}
