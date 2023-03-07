export interface RootState {
    repositories: Repository[];
  }
  
  export interface Repository {
    html_url: string;
    id: number;
    name: string;
    description: string;
  }