import { Fragment } from 'react';

import MealsSummary from './HelpersMeal/MealsSummary/MealsSummary';
import AvailableMeals from './HelpersMeal/AvailableMeals/AvailableMeals';

function Meals() {
    return ( 
<Fragment>
    <MealsSummary />
    <AvailableMeals />
</Fragment>
     );
}

export default Meals;