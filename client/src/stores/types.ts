

export type User = {
    // firstName: string;
    // lastName: string;
    username: string;
    password: string;
    // workouts: Workout[];
};

export type Workout = {
    id: number;
    name: string;//TODO: make this title
    weight: number;
    reps: number;
    date: string;
}