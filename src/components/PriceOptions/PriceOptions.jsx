import PropType from 'prop-types'
const PriceOptions = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-600 rounded-md p-5 text-white'>
            <h1 className='text-center'> 

                <span className='text-7xl font-black'>Price:{price}</span>
                 <span className='text-3xl'>/mon</span>
                 
            </h1>
            <h4 className='text-4xl text-center my-8'>{name}</h4>
             {
                features
             }
        </div>
    );
};
PriceOptions.propType={
    option:PropType.object
}
export default PriceOptions;