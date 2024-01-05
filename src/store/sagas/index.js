import { all } from 'redux-saga/effects';

import imagesSaga from './imageSaga';
//import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(),
        // statsSaga()
    ]);
}