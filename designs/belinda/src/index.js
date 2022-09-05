import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import config from '../config'
import draftTop from './top'

// Create new design
const Pattern = new freesewing.Design(config, plugins)

// Attach the draft methods to the prototype
Pattern.prototype.draftTop = draftTop

export default Pattern
