
import { configureStore } from '@reduxjs/toolkit'

import Productreducer from './Productslice'
import Cartslice from './Cartslice'
export default configureStore({
    reducer:{ 
        
        // NotesSlice,
        // messageSlice,

        Productreducer,
        Cartslice,
      
    }
})