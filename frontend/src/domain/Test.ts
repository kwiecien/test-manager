import {TestStatus} from "./TestStatus";

export interface Test {
    id: number;
    status: TestStatus;
}