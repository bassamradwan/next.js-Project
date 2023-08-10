import { AdsWrapper } from "./StyledAdsComponent";
import AdsListComponent from "./AdsListComponent";
import FilterComponent from "./FilterComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAds } from "@/hooks/useAds";

const AdsCardComponent = () => {
  // ----------Handle the filter component----------------
  const [ismobileFilter, setIsmobileFilter] = useState(false);
  const handleShowFilter = () => {
    setIsmobileFilter(!ismobileFilter);
  };

  // ----------Get the query params from the url----------------
  const router = useRouter();
  let { searchText, city, category, priceRange, selectedYears, orderBy } = router.query;

  if (router.query.search) {
    const search = JSON.parse(router.query.search as string);
    searchText = search.searchText;
    city = search.city;
    category = search.category;
    priceRange = search.priceRange;
    selectedYears = search.selectedYears;
    orderBy = search.orderBy;
  }
  const [searchParams, setSearchParams] = useState({
    searchText,
    city,
    category,
    priceRange,
    selectedYears,
    orderBy,
  });

  useEffect(() => {
    setSearchParams({ searchText, city, category, priceRange, selectedYears, orderBy });
  }, [searchText, city, category, priceRange, selectedYears, orderBy]);

  // get the ads from the the custom hook
  const { ads, pagination } = useAds(searchParams);

  return (
    <AdsWrapper>
      <FilterComponent isMobileFilter={ismobileFilter} ads={ads} pagination={pagination} />
      <AdsListComponent
        isMobileFilter={ismobileFilter}
        handleShowFilter={handleShowFilter}
        ads={ads}
        pagination={pagination}
      />
    </AdsWrapper>
  );
};
export default AdsCardComponent;
