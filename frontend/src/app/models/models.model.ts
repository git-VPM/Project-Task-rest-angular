export class Type {
    pk_bint_id?: any;
    vchr_name?: any;
}
export class Client {
    pk_bint_id?: any;
    vchr_name?: any;
}
export class Priority {
    pk_bint_id?: any;
    vchr_name?: any;
}
export class User {
    pk_bint_id?: any;
    vchr_name?: any;
}
export class Task {
    pk_bint_id?: any;
    rep_date?: any;
    fk_type?: any;
    fk_client?: any;
    fk_priority?: any;
    vchr_title?: any;
    vchr_remarks?: any;
    created_date?: any;     //not used
    fk_type__vchr_name?: any;
    fk_client__vchr_name?: any;
    fk_priority__vchr_name?: any;
    fk_user_detail?: any;
    fk_user_detail__vchr_name?: any;
    status?: Number;
}

export class Task_Detail {
    pk_bint_id?: any;
    fk_task?: any;
    fk_task_id?: any;
    fk_task__vchr_title?: any;
    vchr_remarks?: any;
    fk_user_detail_id?: any;
    fk_user_detail__vchr_name?: any;
    date_action?: any;
    status?: Number;
}