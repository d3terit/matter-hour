import { createAction, props } from '@ngrx/store';
import { ReqUserData } from '@core/models/reqUserData.model';
import { MattersState } from '@core/models/matters.state';
import { Matter } from '@core/models/matter.model';

export const loadMatters = createAction(
  '[Matters data] Load matters',
  props<{userData: ReqUserData}>()
)

export const loadedMatters = createAction(
  '[Matters data] Loaded success',
  props<{matters: MattersState}>()
);

export const createMatter = createAction(
  '[Matters data] Create matter',
  props<{matter:Matter,creator:string}>
)

export const createdMatter = createAction(
  '[Matters data] Created matter',
  props<{matter:Matter}>
)
