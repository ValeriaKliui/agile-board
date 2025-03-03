import { Timestamp } from 'firebase/firestore';

export const formatFromTmstpToDate = (tmstp: Timestamp) => tmstp.toDate();
