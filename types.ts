export interface RootState {
    repositories: Repository[];
  }
  
  export interface Repository {
    id: number;
    name: string;
  }