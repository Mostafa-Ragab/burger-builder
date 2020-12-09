import './layout.scss'
import Aux from '../../hoc/Aux_js'

const Layout = (props) => (
    <Aux>
        <main className="content">
            {PaymentResponse.children}
        </main>
    </Aux>
)
export default Layout