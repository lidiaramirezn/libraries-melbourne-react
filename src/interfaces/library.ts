export type ILibrary = {
  name: string;
  id: string;
  address?: string;
  schedule?: ISchedule[];
  linkAddress?: string;
}

export type ISchedule = {
  day: string;
  start_time: string;
  end_time: string
}