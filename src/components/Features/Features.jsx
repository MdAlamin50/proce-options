import PropType from 'prop-types'
import { FaCheckSquare } from "react-icons/fa";
const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><FaCheckSquare className='text-green-600 mr-3'></FaCheckSquare> {feature}</p>
        </div>
    );
};
Features.propTypes={
    feature:PropType.string
}
export default Features;