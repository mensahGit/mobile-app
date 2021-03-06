// libs
import { ActionReducer, combineReducers, Action } from '@ngrx/store';

// app
import { type } from '../helpers/type';

// various app module state
import { uiReducer } from '../core/reducers';
import { UIState } from '../core/states';
import { searchReducer } from '../search/reducers';
import { SearchState } from '../search/states';
import { speakerReducer } from '../speakers/reducers';
import { SpeakerState } from '../speakers/states';
import { sponsorReducer } from '../sponsors/reducers';
import { SponsorState } from '../sponsors/states';
import { userReducer } from '../user/reducers';
import { UserState } from '../user/states';
import { eventReducer } from '../events/reducers';
import { EventState } from '../events/states';

export namespace AppActions {
    const CATEGORY: string = 'App';

    export interface IActions {
        NOOP: string;
    }

    export const ActionTypes: IActions = {
        NOOP: type(`${CATEGORY} Noop`),
    };

    export class NoopAction implements Action {
        type = ActionTypes.NOOP;
        payload: string = null;
    }

    export type Actions = NoopAction;
}

// overall shape of app state
export interface IAppState {
    events: EventState.IState;
    search: SearchState.IState;
    speakers: SpeakerState.IState;
    sponsors: SponsorState.IState;
    user: UserState.IState;
    ui: UIState.IState;
}

export const reducers = {
    events:     eventReducer,
    search:     searchReducer,
    speakers:   speakerReducer,
    sponsors:   sponsorReducer,
    user:       userReducer,
    ui:         uiReducer,
};

// const appStateReducer: ActionReducer<IAppState> = combineReducers(reducers);

// export function AppReducer(state: any,
//                            action: any) {
//     return reducers;// appStateReducer(state, action);
// }
