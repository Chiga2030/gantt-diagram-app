import * as styles from './GanttDiagram.module.css'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import RcGantt from 'rc-gantt'
import { GanttLocale, } from 'rc-gantt/dist/types/Gantt'

import { data as mockData, } from './data'
import { dependencies as mockDependencies, } from './dependencies'

dayjs.locale(ru)


const ruRU: GanttLocale = {
  day: 'День',
  dayUnit: 'д',
  firstHalf: 'Первая половина',
  halfYear: 'Полугодие',
  majorFormat: {
    day: 'YYYY, MMMM',
    halfYear: 'YYYY',
    month: 'YYYY',
    quarter: 'YYYY',
    week: 'YYYY, MMMM',
  },
  minorFormat: {
    day: 'D',
    halfYear: 'YYYY-',
    month: 'MMMM',
    quarter: '[Q]Q',
    week: 'wo [неделя]',
  },
  month: 'Месяц',
  quarter: 'Квартал',
  secondHalf: 'Вторая половина',
  week: 'Неделя',
  today: 'Сегодня',
}

export const GanttDiagram = (): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <RcGantt
        data={ mockData }
        dependencies={ mockDependencies }
        locale={ ruRU }
        columns={ [ {
          name: 'name',
          label: 'Задача',
          // maxWidth: 2000,
          // minWidth: 10,
        }, ] }
        onUpdate={ async () => {
          return true
        } }
        showBackToday={ true }
        disabled={ true }
        rowHeight={ 60 }
        // tableCollapseAble={ true }
        unit={ 'halfYear' }
      />
    </div>
  )
}
