export type FermentationStatus = 'Fermenting' | 'Bulk Ageing' | 'Bottle Ageing'
export type DetailsItem = {
  id: number
  name: string
  status: FermentationStatus
  ingredients: Array<string>
  startDate: Date
  history: Array<DetailsHistory>
  notes: string
}

export type DetailsHistory = {
  id: string
  status: FermentationStatus
  startDate: Date
  endDate: Date | null
  notes: string
}
