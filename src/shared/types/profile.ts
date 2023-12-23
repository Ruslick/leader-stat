export interface ProfileItem {
    password: string,
    last_login: Date,
    first_name: string,
    last_name: string,
    middle_name: string,
    email: string,
    phone: string,
    count_point: number,
    is_active: boolean,
    is_staff: boolean,
    is_superuser: boolean,
    groups: string[],
    user_permissions: string[],
}

export interface ProfileAPIModel {
    result : ProfileItem;
}