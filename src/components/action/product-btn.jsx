import { Collections } from '../../utils/stock/all'
import { useState, useEffect } from 'react';

export const ActionBtn = ({ inStock }) => {
    return (
        <button type='button' className='btn__quick-add btn__fullsize btn'>
            {inStock ? 'Add to bag' : 'Notify by email'}
        </button>
    )
}