import { helper } from '@ember/component/helper';

/*
    propertyType 을 pass 받아서 communityPropertyTypes 에서
    있으면 Community 를 return 하고, 아니면 Standalone 을
    return 한다.
*/
const communityPropertyTypes = [
    'Condo',
    'Townhouse',
    'Apartment',
];
/*  call
        templates/components/rental-listing.hbs
        {{rental-property-type this.rental.category}} - {{this.rental.category}}
    receive
        helpers//rental-property-type.js
        rentalPropertyType([propertyType])
*/

export function rentalPropertyType([propertyType]) {
    if (communityPropertyTypes.includes(propertyType)) {
        return 'Community';
    }
    return 'Standalone';
}

export default helper(rentalPropertyType);