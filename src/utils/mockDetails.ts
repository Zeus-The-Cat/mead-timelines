import { DetailsItem } from 'types/details'

export const MockDetailsList: Array<DetailsItem> = [
  {
    id: 0,
    name: 'NameA',
    status: 'Fermenting',
    ingredients: ['Honey', 'Apples'],
    startDate: new Date('02-02-2024'),
    history: [
      {
        id: '0A',
        status: 'Fermenting',
        startDate: new Date('02-02-2024'),
        endDate: null,
        notes: ''
      }
    ],
    notes: 'Did not provide yeast time to bloom'
  },
  {
    id: 1,
    name: 'NameB',
    status: 'Bulk Ageing',
    ingredients: ['Honey', 'Raspberry'],
    startDate: new Date('01-02-2024'),
    history: [
      {
        id: 'A',
        status: 'Fermenting',
        startDate: new Date('01-15-2023'),
        endDate: new Date('01-15-2024'),
        notes: ''
      },
      {
        id: 'B',
        status: 'Bulk Ageing',
        startDate: new Date('01-15-2024'),
        endDate: null,
        notes: ''
      }
    ],
    notes: 'Added extra nutrients'
  }
]
