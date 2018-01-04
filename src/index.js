import _ from 'lodash';
import _ from 'lodash/add';

export function addAll(nums) {
    return _.reduce(nums, (accum, ref) => {
        return accum + ref;
    }, 0);
};

export function multiplyAll(nums) {
    return _.reduce(nums, (accum, ref) => {
        return accum * ref;
    }, 1);
};