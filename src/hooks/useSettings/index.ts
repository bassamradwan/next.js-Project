import { useQuery } from "@tanstack/react-query";

interface Translation {
  [key: string]: string;
}

interface Banner {
  title: Translation;
  description: Translation;
  image_path: string;
}

interface Statistic {
  title: Translation;
  count: number;
  icon: string;
}

interface Statistics {
  total_technicians: Statistic;
  positive_ratings: Statistic;
  job_applications: Statistic;
  finished_projects: Statistic;
}

interface Contacts {
  phone: string;
  whats_app: string;
  facebook: string;
  twitter: string;
}

interface Currency {
  name: Translation;
  acronym: Translation;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

interface Settings {
  translations: Translation;
  banner: Banner;
  statistics: Statistics;
  contacts: Contacts;
  currency: Currencies;
}

const SETTINGS_QUERY_KEY = ["settings"];

export const useSettings = (): {
  settings: Settings | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isError } = useQuery<{ data: Settings }>(SETTINGS_QUERY_KEY, async() =>
   await fetch(`${process.env.GET_SETTINGS_URL}`).then(response => response.json()),
  );
  const settings = data?.data;

  return {
    settings,
    isLoading,
    isError,
  };
};
