import { Gantt, } from 'rc-gantt'


export const dependencies: Gantt.Dependence[] = [
  {
    from: '2',
    to: '5',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '6',
    type: 'finish_start',
  },
  {
    from: '2',
    to: '7',
    type: 'finish_start',
  },
  {
    from: '5',
    to: '8',
    type: 'finish_start',
  },
  {
    from: '8',
    to: '9',
    type: 'finish_start',
  },
  {
    from: '5',
    to: '9',
    type: 'finish_start',
  },
  {
    from: '6',
    to: '9',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '9',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '11',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '12',
    type: 'start_start',
    color: 'blue',
  },
  {
    from: '7',
    to: '13',
    type: 'start_start',
    color: 'blue',
  },
  {
    from: '7',
    to: '14',
    type: 'start_start',
    color: 'blue',
  },
  {
    from: '7',
    to: '15',
    type: 'start_start',
    color: 'blue',
  },
  {
    from: '7',
    to: '16',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '17',
    type: 'finish_start',
  },
  {
    from: '7',
    to: '18',
    type: 'finish_start',
  },
  {
    from: '11',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '12',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '13',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '14',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '15',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '16',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '17',
    to: '19',
    type: 'finish_start',
  },
  {
    from: '18',
    to: '19',
    type: 'finish_start',
  },
]
