import { Collections } from '../../utils/stock/all'
import { useState, useEffect } from 'react';

export const ActionBtn = ({ qty }) => {
    return (
        <button type='button' className='btn__quick-add btn__fullsize btn'>
            {qty > 0 ? 'Add to bag' : 'Notify by email'}
        </button>
    )
}