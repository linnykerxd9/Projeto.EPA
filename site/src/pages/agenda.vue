<template>
  <q-page padding>
    <!-- content -->
  <div style="max-width: 800px; width: 100%; padding-left: 20px; padding-top: 30px; padding-bottom: 30px; margin: auto;">
    <q-calendar
      v-model="selectedDate"
      view="month"
      locale="pt-br"
      :day-height="100"
    >
      <template #day="{ timestamp }">
        <template v-for="(event, index) in getEvents(timestamp.date)">
          <q-badge
            :key="index"
            style="width: 100%; cursor: pointer; height: 16px; max-height: 16px"
            :class="badgeClasses(event, 'day')"
            :style="badgeStyles(event, 'day')"
          >
            <q-icon v-if="event.icon" :name="event.icon" class="q-mr-xs"></q-icon><span class="ellipsis">{{ event.title }}</span>
          </q-badge>
        </template>
      </template>
    </q-calendar>
  </div>
  </q-page>
</template>

<script>
  // normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)
  import QCalendar from '@quasar/quasar-ui-qcalendar' // ui is aliased from '@quasar/quasar-ui-qcalendar'
    const CURRENT_DAY = new Date()

function getCurrentDay (day) {
  const newDay = new Date(CURRENT_DAY)
  newDay.setDate(day)
  const tm = QCalendar.parseDate(newDay)
  return tm.date
}

const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/

function textToRgb (color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string')
  }

  const m = reRGBA.exec(color)
  if (m) {
    const rgb = {
      r: Math.min(255, parseInt(m[2], 10)),
      g: Math.min(255, parseInt(m[3], 10)),
      b: Math.min(255, parseInt(m[4], 10))
    }
    if (m[1]) {
      rgb.a = Math.min(1, parseFloat(m[5]))
    }
    return rgb
  }
  return hexToRgb(color)
}

function hexToRgb (hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  const num = parseInt(hex, 16)

  return hex.length > 6
    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }
    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }
}

function luminosity (color) {
  if (typeof color !== 'string' && (!color || color.r === undefined)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const
    rgb = typeof color === 'string' ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

export default {
  data () {
    return {
      selectedDate: '',
      events: [
        {
          title: 'Aula Português',
          details: 'Aluno: Ana, Conjugação de verbos',
          date: getCurrentDay(1),
          time: '10:00',
          duration: 60,
          bgcolor: 'orange'
        },
        {
          title: 'Aula Matemática',
          details: 'Aluno: Francisco, multiplicação e divisão',
          date: getCurrentDay(4),
          time: '10:00',
          duration: 120,
          bgcolor: 'green'
        },
        {
          title: 'Aula Português',
          details: 'Aluna: Carmem',
          date: getCurrentDay(8),
          time: '10:00',
          duration: 120,
          bgcolor: 'orange'
        },
        {
          title: 'Revisão Matemática',
          details: 'Período de provas aluno: Thiago',
          date: getCurrentDay(8),
          time: '14:00',
          duration: 90,
          bgcolor: 'red'
        },
        {
          title: 'Aula ciências',
          details: 'Mundo Animal e Vegetal aluna: Sara',
          date: getCurrentDay(21),
          time: '16:00',
          duration: 90,
          bgcolor: 'blue'
        },
        {
          title: 'Aula ciências',
          details: 'Corpo Humano aluno: João',
          date: getCurrentDay(10),
          time: '16:00',
          duration: 90,
          bgcolor: 'blue'
        },
        {
          title: 'Aula Português',
          details: 'Concordância Verbal aluno: Antônio',
          date: getCurrentDay(15),
          time: '08:00',
          duration: 60,
          bgcolor: 'orange'
        },
        {
          title: 'Aula Matemática',
          details: 'Trigonometria aluno: Francisco',
          date: getCurrentDay(15),
          time: '13:00',
          duration: 120,
          bgcolor: 'green'
        },
        {
          title: 'Revisão de Português e Matemática',
          details: 'Aluna: Carmem',
          date: getCurrentDay(16),
          time: '13:00',
          duration: 60,
          bgcolor: 'red',
          icon: 'rowing',
          days: 2
        },
        {
          title: 'Recesso de São João',
          details: 'Descanso e estudos',
          date: getCurrentDay(22),
          bgcolor: 'purple',
          icon: 'fas fa-plane',
          days: 7
        }
      ]
    }
  },
  methods: {
    isCssColor (color) {
      return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
    },

    badgeClasses (event, type) {
      const cssColor = this.isCssColor(event.bgcolor)
      const isHeader = type === 'header'
      return {
        [`text-white bg-${event.bgcolor}`]: !cssColor,
        'full-width': !isHeader && (!event.side || event.side === 'full'),
        'left-side': !isHeader && event.side === 'left',
        'right-side': !isHeader && event.side === 'right'
      }
    },

    badgeStyles (event, type, timeStartPos, timeDurationHeight) {
      const s = {}
      if (this.isCssColor(event.bgcolor)) {
        s['background-color'] = event.bgcolor
        s.color = luminosity(event.bgcolor) > 0.5 ? 'black' : 'white'
      }
      if (timeStartPos) {
        s.top = timeStartPos(event.time) + 'px'
      }
      if (timeDurationHeight) {
        s.height = timeDurationHeight(event.duration) + 'px'
      }
      s['align-items'] = 'flex-start'
      return s
    },

    getEvents (dt) {
      const currentDate = QCalendar.parseTimestamp(dt)
      const events = []
      for (let i = 0; i < this.events.length; ++i) {
        let added = false
        if (this.events[i].date === dt) {
          if (this.events[i].time) {
            if (events.length > 0) {
              // check for overlapping times
              const startTime = QCalendar.parseTimestamp(this.events[i].date + ' ' + this.events[i].time)
              const endTime = QCalendar.addToDate(startTime, { minute: this.events[i].duration })
              for (let j = 0; j < events.length; ++j) {
                if (events[j].time) {
                  const startTime2 = QCalendar.parseTimestamp(events[j].date + ' ' + events[j].time)
                  const endTime2 = QCalendar.addToDate(startTime2, { minute: events[j].duration })
                  if (QCalendar.isBetweenDates(startTime, startTime2, endTime2) || QCalendar.isBetweenDates(endTime, startTime2, endTime2)) {
                    events[j].side = 'left'
                    this.events[i].side = 'right'
                    events.push(this.events[i])
                    added = true
                    break
                  }
                }
              }
            }
          }
          if (!added) {
            this.events[i].side = undefined
            events.push(this.events[i])
          }
        }
        else if (this.events[i].days) {
          // check for overlapping dates
          const startDate = QCalendar.parseTimestamp(this.events[i].date)
          const endDate = QCalendar.addToDate(startDate, { day: this.events[i].days })
          if (QCalendar.isBetweenDates(currentDate, startDate, endDate)) {
            events.push(this.events[i])
            added = true
          }
        }
      }
      return events
    }
  }
}

</script>
