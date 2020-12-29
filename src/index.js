import * as a from './foo.ts'
import { version } from '../package.json'
// import jquery from 'jquery'
import './style.css'

export const demo = () => {
    const { foo, ...rest } = a
    foo()
    console.log(rest, version)
}

const container = '<div class="container" style="color: #ffcc33">Hello World</div>'
document.getElementById('app').innerHTML = container
