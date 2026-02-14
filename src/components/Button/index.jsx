import  PropTypes  from  'prop-types' ;
import { Button } from "./styles"

function ButtonDefault({ children, theme, ...props }) {

    return(
        <Button {...props} theme={theme} >{children}</Button>
    )
}

ButtonDefault.propTypes = {
    theme: PropTypes.string
}

export default ButtonDefault