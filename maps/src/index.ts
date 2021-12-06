/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('google-map');

customMap.addMarker(new User());
customMap.addMarker(new Company());
