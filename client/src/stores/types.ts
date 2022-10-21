export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    workouts?: Workout[];
};

export type Workout = {
    title: string;
    image: File;
    time: number;
    description: string;
}

