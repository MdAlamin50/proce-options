import PropType from 'prop-types'
import Features from '../Features/Features';
const PriceOptions = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-600 rounded-md  flex flex-col p-5 text-white'>
            <h1 className='text-center'> 

                <span className='text-7xl font-black'>Price:{price}</span>
                 <span className='text-3xl'>/mon</span>
                 
            </h1>
            <h4 className='text-4xl text-center my-8'>{name}</h4>
             <div className='pl-6 flex-grow'>
             {
                features.map((feature,idx)=> <Features key={idx} feature={feature}></Features> )
            }
             </div>
             <button className='bg-green-700 w-full mt-12 rounded-lg hover:bg-green-900 font-bold p-2'>Buy Now</button>
            
        </div>
    );
};
PriceOptions.propTypes={
    option:PropType.object
}
export default PriceOptions;