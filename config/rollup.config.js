import rollupDev from './rollup.dev.config'
import rollupProd from './rollup.prod.config'

const isProd = process.env.NODE_ENV === 'production'

export default isProd ? rollupProd : rollupDev
