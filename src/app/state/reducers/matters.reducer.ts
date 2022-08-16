import { createReducer, on } from '@ngrx/store';
import { MattersState } from '@core/models/matters.state';
import { createdMatter, createMatter, loadedMatters, loadMatters } from '../actions/matters.actions';

export const initialState: MattersState = {
  loading: true,
  page: 1,
  perPage: 10,
  totalItems: 0,
  items: []
};

export const mattersReducer = createReducer(
  initialState,
  on(loadMatters, (state) => {
    return {...state, loading:true}
  }),
  on(loadedMatters, (state, {matters}) => {
    return {...state, ...matters, loading:false}
  }),
  on(createMatter, (state)=>{
    return {...state, loading:true}
  }),
  on(createdMatter, (state, matter)=>{
    return {...[matter], ...state, loading:false }
  })
);
