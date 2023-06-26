import React from "react";
import  FormRow  from "./form-row";
import  FormRowSelect  from "./form-row-select";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();
  
  const handleSearch = (e) => {
    console.log(e.target.name);
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
