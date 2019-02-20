import { scan, filter, pluck } from 'rxjs/operators'

const filterPrevious = callback => source =>
  source.pipe(
    scan(
      (data, value) => ({
        value,
        toFilter: callback(data.value, value),
      }),
      {}
    ),
    filter(data => data.toFilter),
    pluck('value')
  )

export default filterPrevious
