import { version } from './package.json'

export default {
  name: 'belinda',
  version,
  design: '',
  code: '',
  department: '',
  type: '',
  difficulty: 3,
  tags: [ ],
  optionGroups: {
    fit: ['topwidth'],
  },
  measurements: ["head"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ['top'],
  options: {
  	topwidth: { pct: 160, min: 120, max: 180}
//    size: { pct: 50, min: 10, max: 100 },
  },
}
