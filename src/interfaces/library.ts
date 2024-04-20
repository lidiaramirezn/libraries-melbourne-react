export type Library = {
  name: string;
  id: string;
  address: string;
  schedule: Schedule[];
  linkAddress: string;
}

export type Schedule = {
  day: string;
  start_time: string;
  end_time: string
}